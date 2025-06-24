
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CodeTabs = ({
  activeTab,
  setActiveTab,
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
}) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
      <TabsList className="grid w-full grid-cols-3 bg-gray-800 border-b border-gray-700 rounded-none">
        <TabsTrigger 
          value="html" 
          className="data-[state=active]:bg-gray-700 data-[state=active]:text-orange-400 hover:text-orange-300 transition-all duration-200"
        >
          HTML
        </TabsTrigger>
        <TabsTrigger 
          value="css" 
          className="data-[state=active]:bg-gray-700 data-[state=active]:text-blue-400 hover:text-blue-300 transition-all duration-200"
        >
          CSS
        </TabsTrigger>
        <TabsTrigger 
          value="js" 
          className="data-[state=active]:bg-gray-700 data-[state=active]:text-yellow-400 hover:text-yellow-300 transition-all duration-200"
        >
          JavaScript
        </TabsTrigger>
      </TabsList>
      
      <div className="flex-1 min-h-0">
        <TabsContent value="html" className="h-full m-0">
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            className="w-full h-full p-4 bg-gray-900 text-white font-mono text-sm resize-none border-none outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset transition-all duration-200"
            style={{ fontFamily: 'Monaco, Menlo, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' }}
            placeholder="Enter your HTML code here..."
          />
        </TabsContent>
        
        <TabsContent value="css" className="h-full m-0">
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            className="w-full h-full p-4 bg-gray-900 text-white font-mono text-sm resize-none border-none outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-200"
            style={{ fontFamily: 'Monaco, Menlo, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' }}
            placeholder="Enter your CSS code here..."
          />
        </TabsContent>
        
        <TabsContent value="js" className="h-full m-0">
          <textarea
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            className="w-full h-full p-4 bg-gray-900 text-white font-mono text-sm resize-none border-none outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset transition-all duration-200"
            style={{ fontFamily: 'Monaco, Menlo, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' }}
            placeholder="Enter your JavaScript code here..."
          />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default CodeTabs;
