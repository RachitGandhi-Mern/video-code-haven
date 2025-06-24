
import React from 'react';

const LivePreview = ({ previewHTML, previewKey }) => {
  return (
    <div className="flex-1 bg-white h-full min-h-0 rounded-tl-lg overflow-hidden">
      <iframe
        key={previewKey}
        srcDoc={previewHTML}
        className="w-full h-full border-none rounded-tl-lg transition-opacity duration-300"
        title="Live Preview"
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default LivePreview;
