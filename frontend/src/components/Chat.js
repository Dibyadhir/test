// client/src/Chat.js
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000');

const Chat = () => {
    
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const username='sky'
  
    useEffect(() => {
      socket.emit('login', username);
  
      // Listen for incoming private messages
      socket.on('chatMessage', (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
  
      return () => {
        socket.off('chatMessage');
      };
    }, [username]);
  
    const sendMessage = () => {
      if (message && recipient) {
        socket.emit('privateMessage', { recipient, message });
        setMessages((prevMessages) => [...prevMessages, { message, sender: 'You' }]);
        setMessage('');
      }
    };
  
    return (
      <div>
        <h2>Chat as {username}</h2>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient username"
        />
        <div className="chat-box">
          {messages.map((msg, index) => (
            <p key={index}><strong>{msg.sender}:</strong> {msg.message}</p>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    );
};

export default Chat;
