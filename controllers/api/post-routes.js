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
                include: 
                {
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

//Get a single post by it's id
router.get('/:id', (req, res) => {
    Post.findOne({
      where: 
      {
        // Checks for the request's id property, this will make it check for if the id parameter of both the request and the result match
        id: req.params.id
      },
      // From the Post table, it will find all attributes including the post ID, text, title, and timestamp
      attributes: 
      [
        'id',
        'post_text',
        'title',
        'created_at',
      ],
      // From the User table, include the username from the User associated with the post. Then, from the Comment table, include all comments (which requires their id, comment_text, post_id, user_id, and timestamp properties)
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: 
            {
                model: User,
                attributes: ['username']
            }
        }
      ]
    })
    .then(dbPostData => {
        // If there is no matching id for the post requested, log an error
        if (!dbPostData) {
          res.status(404).json({ message: 'No post with this id exists' });
          return;
        }
        res.json(dbPostData); // Returning the result data as JSON Object
    })
      .catch(err => {
        // if there is an error, it will log an error
        console.log(err);
        res.status(500).json(err);
    });
});

// Creates a new post
router.post('/', withAuth, (req, res) => {
    // Creates a new post in the Post table with the properties of title, post_text, and user_id
    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData)) // Returning the result data as JSON Object
    .catch(err => {
        // if there is an error, it will log an error
        console.log(err);
        res.status(500).json(err);
    });
});


