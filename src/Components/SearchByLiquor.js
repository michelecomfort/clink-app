import React from 'react';
import '../CSS/SearchByLiquor.css'

const SearchByLiquor = () => {
    return (
        <select className='liquor-select'>
            <option value=''>Liquor</option>
            <option value='Mezcal'>Mezcal</option>
            <option value='Vodka'>Vodka</option>
            <option value='Tequila'>Tequila</option>
            <option value='Rum'>Rum</option>
            <option value='Bourbon'>Bourbon</option>
            <option value='Gin'>Gin</option>
        </select>
    )
}

export default SearchByLiquor;