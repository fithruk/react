import React from "react";
import ReactDOM from "react-dom";
import Mailbox from "./Mailbox";

import "./index.scss";

const root = document.querySelector("#root");

ReactDOM.render(<Mailbox unreadMessages={["23", "34"]} />, root);
