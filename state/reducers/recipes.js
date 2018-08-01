const recipes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return [
                ...state,
                {
                    id: action.id,
                    recipe: action.recipe,
                    completed: false
                }
            ];
        default:
            return state;
    };
};

export default recipes;