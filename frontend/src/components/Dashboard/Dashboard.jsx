// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400">PokéHack 2025 Portal</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Welcome, {user.teamName}!</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Team Dashboard</h2>
          <p className="text-xl text-gray-300">Welcome to your hackathon portal, Team {user.teamName}!</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Department</h3>
            <p className="text-2xl text-yellow-400">{user.department}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Team Size</h3>
            <p className="text-2xl text-yellow-400">{user.members.length + 1}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Status</h3>
            <p className="text-2xl text-green-400">Active</p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/questions" className="group">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-center transform group-hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">❓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Questions</h3>
              <p className="text-gray-800">Access hackathon questions and submissions</p>
            </div>
          </Link>

          <Link to="/team-info" className="group">
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-8 text-center transform group-hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-white mb-2">Team Info</h3>
              <p className="text-gray-100">View and manage team information</p>
            </div>
          </Link>

          <Link to="/schedule" className="group">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-center transform group-hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Schedule</h3>
              <p className="text-gray-100">Check event schedule and timings</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
