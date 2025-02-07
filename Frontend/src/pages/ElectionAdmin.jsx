import React, { useState } from 'react';
import { Shield, UserPlus, Play, Square, Users, LogOut, Activity, Image as ImageIcon, ThumbsUp } from 'lucide-react';

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
  isAdmin: true,
};

function ElectionAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [electionState, setElectionState] = useState({
    isActive: false,
    candidates: [],
  });
  const [newCandidate, setNewCandidate] = useState({ 
    name: '', 
    party: '', 
    description: '',
    photoUrl: '',
    partyLogoUrl: ''
  });
  const [error, setError] = useState('');
  const [votedUsers, setVotedUsers] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleAddCandidate = (e) => {
    e.preventDefault();
    if (newCandidate.name && newCandidate.party) {
      setElectionState(prev => ({
        ...prev,
        candidates: [...prev.candidates, {
          id: Date.now().toString(),
          ...newCandidate,
          votes: 0
        }]
      }));
      setNewCandidate({ name: '', party: '', description: '', photoUrl: '', partyLogoUrl: '' });
      setError('');
    }
  };

  const handleVote = (candidateId) => {
    if (!electionState.isActive) {
      setError('Voting is currently closed');
      return;
    }

    if (votedUsers.includes(username)) {
      setError('You have already voted');
      return;
    }

    setElectionState(prev => ({
      ...prev,
      candidates: prev.candidates.map(candidate => 
        candidate.id === candidateId 
          ? { ...candidate, votes: (candidate.votes || 0) + 1 }
          : candidate
      )
    }));
    setVotedUsers([...votedUsers, username]);
    setError('');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCandidate(prev => ({ ...prev, photoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePartyLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCandidate(prev => ({ ...prev, partyLogoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleElection = () => {
    setElectionState(prev => ({
      ...prev,
      isActive: !prev.isActive
    }));
    setVotedUsers([]); // Reset the voted users when toggling the election state
  };

  if (!isLoggedIn) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative bg-white/95 p-8 rounded-2xl shadow-2xl w-[400px] backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center mb-8">
            <Shield className="w-16 h-16 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800 mt-4">Election Admin</h2>
            <p className="text-gray-600 mt-2">Please sign in to continue</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Election Admin</h1>
                <p className="text-sm text-gray-500">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center px-3 py-1 rounded-full ${
                electionState.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
              }`}>
                <Activity className="w-4 h-4 mr-2" />
                {electionState.isActive ? 'Election Active' : 'Election Inactive'}
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <h2 className="text-2xl font-bold">Election Control</h2>
                <p className="mt-1 text-blue-100">Manage the election state</p>
              </div>
              <button
                onClick={toggleElection}
                className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                  electionState.isActive
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white text-blue-600 hover:bg-gray-50'
                }`}
              >
                {electionState.isActive ? (
                  <>
                    <Square className="w-5 h-5 mr-2" />
                    Stop Election
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Start Election
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Add New Candidate</h2>
                <p className="text-gray-500 mt-1">Enter candidate details below</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <form onSubmit={handleAddCandidate} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Candidate Name
                  </label>
                  <input
                    type="text"
                    value={newCandidate.name}
                    onChange={(e) => setNewCandidate(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Party Name
                  </label>
                  <input
                    type="text"
                    value={newCandidate.party}
                    onChange={(e) => setNewCandidate(prev => ({ ...prev, party: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Candidate Photo
                  </label>
                  <input
                    type="file"
                    onChange={handlePhotoChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                  {newCandidate.photoUrl && (
                    <div className="mt-2">
                      <img src={newCandidate.photoUrl} alt="candidate" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Party Logo
                  </label>
                  <input
                    type="file"
                    onChange={handlePartyLogoChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                  {newCandidate.partyLogoUrl && (
                    <div className="mt-2">
                      <img src={newCandidate.partyLogoUrl} alt="party logo" className="w-full h-48 object-cover rounded-lg shadow-md" />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newCandidate.description}
                  onChange={(e) => setNewCandidate(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter candidate's description..."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Add Candidate
              </button>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Candidate List</h2>
                <p className="text-gray-500 mt-1">
                  {electionState.candidates.length} candidate{electionState.candidates.length !== 1 ? 's' : ''} registered
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {electionState.candidates.map((candidate) => (
                <div key={candidate.id} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 flex-shrink-0">
                      {candidate.photoUrl ? (
                        <img
                          src={candidate.photoUrl}
                          alt={candidate.name}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                          <ImageIcon className="w-12 h-12 text-gray-400" />
                        </div>
                    )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
                          <div className="flex items-center mt-2">
                            {candidate.partyLogoUrl && (
                              <img
                                src={candidate.partyLogoUrl}
                                alt={candidate.party}
                                className="w-8 h-8 object-contain rounded-full mr-2"
                              />
                            )}
                            <span className="text-blue-600 font-medium">{candidate.party}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">{candidate.votes || 0}</div>
                            <div className="text-sm text-gray-500">votes</div>
                          </div>
                          <button
                            onClick={() => handleVote(candidate.id)}
                            disabled={!electionState.isActive}
                            className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              electionState.isActive
                                ? 'bg-green-600 hover:bg-green-700 text-white'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            <ThumbsUp className="w-4 h-4 mr-2" />
                            Vote
                          </button>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600">{candidate.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {electionState.candidates.length === 0 && (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No candidates added yet</p>
                  <p className="text-gray-400 text-sm mt-1">Add your first candidate using the form above</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ElectionAdmin;