// src/Chat.jsx
import React, { useState } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim()) {
      setMessages([...messages, { name: `${user.name} ${user.lastName}`, text }]);
      setText('');
    }
  };

  const handleBackToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="h-screen flex relative">
      <div className="w-48 bg-blue-600 text-white flex items-center justify-center text-xl font-bold rounded-r-3xl shadow-lg">
        Group 80
      </div>

      <div className="flex flex-col flex-grow bg-gray-50 p-4">
        <div className="flex-grow overflow-y-auto space-y-2 mb-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="bg-white p-3 rounded shadow-sm">
              <span className="font-semibold text-blue-700">{msg.name}:</span> {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-grow px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Type your message..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            onClick={sendMessage}
          >
            ➤
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={handleBackToRegister}
        className="absolute bottom-4 left-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        +
      </button>
    </div>
  );
};

export default Chat;
