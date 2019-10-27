import React from 'react';
import Button from '@material-ui/core/Button';
// *** virtual-dom packages ***
// import parser from 'vdom-parser';
// import ipParser from './ipParser';

// const createElement = require('virtual-dom/create-element');
// const diff = require('virtual-dom/diff');
// const patch = require('virtual-dom/patch');

// *** snabbdom packages ***
const snabbdom = require("./snabb/dist/snabbdom");
const patch = snabbdom.init([
  // Init patch function with chosen modules
  require("snabbdom/modules/class").default, // makes it easy to toggle classes
  require("snabbdom/modules/props").default, // for setting properties on DOM elements
  require("snabbdom/modules/style").default, // handles styling on elements with support for animations
  require("snabbdom/modules/eventlisteners").default // attaches event listeners
]);
const toVNode = require('./snabb/dist/tovnode').default;

const handleClick = () => {
  // ***virtual-dom***
  // const tree = parser(document.body);
  // let rootNode = createElement(tree);
  // document.body = rootNode;
  // const newTree = ipParser(document.body);
  // const patches = diff(tree, newTree);
  // rootNode = patch(rootNode, patches);

  // ***<snabbdom>***
  const oldDom = toVNode(document.body, undefined, false);

  const newDom = toVNode(document.body, undefined, true);
  console.log('hello');
  patch(oldDom, newDom);
};
const Btn2 = () => (
  <Button
    style={{ position: 'fixed', right: '0' }}
    color="primary"
    variant="contained"
    onClick={handleClick}
  >
    change IP!
  </Button>
);

export default Btn2;

// const traverse = ({ tagName, properties = {}, children = [], text }) => {
//   let node;
//   if (tagName) {
//     node = new VNode(tagName, properties);
//   }
//   if (text) {
//     node = new VText(text);
//   }
//   if (Object.entries(oldNode).length === 0 && oldNode.constructor === Object) {
//     oldNode = node;
//   } else {
//     oldNode.children.push(node);
//   }

//   if (children) {
//     const reducer = children.map(x => traverse(x));
//     oldNode.children.push(reducer);
//   }
//   return oldNode;
// };

// const newNode = new VNode(obj.tagName, obj.properties);
// if (obj.hasOwnProperty("children") && obj.children) {
//   obj.children.map(x => {
//     if (x.tagName) {
//       const child = new VNode(x.tagName, x.properties);
//       newNode.children.push(child);
//       traverse(x);
//     } else if (x.text) {
//       let child;
//       if (ipRegex().test(obj.text)) {
//         child = new VText("found IP!!");
//       } else {
//         child = new VText(x.text);
//       }
//       newNode.children.push(child);
//     }
//   });
// }
// return newNode;
// };
