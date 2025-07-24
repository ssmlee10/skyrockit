const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

// router logic here
router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render("applications/index.ejs", {
      applications : currentUser.applications
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// GET route for /new
router.get('/new', async (req, res) => {
  res.render('applications/new.ejs');
});

// POST for '/applications
router.post('/', async (req, res) => {
  try {
    // look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);

    // push req.body (the new data form object) to the applications array of the current user
    currentUser.applications.push(req.body);

    // save changes to the user
    await currentUser.save();

    //redirect back to the applications index view
    res.redirect(`/users/${currentUser._id}/applications`);

  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
})

module.exports = router;
