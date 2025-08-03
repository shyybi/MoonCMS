import React from 'react';
import { DocumentDuplicateIcon, PlusIcon } from '@heroicons/react/24/outline';

const Pages = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <DocumentDuplicateIcon className="h-8 w-8 text-green-500" />
          <h1 className="text-3xl font-bold text-gray-900">Pages</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          <PlusIcon className="h-5 w-5" />
          New Page
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Create and manage static pages for your website.</p>
        
        <div className="mt-6 space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">About Us</h3>
            <p className="text-sm text-gray-500">Last updated 1 week ago</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-gray-500">Last updated 2 weeks ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
