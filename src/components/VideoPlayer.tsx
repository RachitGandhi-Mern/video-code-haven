
import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize, SkipBack, SkipForward, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-4">
      {/* Video Container */}
      <div className="relative bg-black rounded-lg overflow-hidden aspect-video group">
        {/* Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
              <Play className="text-white ml-1" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">React Hooks Tutorial</h3>
              <p className="text-gray-400">Learn useState, useEffect, and custom hooks</p>
            </div>
          </div>
        </div>

        {/* Video Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:bg-white/20"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <SkipBack size={16} />
            </Button>
            
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <SkipForward size={16} />
            </Button>

            <div className="flex-1 mx-4">
              <div className="bg-white/30 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full w-1/3"></div>
              </div>
            </div>

            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Volume2 size={16} />
            </Button>
            
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Settings size={16} />
            </Button>
            
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Maximize size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">React Hooks Deep Dive - useState & useEffect</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span>Web Dev Simplified</span>
          <span>•</span>
          <span>142K views</span>
          <span>•</span>
          <span>2 days ago</span>
        </div>
        <p className="text-gray-300 leading-relaxed">
          In this comprehensive tutorial, we'll explore React Hooks in detail. Learn how to use useState 
          for state management and useEffect for side effects. Perfect for beginners and intermediate developers.
        </p>
      </div>

      {/* Video Chapters */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-300">Chapters</h3>
        <div className="space-y-1">
          {[
            { time: '0:00', title: 'Introduction' },
            { time: '2:15', title: 'useState Basics' },
            { time: '8:30', title: 'useEffect Fundamentals' },
            { time: '15:45', title: 'Practical Examples' },
            { time: '22:10', title: 'Best Practices' },
          ].map((chapter, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 w-full text-left p-2 rounded hover:bg-gray-800 transition-colors"
            >
              <span className="text-blue-400 text-sm font-mono">{chapter.time}</span>
              <span className="text-sm">{chapter.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
