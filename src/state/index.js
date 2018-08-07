import { combineReducers, createStore } from 'redux';

import recipes from './recipes';
import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
    recipes,
    visibilityFilter
});

const store = createStore(
    reducer,
);

export default () => {
    return store;
};
