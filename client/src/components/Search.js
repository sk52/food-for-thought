import React, { useState, useEffect } from "react";
import Recipe from "../Recipe";
import axios from 'axios';
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
    const getRecipes = async () => {
      let recipesData = await axios.get(
        `/api/recipe/by-ingredients/${query}`
        )
        .then(response => {
          return response.data.recipes;
        });
      setRecipes(recipesData.results);
    };
    
    getRecipes();
  }, [query]);

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
          <Recipe
            key={recipe.title}
            title={recipe.title}
            image={recipe.image}
            time={recipe.readyInMinutes}
            cuisine={recipe.cuisines}
            servings={recipe.servings}
            instructions={recipe["analyzedInstructions"]["0"]["steps"]}
            wines={recipe["winePairing"]["pairingText"]}
            wineList={recipe["winePairing"]["pairedWines"]}
            ingredients={recipe["missedIngredients"]}
            steps={recipe["analyzedInstructions"]["0"]["steps"]}
            sourceUrl={recipe.sourceUrl}
            sourceName={recipe.sourceName}
            diets={recipe.diets}
          />
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
