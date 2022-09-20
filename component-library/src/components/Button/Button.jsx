import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ type, children }) => (
  <button className="button" type={type}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: "button",
  children: "Click Me",
};

export default Button;
