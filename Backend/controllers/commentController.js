// filepath: /d:/ROAD TO SE/Projects/DigiVote/Backend/controllers/CommentController.js
const Question = require("../models/questionModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try {
        const { question, user, body } = req.body;
        const comment = new Comment({ question, user, body });
        const savedComment = await comment.save();

        const updatedQuestion = await Question.findByIdAndUpdate(question, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments")
            .exec();

        res.json({ question: updatedQuestion });
    } catch (error) {
        return res.status(500).json({ error: "Error while creating comment" });
    }
};