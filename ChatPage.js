// ChatPage.js

import React, { useState } from 'react';

const ChatPage = ({ sellerName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'buyer', message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Chat with {sellerName}</h1>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'buyer' ? 'buyer-message' : 'seller-message'}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
