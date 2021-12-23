import React from 'react';
import '../CSS/Recipe.css'

const Recipe = ({ recipe }) => {
    console.log(recipe)
    const { id, name, image, ingredients, instructions, garnish } = recipe
    return (
        <div className='recipe-card'>
            <h1 className='recipe-name'>{name}</h1>
            <div className='instructions'>
                <section className='features'>
                    <p>features</p>
                    <p>-</p>
                    <p>-</p>
                </section>
                <section className='orders'>
                    <p>orders</p>
                    <p>-</p>
                    <p>-</p>
                </section>
            </div>
            <img/>
        </div>
    )
}

export default Recipe;