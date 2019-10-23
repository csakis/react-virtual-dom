import React from 'react';
import Button from '@material-ui/core/Button';
import parser from 'vdom-parser';
import ipParser from './ipParser';

let equal = require('deep-equal');

// const toVNode = require("snabbdom/tovnode").default;
// const h = require('snabbdom/h').default;
const h = require('virtual-dom/h');
const createElement = require('virtual-dom/create-element');
const VNode = require('virtual-dom/vnode/vnode');
const VText = require('virtual-dom/vnode/vtext');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');

const handleClick = () => {
  const { body } = document;

  const oldDOM = parser(body);
  const newDOM = ipParser(body);
  console.log('eq:', equal(oldDOM, newDOM));

  const difference = diff(oldDOM, newDOM);
  console.log('TCL: handleClick -> difference', difference);
  let rootNode = createElement(newDOM);
  // console.log("TCL: handleClick -> root", root)
 
  rootNode = patch(root, difference);
};
const Btn2 = () => (
  <Button color="primary" variant="outlined" onClick={handleClick}>
    Click!
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
