import React, { useState, useEffect } from "react";
import Recipe from '../Recipe';

function Search() {
//   const [products, setproducts] = useState(null);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("apple, banana");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
    console.log(API_KEY);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?&ingredients=${query}?&apiKey=${API_KEY}`
    );
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
  };
  return (
    // <div className="search">
    //   <p>Enter the ingredients you want to use here:</p>
    //   <br />
    //   <form>
    //     <input type="text" name="input" className="input" ></input>
    //     <br />
    //     <br />
    //     <input type="submit" value="Season me!" className="submit"></input>
    //   </form>
    // </div>

    <div className="search">
        <p>Enter the ingredients you want to use here:</p>
        <br />
    <form onSubmit={getSearch} className="search-form"> 
      <input className="input" type="text" placeholder="e.g. apples, bananas, pears" value={search} onChange={updateSearch} />
      <br />
      <br />
      <button className="search-button" type="submit">Season me!</button>
      <br/>
      <br/>
      {recipes.map((recipe) =>(
        <Recipe key={recipe.title} title={recipe.title} image={recipe.image} ingredients={recipe.usedIngredients} />
      ))}
    </form>
  </div>
  );
}

export default Search;
