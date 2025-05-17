import React, { useState } from 'react';
import './ChatInterface.css';

const chatHistory = [
  {
    id: 1,
    userInitial: 'M',
    title: 'Chat with Customer Support',
    snippet: 'We apologize for the inconvenience this may have caused............',
    time: '8 May 2025, 9:00am',
    messages: [
      { sender: 'support', text: 'There are many variations of passages of Lorem Ipsum...', time: '6:30 pm' },
      { sender: 'user', text: 'It is a long established fact that a reader will be distracted...', time: '6:30 pm' },
      { sender: 'support', text: 'There are many variations of passages of Lorem Ipsum...', time: '6:30 pm' },
      { sender: 'user', text: 'It is a long established fact that a reader will be distracted...', time: '6:30 pm' },
    ],
  },
  {
    id: 2,
    userInitial: 'J',
    title: 'Chat with Customer Support',
    snippet: 'We apologize for the inconvenience this may have caused............',
    time: '8 May 2025, 9:00am',
    messages: [
      { sender: 'support', text: 'Welcome, how can I help you?', time: '9:00 am' },
      { sender: 'user', text: 'I need assistance with my device claim.', time: '9:01 am' },
    ],
  },
  {
    id: 3,
    userInitial: 'J',
    title: 'Chat with Customer Support',
    snippet: 'We apologize for the inconvenience this may have caused............',
    time: '8 May 2025, 9:00am',
    messages: [
      { sender: 'support', text: 'Welcome, how can I help you?', time: '9:00 am' },
      { sender: 'user', text: 'Can you please tell me more Mona Protect Insurance.', time: '9:01 am' },
    ],
  },
  // Add more dummy chats if needed
];

const ChatInterface = () => {
  const [selectedChatId, setSelectedChatId] = useState(chatHistory[0].id);

  const currentChat = chatHistory.find((chat) => chat.id === selectedChatId);

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <h2>Chats</h2>
        {/* <div className="chat-tabs">
          <span className="tab">Active Chat</span>
          <span className="tab active">Chat History</span>
        </div> */}
        <div className="chat-list">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${chat.id === selectedChatId ? 'selected' : ''}`}
              onClick={() => setSelectedChatId(chat.id)}
            >
              <div className="chat-avatar">{chat.userInitial}</div>
              <div className="chat-info">
                <p><strong>{chat.title}</strong></p>
                <p>{chat.snippet}</p>
                <p className="chat-date">{chat.time}</p>
              </div>
              <div className="chat-chevron">›</div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-messages">
          {currentChat.messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === 'user' ? 'incoming' : 'outgoing'}`}>
              {msg.sender === 'user' && <div className="avatar">{currentChat.userInitial}</div>}
              <div className="bubble">
                {msg.text}
                <span className="timestamp">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="conversation-ended">Conversation Ended</div>
      </div>
    </div>
  );
};

export default ChatInterface;
