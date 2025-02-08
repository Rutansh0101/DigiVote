const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question", // reference to the question model
    },
    user: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Like", likeSchema);