import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import { AppWithNavigationState } from '../navigation/ReduxNavigation';

import Footer from '../components/Footer';
import AddRecipe from '../containers/AddRecipe';
import VisibleRecipeList from '../containers/VisibleRecipeList';
import AppState from '../containers/AppState';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppWithNavigationState />
            </View>
        );
    };
};
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
// {Platform.OS === 'ios' && <StatusBar barStyle="light content" />}
