import React from "react";
import parser from 'vdom-parser'
const handleClick = () => {
  const body = document.body;
  console.log(parser(body));
};
const Button = () => {
  return <button onClick={handleClick}>Click!</button>;
};

export default Button;
