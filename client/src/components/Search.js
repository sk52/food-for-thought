import React, { useState, useEffect } from "react";
import Recipe from "../Recipe";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

function Search() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}` +
        `&sort=popularity` +
        `&sortDirection=desc` +
        `&number=10` +
        `&addRecipeInformation=true` +
        `&ignorePantry=true` +
        `&apiKey=${API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setRecipes(data.results);
      });
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  // const ModalExample = props => {
  //   const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="search">
      <p>Enter the ingredients you want to use, then click 'Season me up!'</p>
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
          Season me up!
        </button>
        <br />
        <br />
        {recipes.map(recipe => (
          <Card>
            <CardImg
              top
              width="100%"
              src={recipe.image}
              alt="Card image caption"
            />
            <CardBody>
              <CardTitle>{recipe.title}</CardTitle>
              <CardSubtitle>
                Cooking time {recipe.readyInMinutes}minutes.
              </CardSubtitle>
              <CardText>{recipe.cuisines}</CardText>
              {/* <Button>Show Recipe</Button> */}
              <Button className="recipe-button" color="danger" onClick={toggle}>
                Season me up!
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Recipe</ModalHeader>
                <ModalBody>Recipe Instruction</ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Save Recipe
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        ))}
      </form>
    </div>
  );
}

export default Search;
