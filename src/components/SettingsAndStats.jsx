import React from 'react';
import { Camera, User, Download, Bell } from 'lucide-react';

const SettingsAndStats = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            <span>4 Active Cameras</span>
          </div>
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span>12 Recognized Faces</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 p-2 rounded flex items-center">
            <Download className="w-4 h-4 mr-2" /> Download Report
          </button>
          <button className="bg-red-500 p-2 rounded">
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsAndStats;