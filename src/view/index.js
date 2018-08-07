import React, { Component } from 'react';
import { createTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Other: {
            screen: OtherScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
};
