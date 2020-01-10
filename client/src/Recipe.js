import React from "react"; 

const Recipe = ({title, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>
                   <li>{ingredient.name}</li> 
                )}
            </ol>
        
            <img src={image} alt=""/>
           
        </div>

    );
}

export default Recipe; 