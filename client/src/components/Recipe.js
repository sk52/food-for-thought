import React, { useState } from "react";
import {
  CardDeck,
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
      <CardDeck className="card-deck">
        <Card className="card">
          <CardImg
            className="img"
            top
            width="100%"
            src={image}
            alt="Card image caption"
          />
          <CardBody>
            <CardTitle className="card-title">{title}</CardTitle>
            <CardSubtitle className="card-subtitle">
              Cooking time {time} min
            </CardSubtitle>
            <CardText>Serves up to {servings}.</CardText>
            <CardText className="wine-text">
              <span>Wine recommendation:</span>
              <br /> {wines}
            </CardText>
            <CardText>
              <p>
                Source: <a href={sourceUrl}>{sourceName}</a>
              </p>
            </CardText>
            <Button className="recipe-button" color="danger" onClick={toggle}>
              Show Recipe
            </Button>
            <Modal isOpen={modal} toggle={toggle} size="xl">
              <ModalHeader toggle={toggle}><h1>{title}</h1></ModalHeader>
              <ModalBody className="popup-body">
                {" "}
                <h1>Ingredients</h1>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.amount.toLocaleString()}{" "}
                      {ingredient.unitShort} {ingredient.name}
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
              <ModalBody className="popup-body_two">
                <h1>Method</h1>
                <ol>
                  {instructions.map(instruction => (
                    <li key={instruction.step}>{instruction.step}</li>
                  ))}
                </ol>
              </ModalBody>
              <ModalBody className="popup-body_three">
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
      </CardDeck>
    </div>
  );
};

export default Recipe;
