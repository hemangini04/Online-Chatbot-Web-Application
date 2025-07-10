import React from 'react';

function Message({ sender, text }) {
  const isUser = sender === 'user';
  
  return (
    <div className={`my-2 ${isUser ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-2 rounded-lg ${isUser ? 'bg-[#FF6F00] text-white' : 'bg-[#3A3A3A] text-white'}`}>
        {text}
      </div>
    </div>
  );
}

export default Message;
