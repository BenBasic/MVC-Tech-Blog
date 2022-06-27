// Setting up model requirment for User
const { User } = require('../models');

// Defining the properties of userData
const userData = [
    {
        username: "Ben",
        email: "ben@email.com",
        password: "test12345"
    },
    {
        username: "Jake",
        email: "jake@email.com",
        password: "test12345"
    },
    {
        username: "Kim",
        email: "kim@email.com",
        password: "test12345"
    },
    {
        username: "Keegan",
        email: "keegan@email.com",
        password: "test12345"
    },
    {
        username: "Bob",
        email: "bob@email.com",
        password: "test12345"
    },
];

// seedUsers arrow function to bulk create User tables based on the userData defined above
// NOTE TO SELF: In documentation I have seen conflicting things about bulkCreate and not working with hashed/unhashed passwords, will need to look into this with further testing
const seedUsers = () => User.bulkCreate(userData);

// Exports the module to be used in other files
module.exports = seedUsers;