import React, { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import RecipeBook from './RecipeBook';
import Recipe from './Recipe'
import SearchByLiquor from './SearchByLiquor';
import '../CSS/App.css';
import recipeData from '../recipesData.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: recipeData,
      recipeCard: {},
      recipesByLiquor: []
    }
  }

  displayRecipe = (id) => {
    const recipeCard = this.state.recipes.find(rec => {
      return rec.id === id
    })
    this.setState({ recipeCard: recipeCard })
  }

  showCocktails = (drinks) => {
    
    if (drinks) {
      this.setState({ recipesByLiquor: drinks})
    }
}

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <NavLink to={`/`} style={{textDecoration: 'none', color: "white"}} >
            <h1 className='title'>T's Provisions</h1>
          </NavLink>
          <SearchByLiquor recipes={this.state.recipes} showCocktails={this.showCocktails}/>
        </header>
        <Routes>
          <Route path="/" element={<RecipeBook recipes={this.state.recipes} recipesByLiquor={this.state.recipesByLiquor} displayRecipe={this.displayRecipe}/>}/>
          <Route path="/:recId" element={<Recipe recipe={this.state.recipeCard}/>}/>
        </Routes>
      
      </main>
    );
  }

}

export default App;
