// filepath: /d:/ROAD TO SE/Projects/DigiVote/Backend/controllers/QuestionController.js
const Question = require("../models/questionModel");

exports.createQuestion = async (req, res) => {
    try {
        const { title, body } = req.body;
        const question = new Question({ title, body });
        const savedQuestion = await question.save();
        res.json({ question: savedQuestion });
    } catch (error) {
        return res.status(500).json({ error: "Error while creating question" });
    }
};

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate("likes comments").exec();
        res.json({ questions });
    } catch (error) {
        return res.status(500).json({ error: "Error while fetching questions" });
    }
};