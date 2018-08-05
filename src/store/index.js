import { createStore, applyMiddleware, compose } from 'redux';
//import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const configureStore = (preloadedState={}) => {
    //const loggerMiddleware = createLogger();

    const store = createStore(
        rootReducer,
        {recipes: [{id:-1, author:"Will", completed:false, recipe:"first recipe"}]}
        //preloadedState,
        // applyMiddleware(
        //     thunkMiddleware,
        //     //loggerMiddleware
        // ),
    );

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers', () => {
    //         store.replaceReducer(rootReducer)
    //     })
    // }
    
    return store;
}

export default configureStore;