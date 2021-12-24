import React from 'react';
import '../CSS/Recipe.css'

const Recipe = ({ recipe }) => {
    console.log(recipe)
    const { id, name, image, ingredients, instructions, garnish } = recipe
    const parts = ingredients.map(ing => {
        return <p>- {ing}</p>
    })
    const directions = instructions.map(ins => {
        return <p>- {ins}</p>
    })
    return (
        <div className='recipe-card'>
            <section className='recipe-left-side'>
                <h2 className='recipe-name'>{name}</h2>
                <div className='instructions'>
                    <section className='features'>
                        <p className='features-heading'>features</p>
                        <p className='steps'>{parts}</p>
                    </section>
                    <section className='orders'>
                        <p className='orders-heading'>orders</p>
                        <p className='steps'>{directions}</p>
                    </section>
                </div>
            </section>
            <img className='recipe-image'src={image}/>
        </div>
    )
}

export default Recipe;