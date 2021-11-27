import React, { useState, useEffect } from 'react'
import Recipe from './Components/Recipe'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query]);

  async function getRecipes() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=e77ec9eb&app_key=5cb27c5189b26bdeb041d664aa8b317c`)
    const data = await response.json();
    setRecipes(data.hits)
  }

  function inputHandler(e) {
    setSearch(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App" onSubmit={submitHandler}>
      <form className='search-form'>
        <input type="text" className="search-bar" value={search} onChange={inputHandler} />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe, i) => (
          <Recipe key={i} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredient={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  )
}

export default App;
