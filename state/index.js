import { combineReducers, createStore } from 'redux';

import recipes from './reducers/recipes';
import visibilityFilter from './reducers/visibilityFilter';
import { VisibilityFilters } from '../actions';

const reducer = combineReducers({
    recipes,
    visibilityFilter
});

default_state = () => {};

store = createStore(reducer);

export default () => {
    return store;
};
