import React from 'react';
import { MapPin } from 'lucide-react';

const FaceRouteModule = () => {
  return (
    <div className="w-1/4 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Face Route</h2>
      <div className="space-y-4">
        <div className="bg-gray-700 p-2 rounded">
          <h3 className="font-semibold mb-2">Current Position</h3>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Office - Camera 3</span>
          </div>
        </div>
        <div className="bg-gray-700 p-2 rounded h-64">
          <h3 className="font-semibold mb-2">Building Map</h3>
          {/* Placeholder for building map */}
          <div className="bg-gray-600 w-full h-48 flex items-center justify-center">
            Building Map
          </div>
        </div>
        <div className="bg-gray-700 p-2 rounded">
          <h3 className="font-semibold mb-2">Route History</h3>
          {/* Placeholder for route history */}
          <ul className="text-sm">
            <li>14:25 - Entrance</li>
            <li>14:27 - Corridor</li>
            <li>14:30 - Office</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaceRouteModule;