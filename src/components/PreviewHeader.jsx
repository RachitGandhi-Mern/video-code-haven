
import React from 'react';
import { Eye, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PreviewHeader = ({ onRefreshPreview }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50">
      <div className="flex items-center space-x-2">
        <Eye className="text-green-500" size={20} />
        <span className="font-semibold">Live Preview</span>
      </div>
      <Button 
        variant="ghost" 
        size="sm"
        onClick={onRefreshPreview}
        className="text-white hover:bg-gray-800"
      >
        <RotateCcw size={16} />
      </Button>
    </div>
  );
};

export default PreviewHeader;
