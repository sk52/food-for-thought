const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

// import models
require('./models/product');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);

app.use(bodyParser.json());

// import routes
require('./routes/productRoute')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.get('/api/test/:params', (req, res) => {
  let params = req.params['params'];
  res.json({test: "a test json response", params: `${params}`});
});

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
      `&apiKey=${API_KEY}`
  );
  const data = await response.json();

  return res.status(200).send({
    error: false,
    data
  })
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});