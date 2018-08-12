import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AsyncStorage } from "react-native";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootReducer from "../reducers";

isDebuggingInChrome = false;

const loggerMiddleware = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const persistor = persistStore(store);

if (isDebuggingInChrome) {
  window.store = store;
}

export { store, persistor };
