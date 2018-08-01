import { connect } from 'react-redux';

import RecipeList from '../components/RecipeList';

const getVisibleRecipes = (recipes, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return recipes;
        case 'SHOW_COMPLETED':
            return recipes.filter(r => r.completed);
        case 'SHOW_ACTIVE':
            return recipes.filter(r => !r.competed);
    };
};

const mapStateToProps = state => {
    return {
        recipes: getVisibleRecipes(state.recipes, state.visibilityFilter)
    };
};

const VisibleRecipeList = connect(
    mapStateToProps
)(RecipeList);

export default VisibleRecipeList;