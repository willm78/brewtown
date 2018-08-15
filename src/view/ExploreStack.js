import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView, createStackNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen";
import LibraryStack from "./LibraryStack";

import styles from "./viewStyles";
import { getQuery } from "../middleware/api";

const ErrorScreen = ({ err }) => {
  return (
    <View>
      <Text>Error Screen</Text>
      <Text>{err}</Text>
    </View>
  );
};

const LoadingScreen = () => {
  return (
    <View>
      <Text>Loading Screen</Text>
    </View>
  );
};

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      value: undefined,
      error: false
    };
  }

  componentDidMount() {
    getQuery().then(
      result => {
        this.setState({
          loading: false,
          value: JSON.stringify(result)
        });
      },
      err => {
        this.setState({
          loading: false,
          value: JSON.stringify(err)
        });
      }
    );
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    if (this.state.error) {
      return <ErrorScreen err={this.state.err} />;
    }
    return (
      <ScrollView>
        <Text>{this.state.value}</Text>
      </ScrollView>
    );
  }
}

class ExploreScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Explore Screen</Text>
        <Query />
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
