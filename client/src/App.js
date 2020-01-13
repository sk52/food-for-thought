import React, { useState, useEffect } from "react";
import Recipe from './Recipe';
import {BrowserRouter as DB} from 'react-router-dom';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';

function App() {
  const [products, setproducts] = useState(null);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('tomato, cheese')

  useEffect(() => {
    getRecipes();
    }, [query]);

  const getRecipes = async () => {
    const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
    console.log(API_KEY);
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}`
   + `&sort=popularity`
   + `&sortDirection=desc`
   + `&number=10` 
   + `&addRecipeInformation=true` 
   + `&ignorePantry=true` 
   + `&apiKey=${API_KEY}`
   ); 
    const data = await response.json();
    console.log(data.results);
    setRecipes(data.results);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }
  
  return (
    <DB>
      <div className="App">
        <NavBar/>
        <Header />
        <Search />
      </div>

      <div className="App">
      <h1 className="title">Welcome to the product list</h1>
      <form onSubmit={getSearch} className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">SEARCH</button>
        {recipes.map((recipe, index) =>(
          <Recipe
            key={recipe.title} 
            title={recipe.title} 
            image={recipe.image} 
            time={recipe.readyInMinutes}
            cuisine={recipe.cuisines}
            servings={recipe.servings} 
          />
        ))}
      </form>
    </div>
    </DB>
  );
}

export default App;