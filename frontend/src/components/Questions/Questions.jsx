// src/components/Questions/Questions.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Questions = () => {
  const { user, logout } = useAuth();
  const [selectedRound, setSelectedRound] = useState('round1');

  const questions = {
    round1: [
      {
        id: 1,
        title: "Build a Pokémon Battle System",
        description: "Create a turn-based battle system where Pokémon can fight each other using different moves and abilities.",
        difficulty: "Medium",
        timeLimit: "4 hours",
        technologies: ["React", "JavaScript", "CSS"]
      },
      {
        id: 2,
        title: "Pokédex API Integration",
        description: "Build a Pokédex that fetches data from the Pokémon API and displays detailed information about each Pokémon.",
        difficulty: "Easy",
        timeLimit: "2 hours",
        technologies: ["React", "API", "CSS"]
      }
    ],
    round2: [
      {
        id: 3,
        title: "Pokémon Team Builder",
        description: "Create an advanced team builder that suggests optimal Pokémon teams based on type advantages and battle strategies.",
        difficulty: "Hard",
        timeLimit: "6 hours",
        technologies: ["React", "Algorithm", "Database"]
      }
    ]
  };

  const [submissions, setSubmissions] = useState({});

  const handleSubmission = (questionId, submissionData) => {
    setSubmissions(prev => ({
      ...prev,
      [questionId]: submissionData
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300">
            PokéHack 2025 Portal
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-sm hover:text-yellow-400">Dashboard</Link>
            <span className="text-sm">Team: {user.teamName}</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Hackathon Questions</h2>
          <p className="text-xl text-gray-300">Choose your round and start coding!</p>
        </div>

        {/* Round Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
            <button
              onClick={() => setSelectedRound('round1')}
              className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
                selectedRound === 'round1'
                  ? 'bg-yellow-400 text-gray-900'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Round 1
            </button>
            <button
              onClick={() => setSelectedRound('round2')}
              className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
                selectedRound === 'round2'
                  ? 'bg-yellow-400 text-gray-900'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Round 2
            </button>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {questions[selectedRound].map((question) => (
            <div key={question.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{question.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      question.difficulty === 'Easy' ? 'bg-green-500' :
                      question.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                      {question.difficulty}
                    </span>
                    <span className="text-gray-300">⏱️ {question.timeLimit}</span>
                  </div>
                </div>
                <div className="text-right">
                  {submissions[question.id] ? (
                    <span className="text-green-400 font-semibold">✅ Submitted</span>
                  ) : (
                    <span className="text-gray-400">Not submitted</span>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-6">{question.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {question.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300">
                  Start Coding
                </button>
                <button 
                  onClick={() => handleSubmission(question.id, { submittedAt: new Date() })}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit Solution
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
