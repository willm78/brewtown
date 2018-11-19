import React, { Component } from "react";
import { Text } from "react-native";
import { SafeAreaView, createStackNavigator } from "react-navigation";
import { connect } from "react-redux";

import styles from "./viewStyles";
import FbLoginButton from "../containers/FacebookLogInButton";

class ProfileScreen extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <Screen>
          <Text>Profile Screen</Text>
        </Screen>
      );
    }
    return (
      <Screen>
        <FbLoginButton />
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.thisUser.isLoggedIn
  };
};

class Screen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const Stack = createStackNavigator(
  {
    Home: connect(mapStateToProps)(ProfileScreen)
  },
  {
    mode: "card",
    headerMode: "float",
    navigationOptions: {
      title: "Profile",
      headerStyle: styles.header
    }
  }
);

export default class ProfileStack extends Component {
  render() {
    return <Stack />;
  }
}
