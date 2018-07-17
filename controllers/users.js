// users controller ===============================
const express = require('express');
const router  = express.Router();
const User  = require('../models/users');

// home route for users ===========================
router.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
      res.render('users/index.ejs', {
        users: foundUsers
    });
  });
});

// new route for users ============================
router.get('/new', (req, res) => {
  res.render('users/new.ejs');
});


// show just the id route for users ===============
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('users/show.ejs', {
      user: foundUser
    });
  });
});

// edit route for users ===========================

// part one: finds the edit page and edits it
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('users/edit.ejs', {
      user: foundUser
    });
  });
});

// part two: client is submitting, updating the id AND redirecting back to home
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser)=> {
    console.log(updatedUser, ' this is updatedUser');
    res.redirect('/users');
  });
});

// create / post route for users ===================
router.post('/', (req, res) => {
  console.log(req.body)
  User.create(req.body, (err, createdUser) => {
    console.log(createdUser, ' this is the createdUser');
    res.redirect('/users');
  });
});

// delete route for users =========================
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    console.log(deletedUser, ' this is deletedUser');
    res.redirect('/users')
  })
});

// listen router? =================================
module.exports = router;
