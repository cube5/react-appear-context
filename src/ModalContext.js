import React, { Component } from "react";
import PropTypes from "prop-types";

import ModalComponent from "./Modal";

const ModalContext = React.createContext();

const ModalConsumer = ModalContext.Consumer;

class ModalProvider extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  static defaultProps = {
    children: null
  };

  state = {
    visible: false
  };

  show = () => this.setState({ visible: true });

  hide = () => this.setState({ visible: false });

  render() {
    return (
      <ModalContext.Provider
        value={{
          show: this.show,
          hide: this.hide,
          visible: this.state.visible
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

const Modal = props => (
  <ModalConsumer>
    {({ visible, show, hide }) =>
      visible ? <ModalComponent {...props} show={show} hide={hide} /> : null
    }
  </ModalConsumer>
);

export { ModalProvider, ModalConsumer };
export default Modal;
