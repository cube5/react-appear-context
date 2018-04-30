import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./modal.css";

export default class Modal extends Component {
  static propTypes = {
    show: PropTypes.func,
    hide: PropTypes.func
  };

  static defaultProps = {
    show: () => null,
    hide: () => null
  };

  container = document.getElementById("modal") || this.createContanier();

  createContanier = () => {
    const parent = document.body;

    const container = document.createElement("div");
    container.setAttribute("id", "modal");

    parent.appendChild(container);

    return container;
  };

  render() {
    const { show, hide, children } = this.props;

    return ReactDOM.createPortal(children({ show, hide }), this.container);
  }
}
