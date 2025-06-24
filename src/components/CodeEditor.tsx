
import React, { useState } from 'react';
import CodeEditorHeader from './CodeEditorHeader';
import PreviewHeader from './PreviewHeader';
import CodeTabs from './CodeTabs';
import LivePreview from './LivePreview';

interface CodeEditorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ activeTab, setActiveTab }) => {
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
}

.counter {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
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
  transition: background 0.2s;
}

button:hover {
  background: #5a6fd8;
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
    <div className="flex flex-col h-full">
      <CodeEditorHeader onRunCode={runCode} />

      <div className="flex-1 flex">
        {/* Code Editor Tabs */}
        <div className="w-1/2 border-r border-gray-800">
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

        {/* Live Preview */}
        <div className="w-1/2 flex flex-col">
          <PreviewHeader onRefreshPreview={refreshPreview} />
          <LivePreview 
            previewHTML={getPreviewHTML()}
            previewKey={previewKey}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
