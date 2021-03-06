import React from "react";
import { connect } from "react-redux";

import { createRecipe, addRecipe, clearCreate } from "../actions";
import TextInput from "../components/TextInput";

const mapStateToProps = state => {
  return {
    recipe: state.create
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdatePress: input => {
      //dispatch(createRecipe(input));
    },
    onSavePress: input => {
      //dispatch(addRecipe(input));
      //dispatch(clearCreate());
    }
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    formLabel: "Create Recipe",
    updateButtonLabel: "Update Recipe",
    saveButtonLabel: "Save To Library"
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TextInput);
