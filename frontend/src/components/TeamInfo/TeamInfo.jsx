// src/components/TeamInfo/TeamInfo.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const TeamInfo = () => {
  const { user, logout } = useAuth();

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

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Team Information</h2>
          <p className="text-xl text-gray-300">Your registered team details</p>
        </div>

        {/* Team Overview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">Team {user.teamName}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Team Details</h4>
              <div className="space-y-2">
                <p><span className="font-semibold">Department:</span> {user.department}</p>
                <p><span className="font-semibold">Team Size:</span> {user.members.length + 1} members</p>
                <p><span className="font-semibold">Registration ID:</span> PKH-{user.id.toString().padStart(4, '0')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Lead */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">👑 Team Lead</h3>
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-2">{user.teamLead.name}</h4>
            <div className="space-y-1 text-gray-300">
              <p><span className="font-semibold">USN:</span> {user.teamLead.usn}</p>
              <p><span className="font-semibold">Email:</span> {user.teamLead.email}</p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">👥 Team Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user.members.map((member, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
                <div className="space-y-1 text-gray-300">
                  <p><span className="font-semibold">USN:</span> {member.usn}</p>
                  <p><span className="font-semibold">Email:</span> {member.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-8">
          <Link to="/dashboard">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
