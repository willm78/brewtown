import React from 'react';
import { View } from 'react-native';

import Recipe from './Recipe';

const RecipeList = ({ recipes, toggleRecipe }) => {
    return (
        <View>
            {recipes.map(recipe => {
                <Recipe
                    {...recipe} 
                    onPress={() => toggleRecipe(recipe.id)}
                />
            })}
        </View>
    );
};

export default RecipeList;