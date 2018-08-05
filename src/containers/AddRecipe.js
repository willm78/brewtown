import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput } from 'react-native-elements'

import { addRecipe } from '../actions';

let AddRecipe = ({ dispatch }) => {
    let input;

    return (
        // <View>
        //     <FormLabel>Recipe</FormLabel>
        //     <FormInput onChangeText = { text => {
        //         this.input = text;
        //     }}/>
        //     <Button 
        //         onPress={() => dispatch(addRecipe(this.input))}
        //         title="Submit Recipe"
        //     />
        // </View>
        <View>
            <Button
                title='Press ME'
                onPress={() => dispatch(addRecipe('cool recipe'))}
            />
        </View>
    );
};

AddRecipe = connect()(AddRecipe);

export default AddRecipe;