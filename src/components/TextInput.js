import React from 'react';
import { View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

const TextInput = ({ label, onPress }) => {
    return (
        <View>
            <FormLabel>{ label }</FormLabel>
            <FormInput onChangeText = { text => {
                this.input = text;
            }}/>
            <Button 
                onPress={ () => onPress(this.input) }
                title="Submit it"
            />
        </View>
    );
};

export default TextInput;