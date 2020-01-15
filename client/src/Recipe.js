import React from "react";

const Recipe = ({ 
  title, 
  image, 
  time, 
  cuisine, 
  servings, 
  wines,
  //wineList, //keep if can fix wine list mapping
  ingredients, 
  instructions,
  sourceUrl,
  sourceName,
  diets,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>Make this with:</ol>

      <img className={image} src={image} alt="" />
      <div>Ready in {time} minutes.</div>
      <div>Serves up to {servings}.</div>
      <ul>Cuisine: {cuisine.map((cuisine,index) =>
        <li key={index}>{cuisine}</li>)}
      </ul>

      <div>
        <h2>Ingredients:</h2>
          <ul>{ingredients.map((ingredient,index) =>
            <li key={index}>{ingredient.amount.toLocaleString()} {ingredient.unitShort} {ingredient.name}</li>
            )}
          </ul>

          <ul>{ingredients.map((ingredient,index) =>
            <span key={index}><img src={ingredient.image} alt=""/></span>
            )}
          </ul>
      </div>

      <div>
        <h2>Recipe:</h2>
        <ol>{instructions.map(instruction =>
          <li key={instruction.step}>{instruction.step}</li>
            )}
        </ol>
      </div>

      <div><h3>Wine recommendations:</h3>{wines}</div>
      
      <div>
        <ul>{diets.map((diet,index) =>
          <li key={index}>{diet}</li>)}
        </ul>
      </div>

      <div>Source: <a href={sourceUrl}>{sourceName}</a></div>

    </div>
  );
};

export default Recipe;
