
import React, { useState, useEffect } from 'react';
import { Code, Eye, Play, Download, Share, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

  const generatePreview = () => {
    const preview = `
      ${htmlCode}
      <style>${cssCode}</style>
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script>
        ${jsCode}
      </script>
    `;
    setPreviewKey(prev => prev + 1);
    return preview;
  };

  const runCode = () => {
    setPreviewKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Editor Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50">
        <div className="flex items-center space-x-2">
          <Code className="text-blue-500" size={20} />
          <span className="font-semibold">Code Editor</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={runCode}
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

      <div className="flex-1 flex">
        {/* Code Editor Tabs */}
        <div className="w-1/2 border-r border-gray-800">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800 border-b border-gray-700">
              <TabsTrigger value="html" className="data-[state=active]:bg-gray-700">HTML</TabsTrigger>
              <TabsTrigger value="css" className="data-[state=active]:bg-gray-700">CSS</TabsTrigger>
              <TabsTrigger value="js" className="data-[state=active]:bg-gray-700">JavaScript</TabsTrigger>
            </TabsList>
            
            <div className="flex-1">
              <TabsContent value="html" className="h-full m-0">
                <textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="w-full h-full p-4 bg-gray-900 text-white font-mono text-sm resize-none border-none outline-none"
                  style={{ fontFamily: 'Monaco, Menlo, monospace' }}
                />
              </TabsContent>
              
              <TabsContent value="css" className="h-full m-0">
                <textarea
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  className="w-full h-full p-4 bg-gray-900 text-white font-mono text-sm resize-none border-none outline-none"
                  style={{ fontFamily: 'Monaco, Menlo, monospace' }}
                />
              </TabsContent>
              
              <TabsContent value="js" className="h-full m-0">
                <textarea
                  value={jsCode}
                  onChange={(e) => setJsCode(e.target.value)}
                  className="w-full h-full p-4 bg-gray-900 text-white font-mono text-sm resize-none border-none outline-none"
                  style={{ fontFamily: 'Monaco, Menlo, monospace' }}
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Live Preview */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50">
            <div className="flex items-center space-x-2">
              <Eye className="text-green-500" size={20} />
              <span className="font-semibold">Live Preview</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setPreviewKey(prev => prev + 1)}
              className="text-white hover:bg-gray-800"
            >
              <RotateCcw size={16} />
            </Button>
          </div>
          <div className="flex-1 bg-white">
            <iframe
              key={previewKey}
              srcDoc={generatePreview()}
              className="w-full h-full border-none"
              title="Live Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
