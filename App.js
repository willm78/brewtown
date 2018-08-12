import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./src/view";
import { store, persistor } from "./src/store/configureStore";

// ----- Don't save state
// persistor.purge()
//   .then(msg => {
//     console.log(msg);
//   }, err => {
//     console.log(err);
//   });
// -----

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
