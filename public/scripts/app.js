"use strict";

console.log('app.js loaded');

var template = React.createElement(
  "p",
  null,
  "are we loading JSX?"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
