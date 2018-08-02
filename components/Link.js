import React from 'react';
import { View, Text, Button } from 'react-native';

const Link = ({ active, children, setFilter }) => {
    return (
        <Text
            onPress={() => setFilter()}
        >
            {children}
        </Text>
    );
};

export default Link;