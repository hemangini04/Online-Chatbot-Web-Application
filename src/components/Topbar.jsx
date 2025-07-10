import React from 'react';

function Topbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-[#2D2D2D] shadow-md border-b-2 border-black">
      <div className="text-xl font-bold text-[#FF6F00]">MyChatBot</div>
      <div className="w-10 h-10 bg-[#FF6F00] rounded-full flex items-center justify-center">
        <span className="text-white font-bold">U</span> {/* Dummy profile */}
      </div>
    </div>
  );
}

export default Topbar;
