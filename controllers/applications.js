const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

// router logic here
router.get("/", (req, res) => {
  try {
    res.render("applications/index.ejs");
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// GET route for /new
router.get('/new', async (req, res) => {
  res.render('applications/new.ejs');
});

module.exports = router;
