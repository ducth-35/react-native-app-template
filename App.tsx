import React from 'react';
import {Navigations} from './src/navigators';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const _queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <>
      <QueryClientProvider client={_queryClient}>
        <Navigations />
      </QueryClientProvider>
    </>
  );
}

export default App;
