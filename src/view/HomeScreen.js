import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Footer from '../components/Footer';
import AddRecipe from '../containers/AddRecipe';
import VisibleRecipeList from '../containers/VisibleRecipeList';
import AppState from '../containers/AppState';

export default class App extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <Button
                    title='Go To Other Screen'
                    onPress={() => this.props.navigation.navigate('Other')}
                />
                <Text>Brewtown</Text>
                <AddRecipe />
                <VisibleRecipeList />
                <Footer />
                <AppState />
            </SafeAreaView>
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