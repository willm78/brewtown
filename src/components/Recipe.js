import React from 'react';
import { View, Text } from 'react-native';

const Recipe = ({ onPress, completed, recipe }) => {
    return (
        <View>
            <Text
                onPress={onPress}
                style={{color: completed ? 'green' : 'red'}}
            >
                { recipe }
            </Text>
        </View>        
    );
};

export default Recipe