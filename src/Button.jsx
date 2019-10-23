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

const traverse = obj => {
  const newNode = new VNode(obj.tagName);
  newNode.children = [];
  if (obj.hasOwnProperty("children") && obj.children) {
    obj.children.map(x => {
      if (x.tagName) {
        const child = new VNode(x.tagName)
        child.children =[]
        newNode.children.push(child)
        traverse(x);
      } else if (x.text) {
        let child;
        if (ipRegex().test(obj.text)){
          child = new VText('found IP!!')
        } else {
          child = new VText(x.text)
        }
        newNode.children.push(child)
      }
     
    });
  }
  return newNode;
};
const handleClick = () => {
  const body = document.body;
  
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
