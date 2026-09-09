import React from 'react';
import { Navigations } from './src/navigators';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/lib/api/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigations />
    </QueryClientProvider>
  );
};

export default App;
