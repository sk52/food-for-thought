// const unirest = require('unirest');

// const API_KEY = "3e51e70130f44af9a003f43fe9b2cacf";
// const INGREDIENT_LIST = ['bananas', 'apples', 'cheese', 'crackers'];

// let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/find" +
// "ByIngredients?number=5&ranking=1&ingredients=";

// const ingredientsString = INGREDIENT_LIST.map(ingredient => 
//     ingredient + '%2C'
// );

// requestString = requestString + ingredientsString;

// unirest.get(requestString)
// .header("3fcd62ecc7msh44d5343fb5969a8p1e160cjsn6944598eb12d",  API_KEY)
// .end(result => {
//     if (result.status === 200){
//         getRecipeData(result.body);
//     };
// });

// function getRecipeData(recipeList) {
//     let idList = [];
//     recipeList.map(recipe => 
//         idList.push(recipe.id)
//     );
//     let recipeString = idList.join('%2C');
//     let requestString = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=';
//     requestString = requestString + recipeString
//     unirest.get(requestString)
//     .header("3fcd62ecc7msh44d5343fb5969a8p1e160cjsn6944598eb12d", API_KEY)
//     .end(result => {
//          if(result.status === 200){
//              result.body.map(result =>
//                  console.log(
//                      result.title + " -- " + "Weight Watchers Smart Points: " + 
//                      result.weightWatcherSmartPoints + " -- Instructions: " + result.instructions
//                  )
//              );
//          };
//     });    
// };

// function getRecipe(ingredients) {
//     var url = 'https://api.spoonacular.com/recipes/' + findByIngredients;
//     var API_KEY = '?&apiKey=1a9cd783014f45dc880771c041aac2d4'
//     var units = '?&ingredients=banana,+apples'
//     $.get(url + units + token) function(data) {
//         $('#genrecipe').text(data.title);
//     }
// }

