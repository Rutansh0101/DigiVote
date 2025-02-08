const Question = require("../models/questionModel");
const Like = require("../models/likeModel");

exports.toggleLikeQuestion = async (req, res) => {
    try {
        const { question, user } = req.body;
        const existingLike = await Like.findOne({ question, user });

        let updatedQuestion;
        if (existingLike) {
            // Unlike the question
            await Like.findByIdAndDelete(existingLike._id);
            updatedQuestion = await Question.findByIdAndUpdate(question, { $pull: { likes: existingLike._id } }, { new: true })
                .populate("likes")
                .exec();
        } else {
            // Like the question
            const like = new Like({ question, user });
            const savedLike = await like.save();
            updatedQuestion = await Question.findByIdAndUpdate(question, { $push: { likes: savedLike._id } }, { new: true })
                .populate("likes")
                .exec();
        }

        res.json({ question: updatedQuestion });
    } catch (error) {
        return res.status(400).json({ error: "Error while toggling like" });
    }
};