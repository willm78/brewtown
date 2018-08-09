const create = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_RECIPE":
      return {
        recipe: action.recipe
      };
    case "CLEAR_CREATE":
      return {
        recipe: ""
      };
    default:
      return state;
  }
};

export default create;
