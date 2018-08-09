import React from "react";
import { View, Text, Button } from "react-native";

const Link = ({ active, children, onPress }) => {
  return <Text onPress={() => onPress()}>{children}</Text>;
};

export default Link;
