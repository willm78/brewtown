import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

import recipes from './reducers/recipes';
import visibilityFilter from './reducers/visibilityFilter';
import { middleware } from '../navigation/ReduxNavigation';
import RootNavigator from '../navigation/RootNavigator';

const navReducer = createNavigationReducer(RootNavigator);

const reducer = combineReducers({
    nav: navReducer,
    recipes,
    visibilityFilter,
});

default_state = () => {};

const store = createStore(
    reducer,
    applyMiddleware(middleware),
);

// export default () => {
//     return store;
// };

export default store;