import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import Footer from '../components/Footer';
import AddRecipe from '../containers/AddRecipe';
import VisibleRecipeList from '../containers/VisibleRecipeList';
import AppState from '../containers/AppState';
//<AppState />

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <Text style={styles.title}>Brewtown</Text>
                <AddRecipe />
                <VisibleRecipeList />
                <Footer />
                <AppState />
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
    title: {
        color: 'gold',
        fontSize: 14,
    }
});
