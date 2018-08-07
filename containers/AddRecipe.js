import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput } from 'react-native-elements'

import { addRecipe } from '../actions';
import TextInput from '../components/TextInput';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (input) => {
            dispatch(addRecipe(input));
        }
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        label: 'Recipe'
    }
}

export default connect(
    null,
    mapDispatchToProps,
    mergeProps
)(TextInput);