const express = require('express');
const router = express.Router();

// Importing the controllers:
const { getQuestions, postQuestions } = require('../controllers/Questions');

// Mounting the controllers:
router.get('/get-questions', getQuestions);
router.post('/post-question', postQuestions);

module.exports = router;