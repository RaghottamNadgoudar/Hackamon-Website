// src/components/Schedule/Schedule.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Schedule = () => {
  const { user, logout } = useAuth();

  const scheduleData = [
    {
      time: "9:00 AM",
      event: "Registration & Breakfast",
      description: "Check-in and team verification",
      status: "completed"
    },
    {
      time: "10:00 AM",
      event: "Opening Ceremony",
      description: "Welcome speech and hackathon rules",
      status: "completed"
    },
    {
      time: "11:00 AM",
      event: "Round 1 Begins",
      description: "Problem statements released",
      status: "current"
    },
    {
      time: "1:00 PM",
      event: "Lunch Break",
      description: "Networking and refreshments",
      status: "upcoming"
    },
    {
      time: "3:00 PM",
      event: "Round 1 Submission",
      description: "Deadline for Round 1 solutions",
      status: "upcoming"
    },
    {
      time: "4:00 PM",
      event: "Round 2 Begins",
      description: "Advanced problem statements",
      status: "upcoming"
    },
    {
      time: "7:00 PM",
      event: "Final Presentations",
      description: "Team presentations to judges",
      status: "upcoming"
    },
    {
      time: "8:30 PM",
      event: "Awards Ceremony",
      description: "Winners announcement",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-yellow-400';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'current':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Unknown';
    }
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

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Event Schedule</h2>
          <p className="text-xl text-gray-300">Stay updated with the hackathon timeline</p>
        </div>

        {/* Current Time Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Current Time</h3>
          <p className="text-3xl text-yellow-400 font-mono">
            {new Date().toLocaleTimeString()}
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-6">
          {scheduleData.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{item.time}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(item.status)} text-gray-900`}>
                    {getStatusText(item.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 mt-8">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">📝 Important Notes</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Make sure to submit your solutions before the deadline</li>
            <li>• All team members must be present during presentations</li>
            <li>• Late submissions will not be accepted</li>
            <li>• Contact organizers if you face any technical issues</li>
          </ul>
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

export default Schedule;
