var express = require('express');
var router = express.Router();
var unirest = require("unirest");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

console.log('hello')

/* POST ingredients to show recipes page. */
router.post('/recipes',function(req,res){

  console.log(req.body.ingredient)

  var apiReq = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients");

  var apiResult = {};

  apiReq.query({
    "number": "5",
    "ranking": "1",
    "ignorePantry": "false",
    "ingredients": (req.body.ingredient)
  });

  apiReq.headers({
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    // "x-rapidapi-key": "3fcd62ecc7msh44d5343fb5969a8p1e160cjsn6944598eb12d"
    "x-rapidapi-key": "b2ec0a8f89msh512857a0202d661p1fb6d7jsn92b852513748"
  });

  apiReq.end(function (res) {
    if (res.error) throw new Error(res.error);
    apiResult = res.body
    console.log(res.body);
  });
  console.log(apiResult)
  res.render('recipes', { title: 'Recipes', result: apiResult});
  
})


module.exports = router;
