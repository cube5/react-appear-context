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
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-title">Title</div>
        <div className="modal-body">Body</div>
        <div className="modal-footer">Footer</div>
        <button onClick={this.props.hide}>hide</button>
      </div>,
      this.container
    );
  }
}
