import React from 'react';
import { View } from 'react-native';

import Recipe from './Recipe';

const RecipeList = ({ recipes, onRecipeClick }) => {
    return (
        <View>
            {recipes.map((recipe, index) => (
                <Recipe key={index} {...recipe} onClick={() => onRecipeClick(index)} />
            ))}
        </View>
    );
};

export default RecipeList;