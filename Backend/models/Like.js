const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    Question: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    User: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});