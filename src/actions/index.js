const author = 'author_name';
let nextRecipe = 0;

const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = recipe => ({
    type: 'ADD_RECIPE',
    author: author,
    id: nextRecipe++,
    recipe
});

const TOGGLE_RECIPE = 'TOGGLE_RECIPE';
export const toggleRecipe = id => ({
    type: 'TOGGLE_RECIPE',
    id
})

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_BY_USER: 'SHOW_BY_USER'
};

export const actionTypes = {
    ADD_RECIPE,
    SET_VISIBILITY_FILTER,
    TOGGLE_RECIPE
}