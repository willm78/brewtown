import React from 'react';
import { View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

const TextInput = ({ label, onClick }) => {
    return (
        <View>
            <FormLabel>{ label }</FormLabel>
            <FormInput onChangeText = { text => {
                this.input = text;
            }}/>
            <Button 
                onPress={ () => onClick(this.input) }
                title="Submit it"
            />
        </View>
    );
};

export default TextInput;