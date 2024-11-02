import React, { useState } from "react";
import { Box, Typography, Paper, TextField, IconButton, Divider, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageBubble from "./MessageBubbles";

const ChatBox = ({ friendName, friendAvatar }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How are you?", sender: "friend" },
    { id: 2, text: "I'm good! What about you?", sender: "user" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        maxWidth: 500,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {/* Chat Header */}
      <Box sx={{ display: "flex", alignItems: "center", p: 2, bgcolor: "primary.main", color: "white" }}>
        <Avatar src={friendAvatar} alt={friendName} />
        <Typography variant="h6" component="div" sx={{ ml: 2 }}>
          {friendName}
        </Typography>
      </Box>

      <Divider />

      {/* Chat Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message.text} sender={message.sender} />
        ))}
      </Box>

      <Divider />

      {/* Message Input Field */}
      <Box sx={{ display: "flex", p: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Type a message..."
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatBox;
