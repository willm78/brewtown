import React from "react";
import { connect } from "react-redux";

import { addRecipe } from "../actions";
import TextInput from "../components/TextInput";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPress: input => {
      dispatch(addRecipe(input));
    }
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    formLabel: "Recipe",
    buttonLabel: "Update Recipe"
  };
};

export default connect(
  null,
  mapDispatchToProps,
  mergeProps
)(TextInput);
