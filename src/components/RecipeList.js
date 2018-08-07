import React from 'react';
import { View } from 'react-native';

import Recipe from './Recipe';

const RecipeList = ({ recipes, toggleRecipe }) => (
    <View>
        {recipes.map(recipe =>
            <Recipe 
                key={recipe.id}
                completed={recipe.completed}
                recipe={recipe.recipe}
                onPress={() => toggleRecipe(recipe.id)}
            />
        )}
    </View>
)

export default RecipeList;