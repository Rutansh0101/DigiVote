const Question = require("../models/Question");

const postQuestions = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const newQuestion = new Question({ question, answer });
        await newQuestion.save();
        res.status(201).json({ message: "Question added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json({ questions });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { postQuestions, getQuestions };