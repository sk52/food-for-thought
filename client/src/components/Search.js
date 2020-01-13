import React, { useState, useEffect } from "react";
import Recipe from "../Recipe";

function Search() {
  //   const [products, setproducts] = useState(null);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("tomato, cheese");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
    console.log(API_KEY);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}` +
        `&sort=popularity` +
        `&sortDirection=desc` +
        `&number=10` +
        `&addRecipeInformation=true` +
        `&ignorePantry=true` +
        `&apiKey=${API_KEY}`
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
  };
  return (
    <div className="search">
      <p>Enter the ingredients you want to use here:</p>
      <br />
      <form onSubmit={getSearch} className="search-form">
        <input
          className="input"
          type="text"
          placeholder="e.g. tomato, cheese, basil"
          value={search}
          onChange={updateSearch}
        />
        <br />
        <br />
        <button className="search-button" type="submit">
          Season me!
        </button>
        <br />
        <br />
        {recipes.map(recipe => (
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
  );
}

export default Search;
