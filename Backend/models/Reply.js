const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
    Question: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    User: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    reply: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Reply', ReplySchema);