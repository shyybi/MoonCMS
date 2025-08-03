import React from 'react';
import { TagIcon, PlusIcon } from '@heroicons/react/24/outline';

const Tags = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <TagIcon className="h-8 w-8 text-purple-500" />
          <h1 className="text-3xl font-bold text-gray-900">Tags</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          <PlusIcon className="h-5 w-5" />
          New Tag
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Organize your content with tags and categories.</p>
        
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Web Development</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tutorial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
