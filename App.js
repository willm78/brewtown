import React from 'react';
import { Provider } from 'react-redux';

import App from './view';
import getstore from './state';

const store = getstore();

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    };
};
