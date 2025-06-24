
import React from 'react';

interface LivePreviewProps {
  previewHTML: string;
  previewKey: number;
}

const LivePreview: React.FC<LivePreviewProps> = ({ previewHTML, previewKey }) => {
  return (
    <div className="flex-1 bg-white">
      <iframe
        key={previewKey}
        srcDoc={previewHTML}
        className="w-full h-full border-none"
        title="Live Preview"
      />
    </div>
  );
};

export default LivePreview;
