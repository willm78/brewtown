import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput } from 'react-native-elements'

import { addRecipe } from '../actions';

let AddRecipe = ({ dispatch }) => {
    let input;

    return (
        <View>
            <FormLabel>Recipe</FormLabel>
            <FormInput onChangeText = { text => {
                this.input = text;
            }}/>
            <Button 
                onPress={() => dispatch(addRecipe(this.input))}
                title="Submit Recipe"
            />
        </View>
    );
};

AddRecipe = connect()(AddRecipe);

export default AddRecipe;