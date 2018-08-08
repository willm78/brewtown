import React from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { View } from "react-native";

import Recipe from "./Recipe";

const RecipeList = ({ recipes, toggleRecipe }) => (
  <View>
    {recipes.map(recipe => (
      <Recipe
        key={recipe.id}
        completed={recipe.completed}
        recipe={recipe.recipe}
        onPress={() => toggleRecipe(recipe.id)}
      />
    ))}
  </View>
);

export default RecipeList;
