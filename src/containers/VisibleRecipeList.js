import { connect } from "react-redux";

import { toggleRecipe } from "../actions";
import RecipeList from "../components/RecipeList";

const getVisibleRecipes = (recipes, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return recipes;
    case "SHOW_COMPLETED":
      return recipes.filter(r => r.completed);
    case "SHOW_ACTIVE":
      return recipes.filter(r => !r.completed);
    default:
      return recipes;
  }
};

const mapStateToProps = state => {
  return {
    recipes: getVisibleRecipes(state.recipes, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleRecipe: id => {
      dispatch(toggleRecipe(id));
    }
  };
};

const VisibleRecipeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

export default VisibleRecipeList;
