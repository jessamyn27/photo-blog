// photos controller ===============================
const express = require('express');
const router  = express.Router();
const Photo  = require('../models/photos');

// home route for all photos =======================
router.get('/', (req, res) => {
  Photo.find({}, (err, foundPhotos) => {
      res.render('photos/index.ejs', {
        photos: foundPhotos
    });
  });
});

// new route for photos ============================
router.get('/new', (req, res) => {
  res.render('photos/new.ejs');
});

// show just the id route for photos ===============
router.get('/:id', (req, res) => {
  Photo.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/show.ejs', {
      photo: foundPhoto
    });
  });
});

// edit route for photos ===========================

// part one: finds the edit page and edits it
router.get('/:id/edit', (req, res) => {
  Photo.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/edit.ejs', {
      photo: foundPhoto
    });
  });
});

// part two: client is submitting, updating the id AND redirecting back to home
router.put('/:id', (req, res) => {
  Photo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPhoto)=> {
    console.log(updatedPhoto, ' this is updatedPhoto');
    res.redirect('/photos');
  });
});

// create / post route for photos ===================
router.post('/', (req, res) => {
  console.log(req.body)
  Photo.create(req.body, (err, createdPhoto) => {
    console.log(createdPhoto, ' this is the createdPhoto');
    res.redirect('/photos');
  });
});

// delete route for photos =========================
router.delete('/:id', (req, res) => {
  Photo.findByIdAndRemove(req.params.id, (err, deletedPhoto) => {
    console.log(deletedPhoto, ' this is deletedPhoto');
    res.redirect('/photos')
  })
});

// listen router? =================================
module.exports = router;
