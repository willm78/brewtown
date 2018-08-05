import React from 'react';
import { View, Text, Button } from 'react-native';

const Link = ({ active, children, setFilter }) => {
    return (
        <View>
        <Text
            onPress={setFilter}
        >
        { children }
        </Text>
        </View>
    );
};

export default Link;