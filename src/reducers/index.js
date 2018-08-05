import { combineReducers } from 'redux';

import recipes from './recipes';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    recipes,
    visibilityFilter
});

export default rootReducer;
