import React, { useState } from 'react';

function ChatInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="flex items-center p-4 border-t bg-[#2D2D2D]">
      <input
        type="text"
        className="flex-1 p-2 border rounded text-white bg-[#3A3A3A] mr-2"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button 
        onClick={handleSend} 
        className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
