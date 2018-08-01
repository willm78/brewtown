import React from 'react';
import { View } from 'react-native';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return (
            <View>{children}</View>
        );
    } else {
        return (
            <View onClick={e => {
                e.preventDefault();
                onClick();
            }}>
                {children}
            </View>
        )
    }
};

export default Link;