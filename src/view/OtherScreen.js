import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Footer from '../components/Footer';
import AddRecipe from '../containers/AddRecipe';
import VisibleRecipeList from '../containers/VisibleRecipeList';
import AppState from '../containers/AppState';

export default class App extends Component {
    static navigationOptions = {
        headerTitle: 'Other',
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <Text>{JSON.stringify(this.props)}</Text>
                <Button
                    title='Go Home'
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Text>Other Screen</Text>
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
