import React, { Component } from "react";
import { Text } from "react-native";
import { SafeAreaView, createStackNavigator } from "react-navigation";

import styles from "./viewStyles";

class LibraryScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Library Screen</Text>
      </SafeAreaView>
    );
  }
}

const Stack = createStackNavigator(
  {
    Home: LibraryScreen
  },
  {
    mode: "card",
    headerMode: "float",
    navigationOptions: {
      title: "Library",
      headerStyle: styles.header
    }
  }
);

export default class LibraryStack extends Component {
  render() {
    return <Stack />;
  }
}
