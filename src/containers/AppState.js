import React from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { store } from '../../App';

let AppState = () => {
    return (
        <View>
            <Text>{ `state: ${JSON.stringify(store.getState(), null, 2)}` }</Text>
        </View>
    );
};

AppState = connect()(AppState);

export default AppState;