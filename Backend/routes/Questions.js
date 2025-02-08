const express = require("express");
const router = express.Router();

const { toggleLikeQuestion } = require("../controllers/LikeController");
const { createComment } = require("../controllers/CommentController");
const { createQuestion, getAllQuestions } = require("../controllers/QuestionController");

router.post("/create-comment", createComment);
router.post("/create-ques", createQuestion);
router.get("/get-ques", getAllQuestions);
router.post("/question-like", toggleLikeQuestion);

module.exports = router;