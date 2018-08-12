import { defaultState } from "../store/stateShape";

const initialState = defaultState.localCounter;

const localCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      let counter = state;
      return counter++;
    default:
      return state;
  }
};

export default localCounter;
