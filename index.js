const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});


/*  EXPRESS SETUP  */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile('auth.html', { root : __dirname}));

/*  PASSPORT SETUP  */
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

/* MONGOOSE SETUP */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MyDatabase');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
      username: String,
      password: String
    });
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

/* PASSPORT LOCAL AUTHENTICATION */
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
      UserDetails.findOne({
        username: username
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
  }
));

app.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });

