import React from 'react';
import ReactDOM from 'react-dom'
import validator from 'validator';

console.log("VAL",validator.isEmail("test"))


const template = <p>Hello</p>

ReactDOM.render(template , document.getElementById("app"))