const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log('Failed to connect to MongoDB', err);
    });
}

module.exports = dbConnect;