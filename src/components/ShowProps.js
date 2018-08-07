import React from 'react';
import { Text } from 'react-native';

const ShowProps = ({ text }) => {
    return (
        <Text>{JSON.stringify(this.props.navigation.state)}</Text>
    );
};

export default ShowProps;