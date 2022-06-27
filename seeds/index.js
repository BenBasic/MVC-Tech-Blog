// Setting up model requirments for Users, Posts, and Comments
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
// Setting up sequelize connection requirment
const sequelize = require('../config/connection');

// Loads all seed data
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
  
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');
  
    process.exit(0);
  };
  
  // Calling the seedAll function
  seedAll();