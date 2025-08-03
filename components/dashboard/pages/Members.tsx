import React from 'react';
import { UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';

const Members = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <UserGroupIcon className="h-8 w-8 text-orange-500" />
          <h1 className="text-3xl font-bold text-gray-900">Members</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
          <PlusIcon className="h-5 w-5" />
          Invite Member
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Manage team members and their permissions.</p>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500">Administrator</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Active</span>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                JS
              </div>
              <div>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-sm text-gray-500">Editor</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
