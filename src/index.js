import React, { Component } from "react";
import { render } from "react-dom";

import Appear, { AppearConsumer, AppearProvider } from "./AppearContext";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <AppearProvider>
        <div style={styles}>
          <Appear />
          <AppearConsumer>
            {({ show }) => <button onClick={show}>show</button>}
          </AppearConsumer>
        </div>
      </AppearProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
