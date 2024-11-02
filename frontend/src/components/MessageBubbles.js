import React from "react";
import { Box, Typography } from "@mui/material";

const MessageBubble = ({ message, sender }) => {
  const isUser = sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      <Box
        sx={{
          p: 1.5,
          maxWidth: "70%",
          bgcolor: isUser ? "primary.main" : "grey.300",
          color: isUser ? "white" : "black",
          borderRadius: 2,
          borderTopLeftRadius: isUser ? 2 : 0,
          borderTopRightRadius: isUser ? 0 : 2,
        }}
      >
        <Typography variant="body2">{message}</Typography>
      </Box>
    </Box>
  );
};

export default MessageBubble;
