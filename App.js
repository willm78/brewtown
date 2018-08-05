import React from 'react';
import { Provider } from 'react-redux';

import App from './src/view';
import configureStore from './src/store';

export const store = configureStore();

export default class extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
};