
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
  );
};

export default CodeTabs;
