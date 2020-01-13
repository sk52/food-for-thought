import React from "react";

function Search() {
    return(
        <div className="search">
            <p>Enter the ingredients you want to use here:</p>
            <br/>
            <form>
                <input type="text" name="input" className="input"></input>
                <br />
                <br />
                <input type="submit" value="Season me!" className="submit"></input>
            </form>
        </div>
    );
}

export default Search;