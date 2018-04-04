import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./modal.css";

export default class Modal extends Component {
  static propTypes = {
    show: PropTypes.func,
    hide: PropTypes.func,
    title: PropTypes.string,
    content: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        onClick: PropTypes.func
      })
    )
  };

  static defaultProps = {
    show: () => null,
    hide: () => null,
    title: null,
    content: null,
    buttons: []
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
    const { title, content, buttons, show, hide } = this.props;
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-title">{title}</div>
        <div className="modal-body">{content}</div>
        <div className="modal-body">
          {buttons.map((btn, index) => (
            <button key={index} onClick={() => btn.onClick({ show, hide })}>
              {btn.label}
            </button>
          ))}
        </div>
      </div>,
      this.container
    );
  }
}
