import React, { Component } from "react";
import { Text } from "react-native";
import { SafeAreaView, createStackNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen";
import LibraryStack from "./LibraryStack";

import AppState from "../containers/AppState";
import styles from "./viewStyles";

class ExploreScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Explore Screen</Text>
        <AppState />
      </SafeAreaView>
    );
  }
}

const Stack = createStackNavigator(
  {
    Home: ExploreScreen
  },
  {
    mode: "card",
    headerMode: "float",
    navigationOptions: {
      title: "Explore",
      headerStyle: styles.header
    }
  }
);

export default class ExploreStack extends Component {
  render() {
    return <Stack />;
  }
}
