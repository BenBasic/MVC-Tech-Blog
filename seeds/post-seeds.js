// Setting up model requirment for Post
const { Post } = require('../models');

// Defining the properties of postData
const postData = [
    {
        title: "Coding Is Fun",
        post_text: "Except for when you have a lot of arm pain and your homework is due tomorrow",
        user_id: 1
    },
    {
        title: "Writing Code Is A Lot Like Building Furniture",
        post_text: "I don't know how to build furniture",
        user_id: 2
    },
    {
        title: "How Do I Log Into Gmail?",
        post_text: "I am typing my email address into the browser url on my phone and it isn't working",
        user_id: 3
    },
    {
        title: "Why Did My Wife Leave Me?",
        post_text: "Google tells me I need to center my div but I dont see how thats relevant",
        user_id: 3
    },
    {
        title: "How To Buy A New Graphics Card",
        post_text: "Get a payday loan",
        user_id: 4
    },
    {
        title: "I (28/M) Cant Get My Dog (4/F) To Stop Eating My Keyboard",
        post_text: "She thinks theyre really tasty but this is getting really expensive",
        user_id: 5
    },
]

// seedUsers arrow function to bulk create Post tables based on the postData defined above
const seedPosts = () => Post.bulkCreate(postData);

// Exports the module to be used in other files
module.exports = seedPosts;