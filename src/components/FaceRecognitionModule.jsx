import React, { useState } from 'react';
import { Search, Upload, Clock, Camera } from 'lucide-react';

const FaceRecognitionModule = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-1/4 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Face Recognition</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search faces..."
            className="flex-1 bg-gray-700 text-white p-2 rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-blue-500 p-2 rounded">
            <Search className="w-5 h-5" />
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-gray-700 p-2 rounded flex items-center justify-center">
            <Upload className="w-4 h-4 mr-2" /> Upload
          </button>
          <button className="flex-1 bg-gray-700 p-2 rounded flex items-center justify-center">
            <Clock className="w-4 h-4 mr-2" /> Time
          </button>
          <button className="flex-1 bg-gray-700 p-2 rounded flex items-center justify-center">
            <Camera className="w-4 h-4 mr-2" /> Camera
          </button>
        </div>
        <div className="bg-gray-700 p-2 rounded">
          <h3 className="font-semibold mb-2">Recognized Faces</h3>
          {/* Placeholder for recognized faces list */}
          <div className="text-gray-400">No faces recognized yet</div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognitionModule;