import { CALL_API, Schemas } from "../middleware/api";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

const fetchUser = userName => ({
  [CALL_API]: {
    types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
    schema: Schemas.USER
  }
});

export const loadUser = (userName, requiredFields = []) => (
  dispatch,
  getState
) => {
  const user = getState().entities.users.byId[userName];

  // TODO: This never reloads if fields are already present in the state
  if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
    return null;
  }

  return dispatch(fetchUser(login));
};

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

const fetchUser = userName => ({
  [CALL_API]: {
    types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
    schema: Schemas.USER
  }
});

export const loadUser = (userName, requiredFields = []) => (
  dispatch,
  getState
) => {
  const user = getState().entities.users.byId[userName];

  // TODO: This never reloads if fields are already present in the state
  if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
    return null;
  }

  return dispatch(fetchUser(login));
};

