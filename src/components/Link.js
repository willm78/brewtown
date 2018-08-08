import React from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { View, Text, Button } from "react-native";

const Link = ({ active, children, onPress }) => {
  return <Text onPress={() => onPress()}>{children}</Text>;
};

export default Link;
