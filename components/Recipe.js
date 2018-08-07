import React from 'react';
import { View, Text, Button } from 'react-native';

const Recipe = ({ onClick, completed, recipe }) => {
    return (
        <View>
            <Text
                onPress={onClick}
                style={{color: completed ? 'red' : 'green'}}
            >
                {recipe}
            </Text>
        </View>        
    );
};

export default Recipe;