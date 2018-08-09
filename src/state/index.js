import { combineReducers, createStore } from "redux";

import create from "./create";
import recipes from "./recipes";
import visibilityFilter from "./visibilityFilter";

const reducer = combineReducers({
  create,
  recipes,
  visibilityFilter
});

const store = createStore(reducer);

export default () => {
  return store;
};
