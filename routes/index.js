var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

console.log('hello')

router.post('/recipes',function(req,res){
  console.log(req.body.title);
  res.render('recipes', { title: 'Recipes' });
  // res.send("yolo")
})





