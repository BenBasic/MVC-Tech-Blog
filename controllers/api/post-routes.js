// Setting up file requirements
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// Gets all Posts table data
router.get('/', (req, res) => {
    Post.findAll({
        // From the Post table, it will find all attributes including the post ID, text, title, and timestamp
        attributes: 
        [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        // Order the posts from most recent in descending order
        order: [[ 'created_at', 'DESC']],
        // From the User table, include the username from the User associated with the post. Then, from the Comment table, include all comments (which requires their id, comment_text, post_id, user_id, and timestamp properties)
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData)) // Returning the result data as JSON Object
    // if there is an error, it will log an error
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});