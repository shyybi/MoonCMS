import React from 'react';
import { DocumentTextIcon, PlusIcon } from '@heroicons/react/24/outline';

const Posts = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <DocumentTextIcon className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <PlusIcon className="h-5 w-5" />
          New Post
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Manage your blog posts here. Create, edit, and publish content.</p>
        
        <div className="mt-6 space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">Sample Post</h3>
            <p className="text-sm text-gray-500">Published 2 days ago</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold">Draft Post</h3>
            <p className="text-sm text-gray-500">Last edited 1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
