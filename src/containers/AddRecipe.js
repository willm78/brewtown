import React from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { connect } from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux";

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
    label: "Recipe"
  };
};

export default connect(
  null,
  mapDispatchToProps,
  mergeProps
)(TextInput);
