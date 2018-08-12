import { connect } from "react-redux";

import { facebookLogIn } from "../actions/login";
import LoginButton from "../components/LoginButton";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPress: () => dispatch(facebookLogIn())
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    title: "Login with Facebook",
    buttonLabel: "Login with Facebook"
  };
};

export default connect(
  null,
  mapDispatchToProps,
  mergeProps
)(LoginButton);
