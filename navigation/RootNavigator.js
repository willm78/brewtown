import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Launch from '../view/screens/LaunchScreen';
import Other from '../view/screens/OtherScreen';

import styles from './styles/NavigationStyles';

// // Manifest of possible screens
// const PrimaryNav = createStackNavigator({
//   LaunchScreen: { screen: LaunchScreen },
//   OtherScreen: { screen: OtherScreen }
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'LaunchScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// })

// Manifest of possible screens
const RootNavigator = createStackNavigator(
    {
        LaunchScreen: { screen: Launch },
        OtherScreen: { screen: Other },
    },
);

export default RootNavigator;