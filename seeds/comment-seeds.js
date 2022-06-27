// Setting up model requirment for Comment
const { Comment } = require('../models');

// Defining the properties of commentData
const commentData = [
    {
        comment_text: "Thats true",
        post_id: 1,
        user_id: 2
    },
    {
        comment_text: "Me neither",
        post_id: 2,
        user_id: 3
    },
    {
        comment_text: "Have you tried turning it off and on again",
        post_id: 3,
        user_id: 1
    },
    {
        comment_text: "It is relevant",
        post_id: 4,
        user_id: 5
    },
    {
        comment_text: "Im in debt",
        post_id: 5,
        user_id: 4
    },
    {
        comment_text: "Buy a chew toy",
        post_id: 6,
        user_id: 1
    },
]

// seedComments arrow function to bulk create Comment tables based on the commentData defined above
const seedComments = () => Comment.bulkCreate(commentData);

// Exports the module to be used in other files
module.exports = seedComments;