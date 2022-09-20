import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

import "./index.css";

const App = () => (
  <>
    <Button>Submit</Button>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
