
import React from 'react';
import { Code, Play, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeEditorHeaderProps {
  onRunCode: () => void;
}

const CodeEditorHeader: React.FC<CodeEditorHeaderProps> = ({ onRunCode }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50">
      <div className="flex items-center space-x-2">
        <Code className="text-blue-500" size={20} />
        <span className="font-semibold">Code Editor</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={onRunCode}
          className="border-gray-700 text-white hover:bg-gray-800"
        >
          <Play size={16} className="mr-1" />
          Run
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-white hover:bg-gray-800"
        >
          <Share size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CodeEditorHeader;
