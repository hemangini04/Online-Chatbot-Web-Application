import React from 'react';
import Message from './Message';

function ChatWindow({ messages }) {
  return (
    <div className="flex-1 flex flex-col p-4 overflow-y-auto bg-[#2D2D2D]">
      {messages.map((msg, idx) => (
        <Message key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

export default ChatWindow;
