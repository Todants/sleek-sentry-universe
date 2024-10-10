import React from 'react';
import { Maximize2, Settings } from 'lucide-react';

const VideoStream = ({ name, time, status }) => (
  <div className="relative bg-gray-800 rounded-lg overflow-hidden">
    <div className="absolute top-2 left-2 bg-black bg-opacity-50 p-1 rounded text-sm">
      {name}
    </div>
    <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded text-sm">
      {time}
    </div>
    <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 p-1 rounded text-sm">
      {status}
    </div>
    <div className="absolute bottom-2 right-2 space-x-2">
      <button className="bg-black bg-opacity-50 p-1 rounded">
        <Maximize2 className="w-4 h-4" />
      </button>
      <button className="bg-black bg-opacity-50 p-1 rounded">
        <Settings className="w-4 h-4" />
      </button>
    </div>
    {/* Placeholder for video stream */}
    <div className="bg-gray-700 w-full h-48 flex items-center justify-center">
      Video Stream
    </div>
  </div>
);

const VideoStreams = () => {
  const streams = [
    { name: 'Stairs', time: '14:30:22', status: 'Live' },
    { name: 'Corridor', time: '14:30:23', status: 'Live' },
    { name: 'Office', time: '14:30:21', status: 'Live' },
    { name: 'Entrance', time: '14:30:24', status: 'Live' },
  ];

  return (
    <div className="flex-1 grid grid-cols-2 gap-4">
      {streams.map((stream, index) => (
        <VideoStream key={index} {...stream} />
      ))}
    </div>
  );
};

export default VideoStreams;