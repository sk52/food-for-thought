const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get('/api/recipe/by-ingredients/:ingredients', async (req, res) => {
  const query = req.params['ingredients'];
  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}` +
      `&sort=popularity` +
      `&sortDirection=desc` +
      `&number=10` +
      `&addRecipeInformation=true` +
      `&ignorePantry=true` +
      `&instructionsRequired=true` +
      '&fillIngredients=true' +
      `&apiKey=${API_KEY}`
  );
  const recipes = await response.json();

  return res.status(200).send({
    error: false,
    recipes
  })
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});