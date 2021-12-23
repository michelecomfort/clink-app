import React from "react";
import { Link } from 'react-router-dom'
import Cocktail from './Cocktail';
import '../CSS/RecipeBook.css'

const RecipeBook = ({ recipes, displayRecipe }) => {
    let recipeCards = recipes.map(recipe => {
        return (
            <Link to={`/${recipe.id}`} key={recipe.id}>
                <Cocktail 
                    id={recipe.id}
                    name={recipe.name}
                    img={recipe.image}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    garnish={recipe.garnish}
                    displayRecipe={displayRecipe}
                />
            </Link>
            
            )
    })

    return (
        <section className='recipe-grid'>
            {recipeCards}
        </section>
    )
}

export default RecipeBook;