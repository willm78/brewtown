import { defaultState } from "../store/stateShape";

const initialState = defaultState.thisUser;

const thisUser = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      let {
        id,
        name,
        facebookLoggedIn,
        facebookId,
        facebookName,
        isSharing
      } = action.data;
      if (isSharing === undefined) {
        isSharing = null;
      }
      if (facebookLoggedIn === undefined) {
        facebookLoggedIn = false;
      }
      if (facebookId === undefined) {
        facebookId = null;
      }
      if (facebookName === undefined) {
        facebookName = null;
      }
      return {
        isLoggedIn: true,
        hasSkippedLogin: false,
        loginInProgress: false,
        id,
        name,
        facebookLoggedIn,
        facebookId,
        facebookName,
        isSharing
      };

    case "SKIPPED_LOGIN":
      return {
        ...initialState,
        hasSkippedLogin: true
      };

    case "LOGGED_OUT":
      return initialState;

    case "SET_SHARING":
      return {
        ...state,
        isSharing: action.data
      };

    case "LOGIN_IN_PROGRESS":
      return {
        ...state,
        loginInProgress: action.data
      };

    default:
      return state;
  }
};

export default thisUser;
