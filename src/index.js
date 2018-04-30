import React from "react";
import { render } from "react-dom";

import Modal, { ModalConsumer, ModalProvider } from "./ModalContext";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => {
  return (
    <ModalProvider>
      <div style={styles}>
        <Modal>
          {({ show, hide }) => (
            <div className="modal">
              <div className="modal-title">Title</div>
              <div className="modal-body">Content</div>
              <div className="modal-body">
                <button onClick={hide}>Ok</button>
                <button onClick={hide}>Cancel</button>
              </div>
            </div>
          )}
        </Modal>
        <ModalConsumer>
          {({ visible, toggle }) => (
            <button onClick={toggle}>
              {visible ? "Hide" : "Show"} {"visible: " + visible}
            </button>
          )}
        </ModalConsumer>
      </div>
    </ModalProvider>
  );
};

render(<App />, document.getElementById("root"));
