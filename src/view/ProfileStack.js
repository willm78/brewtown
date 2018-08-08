import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView, createStackNavigator } from 'react-navigation';

import styles from './viewStyles';

class ProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Profile Screen</Text>
            </SafeAreaView>
        );
    };
};

const Stack = createStackNavigator({
    'Home': ProfileScreen,
},
{
    mode: 'card',
    headerMode: 'float',
    navigationOptions: {
        title: 'Profile',
        headerStyle: styles.header,
    }
})

export default class ProfileStack extends Component {
    render() {
        return (
            <Stack />
        );
    }
}