import React from "react";
import { ScrollView, Text } from "react-native";

const StateView = ({ text }) => {
  return (
    <ScrollView>
      <Text>{text}</Text>
    </ScrollView>
  );
};

export default StateView;
