import React from "react";
import { StyleSheet, Alert } from "react-native";
import Button from "./Button";

class LoginButton extends React.Component {
  render() {
    return (
      <Button
        theme="fb"
        style={[styles.button, this.props.style]}
        icon={require("./img/logo-fb.png")}
        caption="Continue with Facebook"
        fontSize={13}
        onPress={() => this.props.onPress()}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: 284
  }
});

module.exports = LoginButton;
