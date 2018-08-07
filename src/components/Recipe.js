import React from 'react';
import { View, Text, Button } from 'react-native';

const Recipe = ({ onPress, completed, recipe }) => {
    return (
        <View>
            <Text
                onPress={onPress}
                style={{color: completed ? 'red' : 'green'}}
            >
                {recipe}
            </Text>
        </View>        
    );
};

export default Recipe;