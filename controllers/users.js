// users controller ===============================
const express = require('express');
const router  = express.Router();
const User  = require('../models/users');

// shows all users ================================
router.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
      res.render('users/index.ejs', {
        users: foundUsers
    });
  });
});
