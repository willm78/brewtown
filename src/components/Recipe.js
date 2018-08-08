import React from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { View, Text, Button } from "react-native";

const Recipe = ({ onPress, completed, recipe }) => {
  return (
    <View>
      <Text onPress={onPress} style={{ color: completed ? "red" : "green" }}>
        {recipe}
      </Text>
    </View>
  );
};

export default Recipe;
