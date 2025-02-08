import React, { useState, useRef, useEffect } from 'react';
import { X, ThumbsUp, Send } from 'lucide-react';
import { gsap } from 'gsap';
import axios from 'axios';
import { useLanguage } from '../LanguageContext';

const FAQPopup = ({ isOpen, onClose }) => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newReply, setNewReply] = useState({});
  const [showAllReplies, setShowAllReplies] = useState({});
  const { language } = useLanguage();

  const popupRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        backgroundRef.current,
        { opacity: 0, backdropFilter: 'blur(0px)' },
        {
          opacity: 1,
          backdropFilter: 'blur(10px)',
          duration: 0.3,
          ease: 'power1.out'
        }
      );

      gsap.fromTo(
        popupRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: 'back.out(1.7)'
        }
      );

      // Fetch questions from the backend
      axios.get('http://localhost:3001/api/v1/get-ques')
        .then(response => {
          setQuestions(response.data.questions);
        })
        .catch(error => {
          console.error('Error fetching questions:', error);
        });
    } else {
      if (backgroundRef.current && popupRef.current) {
        const tl = gsap.timeline({
          onComplete: onClose
        });

        tl.to(popupRef.current, {
          opacity: 0,
          scale: 0.9,
          y: 50,
          duration: 0.3,
          ease: 'power1.in'
        });

        tl.to(backgroundRef.current, {
          opacity: 0,
          backdropFilter: 'blur(0px)',
          duration: 0.3
        }, '-=0.2');
      }
    }
  }, [isOpen, onClose]);

  const handleLike = (questionId) => {
    axios.post('http://localhost:3001/api/v1/question-like', { question: questionId, user: 'currentUser' })
      .then(response => {
        setQuestions(prevQuestions =>
          prevQuestions.map(q =>
            q._id === questionId ? response.data.question : q
          )
        );
      })
      .catch(error => {
        console.error('Error toggling like:', error);
      });
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      axios.post('http://localhost:3001/api/v1/create-ques', { title: newQuestion, body: 'Question body' })
        .then(response => {
          setQuestions([response.data.question, ...questions]);
          setNewQuestion('');
        })
        .catch(error => {
          console.error('Error adding question:', error);
        });
    }
  };

  const handleAddReply = (questionId) => {
    if (newReply[questionId]?.trim()) {
      axios.post('http://localhost:3001/api/v1/create-comment', { question: questionId, user: 'currentUser', body: newReply[questionId] })
        .then(response => {
          setQuestions(prevQuestions =>
            prevQuestions.map(q =>
              q._id === questionId ? response.data.question : q
            )
          );
          setNewReply(prev => ({ ...prev, [questionId]: '' }));
        })
        .catch(error => {
          console.error('Error adding reply:', error);
        });
    }
  };

  const toggleShowAllReplies = (questionId) => {
    setShowAllReplies(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const sortedQuestions = [...questions].sort((a, b) => b.likes.length - a.likes.length);

  if (!isOpen) return null;

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="bg-white w-full max-w-4xl mx-4 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition-colors hover:bg-red-300 p-2 rounded-full animate-pulse"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 border-b">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder={language === 'en' ? 'Ask a new question' : 'एक नया प्रश्न पूछें'}
              className="flex-grow border rounded-lg p-2"
            />
            <button
              onClick={handleAddQuestion}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              <Send size={20} />
            </button>
          </div>
        </div>

        {
          questions.length === 0 ? (
            <div className="p-6 text-center text-gray-600">
              {language === 'en' ? 'No questions yet. Be the first to ask!' : 'अभी तक कोई प्रश्न नहीं है। सबसे पहले पूछें!'}
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {sortedQuestions.map((q) => (
                <div key={q._id} className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{q.title}</h3>
                    <button
                      onClick={() => handleLike(q._id)}
                      className={`flex items-center space-x-1 ${q.likes.some(like => like.user === 'currentUser') ? 'text-blue-500' : ''}`}
                    >
                      <ThumbsUp size={16} />
                      <span>{q.likes.length}</span>
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{q.body}</p>

                  {q.comments.slice(0, showAllReplies[q._id] ? q.comments.length : 2).map((reply) => (
                    <div key={reply._id} className="ml-4 mt-2 bg-gray-100 p-2 rounded">
                      <div className="flex justify-between items-center">
                        <p>{reply.body}</p>
                      </div>
                    </div>
                  ))}

                  {q.comments.length > 2 && (
                    <button
                      onClick={() => toggleShowAllReplies(q._id)}
                      className="text-blue-500 mt-2"
                    >
                      {showAllReplies[q._id] ? (language === 'en' ? 'Show Less' : 'कम दिखाएं') : (language === 'en' ? 'Show More' : 'और दिखाएं')}
                    </button>
                  )}

                  <div className="flex space-x-2 mt-4">
                    <input
                      type="text"
                      value={newReply[q._id] || ''}
                      onChange={(e) => setNewReply(prev => ({
                        ...prev,
                        [q._id]: e.target.value
                      }))}
                      placeholder={language === 'en' ? 'Add a reply' : 'एक उत्तर जोड़ें'}
                      className="flex-grow border rounded-lg p-2"
                    />
                    <button
                      onClick={() => handleAddReply(q._id)}
                      className="bg-green-500 text-white p-2 rounded-lg"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default FAQPopup;