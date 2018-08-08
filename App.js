import React from "react";
import { Provider } from "react-redux";

import App from "./src/view";
import getstore from "./src/state";

const store = getstore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
