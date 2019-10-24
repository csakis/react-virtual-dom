/**
 * index.js
 *
 * A client-side DOM to vdom parser based on DOMParser API
 */

import ipRegex from 'ip-regex';

('use strict');

const VNode = require('virtual-dom/vnode/vnode');
const VText = require('virtual-dom/vnode/vtext');

let domParser;

const propertyMap = require('./property-map');
const namespaceMap = require('./namespace-map');

const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';

/**
 * DOM/html string to vdom parser
 *
 * @param   Mixed   el    DOM element or html string
 * @param   String  attr  Attribute name that contains vdom key
 * @return  Object        VNode or VText
 */
export default function parser(el, attr) {
  // empty input fallback to empty text node
  if (!el) {
    return createNode(document.createTextNode(''));
  }

  if (typeof el === 'string') {
    if (!('DOMParser' in window)) {
      throw new Error(
        'DOMParser is not available, so parsing string to DOM node is not possible.',
      );
    }
    domParser = domParser || new DOMParser();
    const doc = domParser.parseFromString(el, 'text/html');

    // most tags default to body
    if (doc.body.firstChild) {
      el = doc.getElementsByTagName('body')[0].firstChild;
      render
      // some tags, like script and style, default to head
    } else if (
      doc.head.firstChild
      && (doc.head.firstChild.tagName !== 'TITLE' || doc.title)
    ) {
      el = doc.head.firstChild;

      // special case for html comment, cdata, doctype
    } else if (doc.firstChild && doc.firstChild.tagName !== 'HTML') {
      el = doc.firstChild;

      // other element, such as whitespace, or html/body/head tag, fallback to empty text node
    } else {
      el = document.createTextNode('');
    }
  }

  if (typeof el !== 'object' || !el || !el.nodeType) {
    throw new Error('invalid dom node', el);
  }

  return createNode(el, attr);
}

/**
 * Create vdom from dom node
 *
 * @param   Object  el    DOM element
 * @param   String  attr  Attribute name that contains vdom key
 * @return  Object        VNode or VText
 */
function createNode(el, attr) {
  // html comment is not currently supported by virtual-dom
  if (el.nodeType === 3) {
    return createVirtualTextNode(el);

    // cdata or doctype is not currently supported by virtual-dom
  }
  if (el.nodeType === 1 || el.nodeType === 9) {
    return createVirtualDomNode(el, attr);
  }

  // default to empty text node
  return new VText('');
}

/**
 * Create vtext from dom node
 *
 * @param   Object  el  Text node
 * @return  Object      VText
 */
function createVirtualTextNode(el) {
  if (ipRegex().test(el.nodeValue)) {
    // console.log("TCL: createVirtualTextNode -> el.nodeValue", el.nodeValue)
    return new VText('***');
  }
  return new VText(el.nodeValue);
}

/**
 * Create vnode from dom node
 *
 * @param   Object  el    DOM element
 * @param   String  attr  Attribute name that contains vdom key
 * @return  Object        VNode
 */
function createVirtualDomNode(el, attr) {
  const ns = el.namespaceURI !== HTML_NAMESPACE ? el.namespaceURI : null;
  const key = attr && el.getAttribute(attr) ? el.getAttribute(attr) : null;

  return new VNode(
    el.tagName,
    createProperties(el),
    createChildren(el, attr),
    key,
    ns,
  );
}

/**
 * Recursively create vdom
 *
 * @param   Object  el    Parent element
 * @param   String  attr  Attribute name that contains vdom key
 * @return  Array         Child vnode or vtext
 */
function createChildren(el, attr) {
  const children = [];
  for (let i = 0; i < el.childNodes.length; i++) {
    children.push(createNode(el.childNodes[i], attr));
  }

  return children;
}

/**
 * Create properties from dom node
 *
 * @param   Object  el  DOM element
 * @return  Object      Node properties and attributes
 */
function createProperties(el) {
  const properties = {};

  if (!el.hasAttributes()) {
    return properties;
  }

  let ns;
  if (el.namespaceURI && el.namespaceURI !== HTML_NAMESPACE) {
    ns = el.namespaceURI;
  }

  let attr;
  for (let i = 0; i < el.attributes.length; i++) {
    // use built in css style parsing
    if (el.attributes[i].name == 'style') {
      attr = createStyleProperty(el);
    } else if (ns) {
      attr = createPropertyNS(el.attributes[i]);
    } else {
      attr = createProperty(el.attributes[i]);
    }

    // special case, namespaced attribute, use properties.foobar
    if (attr.ns) {
      properties[attr.name] = {
        namespace: attr.ns,
        value: attr.value,
      };

      // special case, use properties.attributes.foobar
    } else if (attr.isAttr) {
      // init attributes object only when necessary
      if (!properties.attributes) {
        properties.attributes = {};
      }
      properties.attributes[attr.name] = attr.value;

      // default case, use properties.foobar
    } else {
      properties[attr.name] = attr.value;
    }
  }

  return properties;
}

/**
 * Create property from dom attribute
 *
 * @param   Object  attr  DOM attribute
 * @return  Object        Normalized attribute
 */
function createProperty(attr) {
  let name;
  let value;
  let isAttr;

  // using a map to find the correct case of property name
  if (propertyMap[attr.name]) {
    name = propertyMap[attr.name];
  } else {
    name = attr.name;
  }
  // special cases for data attribute, we default to properties.attributes.data
  if (name.indexOf('data-') === 0 || name.indexOf('aria-') === 0) {
    value = attr.value;
    isAttr = true;
  } else {
    value = attr.value;
  }

  return {
    name,
    value,
    isAttr: isAttr || false,
  };
}

/**
 * Create namespaced property from dom attribute
 *
 * @param   Object  attr  DOM attribute
 * @return  Object        Normalized attribute
 */
function createPropertyNS(attr) {
  let name;
  let value;

  return {
    name: attr.name,
    value: attr.value,
    ns: namespaceMap[attr.name] || '',
  };
}

/**
 * Create style property from dom node
 *
 * @param   Object  el  DOM node
 * @return  Object        Normalized attribute
 */
function createStyleProperty(el) {
  const { style } = el;
  const output = {};
  for (let i = 0; i < style.length; ++i) {
    const item = style.item(i);
    output[item] = String(style[item]);
    // hack to workaround browser inconsistency with url()
    if (output[item].indexOf('url') > -1) {
      output[item] = output[item].replace(/\"/g, '');
    }
  }
  return { name: 'style', value: output };
}
