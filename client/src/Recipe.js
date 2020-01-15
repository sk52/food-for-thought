import React, { useState } from "react";
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

const Recipe = ({
  title,
  image,
  time,
  servings,
  wines,
  ingredients,
  instructions,
  sourceUrl,
  sourceName,
  diets
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image caption" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>Cooking time {time}minutes.</CardSubtitle>
          <CardText>Serves up to {servings}.</CardText>
          <CardText>Wine recommendation: {wines}</CardText>
          <CardText>
            <a href={sourceUrl}>{sourceName}</a>
          </CardText>
          <Button className="recipe-button" color="danger" onClick={toggle}>
            Season me up!
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
              {" "}
              <h1>Ingredients</h1>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.amount.toLocaleString()} {ingredient.unitShort}{" "}
                    {ingredient.name}
                  </li>
                ))}
              </ul>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <span key={index}>
                    <img src={ingredient.image} alt="" />
                  </span>
                ))}
              </ul>
            </ModalBody>
            <ModalBody>
              <h1>Method</h1>
              <ol>
                {instructions.map(instruction => (
                  <li key={instruction.step}>{instruction.step}</li>
                ))}
              </ol>
            </ModalBody>
            <ModalBody>
              <h3>Dietary Requirements:</h3>
              <ul>
                {diets.map((diet, index) => (
                  <li key={index}>{diet}</li>
                ))}
              </ul>
            </ModalBody>
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
    </div>
  );
};

export default Recipe;
