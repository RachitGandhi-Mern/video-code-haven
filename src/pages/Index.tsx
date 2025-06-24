
import React, { useState, useEffect } from 'react';
import { Search, User, Settings, Play, Code, Eye, Filter, X } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import CodeEditor from '../components/CodeEditor';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('html');

  // Apply dark theme by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <Navigation 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex h-screen pt-16">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
          <div className="h-full flex flex-col lg:flex-row">
            {/* Video Section */}
            <div className="lg:w-1/2 p-6 border-r border-gray-900">
              <VideoPlayer />
            </div>

            {/* Code Editor Section */}
            <div className="lg:w-1/2 flex flex-col">
              <CodeEditor 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
