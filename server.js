// set up my modules ==============================
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');

// set up public folder for css ===================
app.use(express.static('public'));

// Set up middleware ==============================
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

// set up controllers =============================
const usersController = require('./controllers/users.js');
const photosController = require('./controllers/photos.js');

// set up controller routes =======================
app.use('/users', usersController);
app.use('/photos', photosController);

// home route =====================================
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// set up listener to host url ====================
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
