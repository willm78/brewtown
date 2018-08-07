import React from "react";
import { connect } from "react-redux";
import { 
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer 
} from "react-navigation-redux-helpers";

import RootNavigator from "./RootNavigator";

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);

const Navigator = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => {
    return {
        state: state.nav
    };
};

export const AppWithNavigationState = connect(mapStateToProps)(Navigator);
