const author = 'author_name';
let nextRecipe = 0;

export const addRecipe = recipe => ({
    type: 'ADD_RECIPE',
    id: nextRecipe++,
    recipe
});

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