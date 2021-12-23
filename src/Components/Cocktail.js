import React from "react";
import "../CSS/Cocktail.css"


const Cocktail = ({ id, name, img, displayRecipe }) => {
    return (
            <div className='cocktail-card' onClick={() => displayRecipe(id)}>
                <img src={img} className='cocktail-card-img'/>
                <h3 className='card-name'>{name}</h3>
            </div>
    )
}

export default Cocktail;