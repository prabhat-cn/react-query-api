import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReactQueryCacheProvider, QueryClientProvider } from 'react-query'

import {queryCache, queryClient} from './reactQuery'

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

