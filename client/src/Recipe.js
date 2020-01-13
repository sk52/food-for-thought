import React from "react"; 

const Recipe = ({title, image, time, cuisine, servings, instructions}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                Make this with:
            </ol>
                <img className={image} src={image} alt=""/>
            <ol>Ready in {time} minutes.</ol>
            <ol>Serves up to {servings}</ol>
            
            <ul>
                {cuisine.map((cuisine,index) =>
                    <li key={index}>{cuisine}</li>
                )}
            </ul>
            {/* <ul>
                {instructions.map(instruction =>
                    <li key={instruction}>{instruction}</li>
                )}
            </ul> */}
        </div>

    );
}

export default Recipe; 