import React from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { ScrollView, Text } from "react-native";

const StateView = ({ text }) => {
  return (
    <ScrollView>
      <Text>{text}</Text>
    </ScrollView>
  );
};

export default StateView;
