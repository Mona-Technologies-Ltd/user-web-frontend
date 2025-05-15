import React from "react";
import "./ChatHistory.css";

const ChatHistory = () => {
  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <h2 className="chat-title">Chats</h2>
        <div className="chat-tabs">
          <div className="chat-tab">Active Chat</div>
          <div className="chat-tab active">Chat History</div>
        </div>
        <div className="chat-history-list">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="chat-history-item">
              <div className="avatar">M</div>
              <div className="chat-info">
                <p className="chat-name">Chat with Customer Support</p>
                <p className="chat-preview">
                  We apologize for the inconvenience this may have caused............
                </p>
                <p className="chat-date">8 May 2025, 9:00am</p>
              </div>
              <div className="arrow">›</div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-content">
        <div className="messages">
          <div className="message bot">
            <div className="bubble">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
              <span className="time">6:30 pm</span>
            </div>
          </div>

          <div className="message user">
            <div className="avatar">M</div>
            <div className="bubble">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              <span className="time">6:30 pm</span>
            </div>
          </div>

          <div className="message bot">
            <div className="bubble">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
              <span className="time">6:30 pm</span>
            </div>
          </div>

          <div className="message user">
            <div className="avatar">M</div>
            <div className="bubble">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              <span className="time">6:30 pm</span>
            </div>
          </div>
        </div>

        <div className="conversation-ended">Conversation Ended</div>
      </div>
    </div>
  );
};

export default ChatHistory;
