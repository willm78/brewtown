import React from 'react';
import { View, Text } from 'react-native';

const Recipe = ({ onClick, completed, recipe }) => {
    return (
        <View onClick={onClick}>
            <Text style={{textDecorationLine: completed ? 'line-through' : 'none'}}>
                { recipe }
            </Text>
        </View>        
    );
};

export default Recipe