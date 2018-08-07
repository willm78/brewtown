import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button } from 'react-native';

import Footer from '../../components/Footer';
import AddRecipe from '../../containers/AddRecipe';
import VisibleRecipeList from '../../containers/VisibleRecipeList';
import AppState from '../../containers/AppState';

const LaunchScreen = ({ nav }) => (
    <View style={styles.container}>
        <Text>Brewtown</Text>
        <AddRecipe />
        <VisibleRecipeList />
        <Footer />
        <AppState />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LaunchScreen;
{/* <Button
                title='to other screen'
                onPress={() => nav.navigate('OtherScreen')}
            /> */}