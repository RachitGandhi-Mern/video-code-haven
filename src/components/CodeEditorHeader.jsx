
import React from 'react';
import { Code, Play, Share, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CodeEditorHeader = ({ onRunCode }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <Code className="text-blue-500 animate-pulse" size={20} />
        <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Code Editor
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={onRunCode}
          className="border-gray-700 text-white hover:bg-gray-800 hover:border-green-500 hover:text-green-400 transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          <Play size={16} className="mr-1" />
          Run
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-white hover:bg-gray-800 hover:text-purple-400 transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          <Share size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CodeEditorHeader;
