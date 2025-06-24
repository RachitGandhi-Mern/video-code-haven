
import React from 'react';
import { ChevronDown, Filter, Hash, Play, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  selectedLanguage, 
  setSelectedLanguage 
}) => {
  const languages = [
    { name: 'JavaScript', count: 245, color: 'bg-yellow-500' },
    { name: 'React', count: 189, color: 'bg-blue-500' },
    { name: 'Python', count: 156, color: 'bg-green-500' },
    { name: 'CSS', count: 134, color: 'bg-purple-500' },
    { name: 'HTML', count: 98, color: 'bg-orange-500' },
    { name: 'Node.js', count: 87, color: 'bg-green-600' },
    { name: 'TypeScript', count: 76, color: 'bg-blue-600' },
  ];

  const channels = [
    { name: 'Web Dev Simplified', videos: 45 },
    { name: 'Traversy Media', videos: 38 },
    { name: 'The Net Ninja', videos: 52 },
    { name: 'Academind', videos: 29 },
  ];

  const playlists = [
    { name: 'React Fundamentals', videos: 12 },
    { name: 'JavaScript ES6+', videos: 18 },
    { name: 'CSS Grid & Flexbox', videos: 8 },
    { name: 'Node.js Backend', videos: 15 },
  ];

  if (!isOpen) return null;

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto z-40">
      <div className="p-6">
        {/* Filter Header */}
        <div className="flex items-center space-x-2 mb-6">
          <Filter size={20} className="text-blue-500" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Programming Languages
          </h3>
          <div className="space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.name}
                onClick={() => setSelectedLanguage(lang.name.toLowerCase())}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-gray-800 ${
                  selectedLanguage === lang.name.toLowerCase() 
                    ? 'bg-blue-900/30 border border-blue-500/30' 
                    : 'bg-gray-800/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${lang.color}`} />
                  <span className="text-sm font-medium">{lang.name}</span>
                </div>
                <span className="text-xs text-gray-400">{lang.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Channels */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Channels
          </h3>
          <div className="space-y-2">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <User size={16} className="text-gray-400" />
                  <span className="text-sm">{channel.name}</span>
                </div>
                <span className="text-xs text-gray-400">{channel.videos}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Playlists */}
        <div>
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Playlists
          </h3>
          <div className="space-y-2">
            {playlists.map((playlist) => (
              <div
                key={playlist.name}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <Hash size={16} className="text-gray-400" />
                  <span className="text-sm">{playlist.name}</span>
                </div>
                <span className="text-xs text-gray-400">{playlist.videos}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
