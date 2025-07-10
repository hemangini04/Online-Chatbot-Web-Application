import React from 'react';

function Sidebar({ chats, onNewChat, onSelectChat }) {
  return (
    <div className="w-64 bg-[#2D2D2D] border-r-2 border-black p-4 overflow-y-auto">
      <button 
        onClick={onNewChat} 
        className="w-full mb-4 py-2 bg-[#FF6F00] text-white rounded hover:bg-orange-600"
      >
        + New Chat
      </button>

      <div className="space-y-2">
        {chats.map((chat, idx) => (
          <div 
            key={idx} 
            onClick={() => onSelectChat(idx)}
            className="p-2 bg-[#3A3A3A] rounded shadow border-1 border-black text-white hover:bg-[#4A4A4A] cursor-pointer"
          >
            {chat.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
