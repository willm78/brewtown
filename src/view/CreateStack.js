import React, { Component } from "react";
import { Text } from "react-native";
import { SafeAreaView, createStackNavigator } from "react-navigation";

import CreateRecipe from "../containers/CreateRecipe";

import styles from "./viewStyles";

class CreateScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Create Screen</Text>
        <CreateRecipe />
      </SafeAreaView>
    );
  }
}

const Stack = createStackNavigator(
  {
    Home: CreateScreen
  },
  {
    mode: "card",
    headerMode: "float",
    navigationOptions: {
      title: "Create",
      headerStyle: styles.header
    }
  }
);

export default class CreateStack extends Component {
  render() {
    return <Stack />;
  }
}
