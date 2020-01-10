import React, { useState, useEffect } from "react";
import Recipe from './Recipe';

// SERVICES
import productService from './services/productService';

function App() {
  const [products, setproducts] = useState(null);

  const APP_KEY = "b2ec0a8f89msh512857a0202d661p1fb6d7jsn92b852513748";
  // const exampleReq = `https://api.spoonacular.com/recipes/findByIngredients?&ingredients=banana?&apiKey=82974ebaf4d548729e42c9444aa48a55`;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
    // if(!products) {
    //   getProducts();
    }, []);
  

  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?&ingredients=banana?&apiKey=82974ebaf4d548729e42c9444aa48a55`)
    const data = await response.json();
    console.log(data);
    setRecipes(data);
  };

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <form className="search-form"> 
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">SEARCH</button>
        {recipes.map((recipe, index) =>(
          <Recipe title={recipe.title} image={recipe.image}/>
        ))}
      </form>



      <h1 className="title">Welcome to the product list</h1>
      <ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
}

export default App;