
import React from 'react';
import { Eye, RotateCcw, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PreviewHeader = ({ onRefreshPreview }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <Eye className="text-green-500 animate-pulse" size={20} />
        <span className="font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Live Preview
        </span>
      </div>
      <Button 
        variant="ghost" 
        size="sm"
        onClick={onRefreshPreview}
        className="text-white hover:bg-gray-800 hover:text-green-400 transition-all duration-200 transform hover:scale-105 active:scale-95 hover:rotate-180"
      >
        <RotateCcw size={16} className="transition-transform duration-300" />
      </Button>
    </div>
  );
};

export default PreviewHeader;
