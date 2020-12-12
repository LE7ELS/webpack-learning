import "./css/style.css";
import "./css/font.scss";

// const hello = require("./hello.js");
// document.querySelector("#root").appendChild(hello());

import React from "react";
import { render } from "react-dom";
import Hello from "./hello"; // 可省略 .js 后缀

render(<Hello />, document.getElementById("root"));
