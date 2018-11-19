const recipes = (state = [], action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        {
          id: action.id,
          recipe: action.recipe,
          completed: false
        }
      ];
    case "TOGGLE_RECIPE":
      return state.map(
        recipe =>
          recipe.id === action.id
            ? { ...recipe, completed: !recipe.completed }
            : recipe
      );
    default:
      return state;
  }
};

export default recipes;
