import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  MessageSquare, 
  Users, 
  Settings, 
  Maximize2,
  MoreVertical,
  Send,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoCallApp = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="h-screen bg-[#0a0a0a] text-white flex flex-col font-['Inter']">
      {/* Top Header */}
      <header className="p-4 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <Video size={20} />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wide uppercase">Engineering Sync</h1>
            <p className="text-[10px] text-indigo-400 font-medium">00:42:15 • SECURE</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-gray-800 flex items-center justify-center overflow-hidden">
                <User size={14} className="text-gray-400" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-indigo-600 flex items-center justify-center text-[10px] font-bold">
              +12
            </div>
          </div>
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Settings size={20} /></button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex relative overflow-hidden p-4 gap-4">
        {/* Video Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main Participant */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-white/5 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="text-sm font-medium">You (Sandra)</span>
              <div className="p-1 bg-white/10 rounded-md backdrop-blur-sm">
                <Mic size={12} className={isMuted ? 'text-red-500' : 'text-green-500'} />
              </div>
            </div>
            {/* Mock Video Feed Placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-black">
               <User size={80} className="text-white/10" />
            </div>
          </div>

          {/* Other Participant */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-white/5">
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="text-sm font-medium">Alex Rivera</span>
              <div className="p-1 bg-white/10 rounded-md backdrop-blur-sm">
                <Mic size={12} className="text-green-500" />
              </div>
            </div>
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-black">
               <User size={80} className="text-white/10" />
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <AnimatePresence>
          {showChat && (
            <motion.div 
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className="w-80 glass rounded-3xl flex flex-col"
            >
              <div className="p-4 border-b border-white/5 flex justify-between items-center">
                <h2 className="font-bold">In-call Messages</h2>
                <button onClick={() => setShowChat(false)} className="text-xs text-indigo-400 font-medium">Close</button>
              </div>
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-[10px] text-indigo-400 mb-1">Alex Rivera</p>
                  <p className="text-xs">Hey, can everyone see my screen share?</p>
                </div>
                <div className="bg-indigo-600 p-3 rounded-2xl rounded-tr-none max-w-[80%] ml-auto">
                  <p className="text-xs text-white">Yes, looks clear on my end.</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Send a message..." 
                    className="w-full bg-white/5 border-none rounded-2xl py-3 pl-4 pr-12 text-xs focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-400">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Control Bar */}
      <footer className="p-8 flex justify-center items-center gap-4 relative">
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-2xl p-4 rounded-[32px] border border-white/5 shadow-2xl">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`p-4 rounded-2xl transition-all ${isMuted ? 'bg-red-500 text-white' : 'hover:bg-white/10 text-white'}`}
          >
            {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
          </button>
          
          <button 
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={`p-4 rounded-2xl transition-all ${isVideoOff ? 'bg-red-500 text-white' : 'hover:bg-white/10 text-white'}`}
          >
            {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
          </button>

          <button className="bg-red-600 hover:bg-red-700 p-4 rounded-2xl transition-all px-8">
            <PhoneOff size={24} />
          </button>

          <div className="w-[1px] h-8 bg-white/10 mx-2" />

          <button 
            onClick={() => setShowChat(!showChat)}
            className={`p-4 rounded-2xl hover:bg-white/10 transition-all ${showChat ? 'text-indigo-400 bg-indigo-400/10' : 'text-white'}`}
          >
            <MessageSquare size={24} />
          </button>

          <button className="p-4 rounded-2xl hover:bg-white/10 transition-all text-white">
            <Users size={24} />
          </button>
          
          <button className="p-4 rounded-2xl hover:bg-white/10 transition-all text-white">
            <MoreVertical size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default VideoCallApp;
