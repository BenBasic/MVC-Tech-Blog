// Setting up file requirements
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Gets Comment table data
router.get('/', (req, res) => {
    // Running the findAll method to get all comments in the table
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData)) // Returning the result data as JSON Object
        .catch(err => {
        // if there is an error, it will log an error
        console.log(err);
        res.status(500).json(err);
    });
});

// Posts a new comment
router.post('/', withAuth, (req, res) => {
    // Checks if the session exits, if it does then it will create a comment
    if (req.session) {
        Comment.create({
            // Creates a comment with the comment_text data while referencing the post_id to know what post to add the comment to
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            // References the user_id from the current session, so it grabs the currently logged in user's user_id to assign who added the comment
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData)) // Returning the result data as JSON Object
        .catch(err => {
            // if there is an error, it will log an error
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// Deletes a comment, and checks if the user is logged in and authenticated so a user cant delete a different user's post
router.delete('/:id', withAuth, (req, res) => {
    // Deletes comment from Comment table where the id matches the requested id parameter from the requested URL
    Comment.destroy({
        where: {
          id: req.params.id
        }
    })
        .then(dbCommentData => {
            // If there is no matching id for the comment requested to be deleted, log an error
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment with this id exists' });
                return;
            }
            res.json(dbCommentData); // Returning the result data as JSON Object
        })
        .catch(err => {
            // if there is an error, it will log an error
            console.log(err);
            res.status(500).json(err);
    });
});