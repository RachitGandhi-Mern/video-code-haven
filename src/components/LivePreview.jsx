
import React from 'react';

const LivePreview = ({ previewHTML, previewKey }) => {
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
