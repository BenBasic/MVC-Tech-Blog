// Setting up model requirments for Users, Posts, and Comments
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
// Setting up sequelize connection requirment
const sequelize = require('../config/connection');