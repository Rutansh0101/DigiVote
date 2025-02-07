import React, { useState, useRef, useEffect } from 'react';
import { X, ThumbsUp, Send } from 'lucide-react';
import { gsap } from 'gsap';

const FAQPopup = ({ isOpen, onClose }) => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newReply, setNewReply] = useState({});
  
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

  // Like a question or reply
  const handleLike = (questionId, replyId = null) => {
    setQuestions(prevQuestions => 
      prevQuestions.map(q => {
        if (q.id === questionId) {
          // Like the main question
          if (!replyId) {
            return { ...q, likes: q.likes + 1 };
          }
          
          // Like a reply
          const updatedReplies = q.replies.map(reply => 
            reply.id === replyId 
              ? { ...reply, likes: (reply.likes || 0) + 1 }
              : reply
          );
          
          return { ...q, replies: updatedReplies };
        }
        return q;
      })
    );
  };

  // Add a new question
  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      const newQuestionObj = {
        id: Date.now(),
        question: newQuestion,
        answer: "Our team will review and respond soon.",
        likes: 0,
        replies: []
      };
      
      setQuestions([newQuestionObj, ...questions]);
      setNewQuestion('');
    }
  };

  // Add a reply to a specific question
  const handleAddReply = (questionId) => {
    if (newReply[questionId]?.trim()) {
      setQuestions(prevQuestions => 
        prevQuestions.map(q => 
          q.id === questionId 
            ? { 
                ...q, 
                replies: [
                  ...q.replies, 
                  { 
                    id: Date.now(), 
                    text: newReply[questionId], 
                    likes: 0 
                  }
                ] 
              }
            : q
        )
      );
      
      setNewReply(prev => ({ ...prev, [questionId]: '' }));
    }
  };

  const sortedQuestions = [...questions].sort((a, b) => b.likes - a.likes);

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
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
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
              placeholder="Ask a new question"
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
              No questions yet. Be the first to ask!
            </div>
          )
          :
          <div className="p-6 space-y-6">
            {sortedQuestions.map((q) => (
              <div key={q.id} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{q.question}</h3>
                  <button 
                    onClick={() => handleLike(q.id)}
                    className="flex items-center space-x-1"
                  >
                    <ThumbsUp size={16} />
                    <span>{q.likes}</span>
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{q.answer}</p>

                {/* Replies */}
                {q.replies.map((reply) => (
                  <div key={reply.id} className="ml-4 mt-2 bg-gray-100 p-2 rounded">
                    <div className="flex justify-between items-center">
                      <p>{reply.text}</p>
                      <button 
                        onClick={() => handleLike(q.id, reply.id)}
                        className="flex items-center space-x-1"
                      >
                        <ThumbsUp size={12} />
                        <span>{reply.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Reply Input */}
                <div className="flex space-x-2 mt-4">
                  <input 
                    type="text"
                    value={newReply[q.id] || ''}
                    onChange={(e) => setNewReply(prev => ({ 
                      ...prev, 
                      [q.id]: e.target.value 
                    }))}
                    placeholder="Add a reply"
                    className="flex-grow border rounded-lg p-2"
                  />
                  <button 
                    onClick={() => handleAddReply(q.id)}
                    className="bg-green-500 text-white p-2 rounded-lg"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        }
        
      </div>
    </div>
  );
};

export default FAQPopup;