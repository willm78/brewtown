import React, { Component } from "react";
import { Platform, StatusBar, Text, Button } from "react-native";
import { SafeAreaView, withNavigation } from "react-navigation";

import Footer from "../components/Footer";
import AddRecipe from "../containers/AddRecipe";
import AppState from "../containers/AppState";

import styles from "./viewStyles";

class App extends Component {
  static navigationOptions = {
    headerTitle: "Home"
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <Button title="Go To Other Screen" onPress={() => null} />
        <Text>Brewtown</Text>
        <AddRecipe />
        <VisibleRecipeList />
        <Footer />
        <AppState />
      </SafeAreaView>
    );
  }
}

export default withNavigation(App);
