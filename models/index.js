// Setting up model requirements
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User table will have one or multiple Post tables based on their user_id
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Creates a relationship between Post and User tables based on user_id
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Creates a relationship between Comment and User tables based on user_id, and setting it up so that if a user is deleted, all of their comments are also deleted as well, and making it invoke hooks from User.js
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Creates a relationship between Comment and Post tables based on post_id, and setting it up so that if a post is deleted, all of the comments that belong to it are also deleted as well, and making it invoke hooks from User.js
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// User table will have one or multiple Comment tables based on their user_id, and setting it up so that if a user is deleted, all of their comments are also deleted as well, and making it invoke hooks from User.js
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// Post table will have one or multiple Comment tables based on their post_id, and setting it up so that if a post is deleted, all of the comments that belong to it are also deleted as well, and making it invoke hooks from User.js
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
})

// Exports the module to be used in other files
module.exports = { User, Post, Comment };