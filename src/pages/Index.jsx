
import React, { useState, useEffect } from 'react';
import { Search, User, Settings, Play, Code, Eye, Filter, X } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import CodeEditor from '../components/CodeEditor';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Default to closed on mobile
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('html');
  const [isMobile, setIsMobile] = useState(false);

  // Apply dark theme by default and handle mobile detection
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && sidebarOpen) {
        setSidebarOpen(false); // Close sidebar on mobile by default
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
        {/* Sidebar - responsive */}
        <Sidebar 
          isOpen={sidebarOpen}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          isMobile={isMobile}
        />

        {/* Main Content - responsive */}
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen && !isMobile ? 'ml-80' : 'ml-0'
        } ${sidebarOpen && isMobile ? 'pointer-events-none' : ''}`}>
          <div className="h-full flex flex-col xl:flex-row">
            {/* Video Section - responsive */}
            <div className={`${isMobile ? 'h-1/3' : 'xl:w-1/2'} p-3 md:p-6 border-r border-gray-900`}>
              <VideoPlayer />
            </div>

            {/* Code Editor Section - responsive */}
            <div className={`${isMobile ? 'h-2/3' : 'xl:w-1/2'} flex flex-col min-h-0`}>
              <CodeEditor 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </main>

        {/* Mobile overlay when sidebar is open */}
        {sidebarOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
