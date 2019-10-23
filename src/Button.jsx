import React from "react";
import Button from '@material-ui/core/Button';
import parser from "vdom-parser";
import ipRegex from 'ip-regex'
const traverse = obj => {
  if (obj.hasOwnProperty('children') && obj.children ) {
    obj.children.map(x=>traverse(x))
  }
  if(obj.hasOwnProperty('text') && ipRegex().test(obj.text)) {
    console.log(obj); 
  }
  return;
};
const handleClick = () => {
  const body = document.body;
  const vNode = parser(body);
  traverse(vNode);
  
};
const Btn = () => {
  return <Button color='primary' variant='outlined' onClick={handleClick}>Click!</Button>;
};

export default Btn;
