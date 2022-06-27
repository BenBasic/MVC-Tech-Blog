// Setting up file requirements
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Gets Comment table data
router.get('/', (req, res) => {
    // Running the findAll method to get all comments in the table
    Comment.findAll()
      // Returning the result data as JSON Object
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        // if there is an error, it will log an error
        console.log(err);
        res.status(500).json(err);
      });
  });