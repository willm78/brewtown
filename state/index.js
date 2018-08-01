import { combineReducers, createStore } from 'redux';

import recipes from './reducers/recipes';
import visibilityFilter from './reducers/visibilityFilter';

export default () => {
    const reducer = combineReducers({
        recipes,
        visibilityFilter
    });
    return createStore(reducer);
};