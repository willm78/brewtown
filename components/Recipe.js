import React from 'react';
import { View, Text } from 'react-native';

const Recipe = ({ onPress, completed, recipe }) => {
    return (
        <View onPress={onPress}>
            <Text style={{textDecorationLine: completed ? 'line-through' : 'none'}}>
                { recipe }
            </Text>
        </View>        
    );
};

export default Recipe