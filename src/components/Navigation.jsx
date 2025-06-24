
import React from 'react';
import { Search, User, Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navigation = ({
  searchQuery,
  setSearchQuery,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-gray-900"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          <div className="flex items-center space-x-2">
            <Code className="text-blue-500" size={24} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DevLearn
            </span>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search videos, courses, tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-950 border-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="border-gray-800 text-white hover:bg-gray-900">
            Login
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white hover:bg-gray-900 rounded-full p-2"
          >
            <User size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
