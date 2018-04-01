import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const AppearContext = React.createContext();

const AppearConsumer = AppearContext.Consumer;

class AppearProvider extends Component {
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
      <AppearContext.Provider
        value={{
          show: this.show,
          hide: this.hide,
          visible: this.state.visible
        }}
      >
        {this.props.children}
      </AppearContext.Provider>
    );
  }
}

const Modal = ({ hide }) =>
  ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-title">Title</div>
      <div className="modal-body">Body</div>
      <div className="modal-footer">Footer</div>
      <button onClick={hide}>hide</button>
    </div>,
    document.getElementById("modal")
  );

const Appear = () => (
  <AppearConsumer>
    {({ visible, show, hide }) => (visible ? <Modal hide={hide} /> : null)}
  </AppearConsumer>
);

export { AppearProvider, AppearConsumer };
export default Appear;
