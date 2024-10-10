import React from 'react';
import FaceRecognitionModule from './FaceRecognitionModule';
import VideoStreams from './VideoStreams';
import FaceRouteModule from './FaceRouteModule';
import SettingsAndStats from './SettingsAndStats';

const CCTVInterface = () => {
  return (
    <div className="flex flex-col h-screen p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">CCTV Surveillance System</h1>
      <div className="flex flex-1 space-x-4">
        <FaceRecognitionModule />
        <div className="flex-1 flex flex-col">
          <VideoStreams />
          <SettingsAndStats />
        </div>
        <FaceRouteModule />
      </div>
    </div>
  );
};

export default CCTVInterface;