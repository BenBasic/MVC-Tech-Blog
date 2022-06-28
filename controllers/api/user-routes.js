// Setting up file requirements
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const session = require('express-session');
const withAuth = require('../../utils/auth');

// Setting up the SequelizeStore to save the session so the user can stay logged in
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// Get all users
router.get('/', (req, res) => {
    // Running the findAll method to get all Users in the table
    User.findAll({
        // When the requested data is recieved, exclude the password property for security
        attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData)) // Returning the result data as JSON Object
      .catch(err => {
        // if there is an error, it will log an error
        console.log(err);
        res.status(500).json(err);
    });
});

