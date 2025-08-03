import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Cog6ToothIcon className="h-8 w-8 text-gray-500" />
        <h1 className="text-3xl font-bold text-gray-900">Global Settings</h1>
      </div>
      
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Site Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="MoonCMS"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Site Description</label>
              <textarea 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                defaultValue="A modern content management system"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
              <input 
                type="color" 
                className="w-20 h-10 border border-gray-300 rounded cursor-pointer"
                defaultValue="#4287f5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
              <input 
                type="color" 
                className="w-20 h-10 border border-gray-300 rounded cursor-pointer"
                defaultValue="#0c1530"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
