import React, { useState, useEffect } from "react";
import Recipe from './Recipe';

function App() {
  const [products, setproducts] = useState(null);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('apple, banana')

  useEffect(() => {
    getRecipes();
    }, [query]);

  const getRecipes = async () => {
    const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
    console.log(API_KEY);
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?&ingredients=${query}?&apiKey=${API_KEY}`)
    const data = await response.json();
    console.log(data);
    setRecipes(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }
  
  return (
    <div className="App">
      <h1 className="title">Welcome to the product list</h1>
      <form onSubmit={getSearch} className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">SEARCH</button>
        {recipes.map((recipe, index) =>(
          <Recipe key={recipe.title} title={recipe.title} image={recipe.image} ingredients={recipe.usedIngredients} />
        ))}
      </form>
    </div>
  );
}

export default App;