// 使用原生 js
// module.exports = function () {
//     let hello = document.createElement("div");
//     hello.innerHTML = "Hello Webpack";
//     return hello;
// };

// 使用 React
import React, { Component } from "react";

let name = "Alan Fucker";
export default class Hello extends Component {
    render() {
        return <div>{name}</div>;
    }
}
