// filepath: /d:/ROAD TO SE/Projects/DigiVote/Backend/models/commentModel.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question", // reference to the question model
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Comment", commentSchema);