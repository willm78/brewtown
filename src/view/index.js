import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import NavigationService from './NavigationService';

import LibraryStack from './LibraryStack';
import ExploreStack from './ExploreStack';
import CreateStack from './CreateStack';
import ProfileStack from './ProfileStack';

import tabBarIcon from '../components/tabBarIcon';

import styles from './viewStyles';

const TopLevelNavigator = createMaterialBottomTabNavigator(
    {
        Library: {
            screen: LibraryStack,
            headerBackTitleVisible : true,
            navigationOptions: {
                title: 'Library',
                tabBarIcon: tabBarIcon('apps'),
            }
        },
        Explore: {
            screen: ExploreStack,
            navigationOptions: {
                title: 'Explore',
                tabBarIcon: tabBarIcon('add-box'),
            }
        },
        Create: {
            screen: CreateStack,
            navigationOptions: {
                title: 'Create',
                tabBarIcon: tabBarIcon('assignment'),
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                title: 'Profile',
                tabBarIcon: tabBarIcon('account-box'),
            }
        },
    },
    {
        shifting: true,
        labeled: true,
        activeTintColor: '#e6ac00',
        inactiveTintColor: '#333',
        barStyle: styles.tabBar,
        initialRouteName: 'Library',
        order: ['Library', 'Explore', 'Create', 'Profile'],
        backBehavior: 'initialRoute',
    }
);

export default class App extends React.Component {
    render() {
        return (
            <TopLevelNavigator 
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
};
