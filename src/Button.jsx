import React from "react";
import Button from "@material-ui/core/Button";
import parser from "vdom-parser";
// const toVNode = require("snabbdom/tovnode").default;
// const h = require('snabbdom/h').default;
const h = require("virtual-dom/h");
const createElement = require("virtual-dom/create-element");
const VNode = require("virtual-dom/vnode/vnode");
const VText = require("virtual-dom/vnode/vtext");
import ipRegex from "ip-regex";
let oldNode = {};

const traverse = ({ tagName, properties = {}, children = [], text }) => {
  let node;
  if (tagName) {
    node = new VNode(tagName, properties);
  }
  if (text) {
    node = new VText(text);
  }
  if (Object.entries(oldNode).length === 0 && oldNode.constructor === Object) {
    oldNode = node;
  } else {
    oldNode.children.push(node);
  }

  if (children) {
    const reducer = children.map(x => traverse(x));
    oldNode.children.push(reducer);
  }
  return oldNode;
};

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
const handleClick = () => {
  const body = document.body;
  // const parser = new DOMParser();
  // const oldDom = parser.parseFromString(body, "text/xml");

  const oldDom = parser(body);
  // const oldDom = toVNode(body);
  console.log(oldDom);

  const newDOM = traverse(oldDom);
  console.log(newDOM);
};
const Btn = () => {
  return (
    <Button color="primary" variant="outlined" onClick={handleClick}>
      Click!
    </Button>
  );
};

export default Btn;
