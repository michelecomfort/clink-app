import React, { Component } from 'react';
import '../CSS/SearchByLiquor.css'

class SearchByLiquor extends Component {
    constructor() {
        super()
        this.state = {
            liquor: ''
        }
    }

    handleChange = event => {
        this.setState({ liquor: event.target.value }, function() {
            this.filterDrinks() 
        })
    }

    filterDrinks = () => {
        const drinks = this.props.recipes.reduce((acc, drink) => {
            drink.ingredients.filter(ing => {
            if(ing.includes(this.state.liquor)) {
                acc.push(drink)
            }
            })
            
            return acc
        }, [])
        this.props.showCocktails(drinks)
    }

    render() {
        return (
            <select className='liquor-select' onChange={event => this.handleChange(event)}>
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
}

export default SearchByLiquor;