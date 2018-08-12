import { RECIPE } from "../store/schema";

const create = (state = RECIPE, action) => {
  switch (action.type) {
    case "CREATE_RECIPE":
      return {
        recipe: action.recipe
      };
    case "CLEAR_CREATE":
      return {
        recipe: RECIPE
      };
    default:
      return state;
  }
};

export default create;
