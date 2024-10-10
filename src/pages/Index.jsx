import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CCTVInterface from '../components/CCTVInterface';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-900 text-white">
        <CCTVInterface />
      </div>
    </QueryClientProvider>
  );
};

export default Index;