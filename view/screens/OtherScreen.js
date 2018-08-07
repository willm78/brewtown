import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button } from 'react-native';

import Footer from '../../components/Footer';
import AddRecipe from '../../containers/AddRecipe';
import VisibleRecipeList from '../../containers/VisibleRecipeList';

const OtherScreen = ({ nav }) => (
    <View style={styles.container}>
        <Text>Brewtown</Text>
        <AddRecipe />
        <VisibleRecipeList />
        <Footer />
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

export default OtherScreen;
{/* <Button
                title='to launch screen'
                onPress={() => nav.navigate('LaunchScreen')}
            /> */}