import React from "react";
import { render } from "react-dom";

import Modal, { ModalConsumer, ModalProvider } from "./ModalContext";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => {
  const buttons = [
    {
      label: "Ok",
      onClick: ({ hide }) => hide()
    },
    {
      label: "Cancel",
      onClick: ({ hide }) => hide()
    }
  ];

  return (
    <ModalProvider>
      <div style={styles}>
        <Modal
          title={"Modal Title"}
          content={"Modal content"}
          buttons={buttons}
        />
        <ModalConsumer>
          {({ show }) => <button onClick={show}>Show</button>}
        </ModalConsumer>
      </div>
    </ModalProvider>
  );
};

render(<App />, document.getElementById("root"));
