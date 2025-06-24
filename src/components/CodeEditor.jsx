
import React, { useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import CodeEditorHeader from './CodeEditorHeader';
import PreviewHeader from './PreviewHeader';
import CodeTabs from './CodeTabs';
import LivePreview from './LivePreview';

const CodeEditor = ({ activeTab, setActiveTab }) => {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Hooks Example</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>`);

  const [cssCode, setCssCode] = useState(`body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  transform: scale(1);
  transition: transform 0.2s ease;
}

.container:hover {
  transform: scale(1.02);
}

.counter {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
  transition: color 0.3s ease;
}

button {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 8px;
  transition: all 0.2s ease;
  transform: translateY(0);
}

button:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

button:active {
  transform: translateY(0);
}`);

  const [jsCode, setJsCode] = useState(`function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div className="container">
      <h1>React Hooks Counter</h1>
      <div className="counter">{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));`);

  const [previewKey, setPreviewKey] = useState(0);

  // Generate preview HTML without causing re-renders
  const getPreviewHTML = () => {
    return `
      ${htmlCode}
      <style>${cssCode}</style>
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script>
        ${jsCode}
      </script>
    `;
  };

  const runCode = () => {
    setPreviewKey(prev => prev + 1);
  };

  const refreshPreview = () => {
    setPreviewKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col h-full bg-black">
      <CodeEditorHeader onRunCode={runCode} />

      <div className="flex-1 min-h-0">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Code Editor Panel */}
          <ResizablePanel defaultSize={50} minSize={25} className="min-w-0">
            <div className="h-full flex flex-col bg-gray-900">
              <CodeTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                htmlCode={htmlCode}
                setHtmlCode={setHtmlCode}
                cssCode={cssCode}
                setCssCode={setCssCode}
                jsCode={jsCode}
                setJsCode={setJsCode}
              />
            </div>
          </ResizablePanel>
          
          <ResizableHandle withHandle className="w-2 bg-gray-800 hover:bg-gray-700 transition-colors duration-200" />
          
          {/* Live Preview Panel */}
          <ResizablePanel defaultSize={50} minSize={25} className="min-w-0">
            <div className="flex flex-col h-full bg-gray-900">
              <PreviewHeader onRefreshPreview={refreshPreview} />
              <div className="flex-1 min-h-0">
                <LivePreview 
                  previewHTML={getPreviewHTML()}
                  previewKey={previewKey}
                />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default CodeEditor;
