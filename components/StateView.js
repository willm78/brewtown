import React from 'react';
import { ScrollView, Text } from 'react-native';

const StateView = ({ stateString }) => {
    return (
        <ScrollView>
            <Text>
                { stateString }
            </Text>
        </ScrollView>
    );
};

export default StateView;