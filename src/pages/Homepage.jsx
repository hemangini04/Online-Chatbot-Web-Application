import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';

function Homepage() {
  const [chats, setChats] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(null);

  const handleNewChat = () => {
    const newChat = { title: `Chat ${chats.length + 1}`, messages: [] };
    setChats([...chats, newChat]);
    setCurrentChatIndex(chats.length);
  };

  const handleSelectChat = (index) => {
    setCurrentChatIndex(index);
  };

  const handleSendMessage = (message) => {
    if (currentChatIndex === null) return;
    const updatedChats = [...chats];
    updatedChats[currentChatIndex].messages.push({ sender: 'user', text: message });
    
    // Dummy bot reply
    updatedChats[currentChatIndex].messages.push({ sender: 'bot', text: "This is a dummy bot reply!" });

    setChats(updatedChats);
  };

  return (
    <div className="h-screen flex flex-col bg-[#2D2D2D]">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar chats={chats} onNewChat={handleNewChat} onSelectChat={handleSelectChat} />
        <div className="flex flex-col flex-1">
          {currentChatIndex !== null && (
            <>
              <ChatWindow messages={chats[currentChatIndex].messages} />
              <ChatInput onSend={handleSendMessage} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
