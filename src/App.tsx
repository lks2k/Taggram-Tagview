import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query'
import { THEME, GlobalStyle } from './constants'
import Post from './pages/Post'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retryOnMount: false,
      retry: 0,
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
       <QueryClientProvider client={queryClient}>
          <GlobalStyle />
            <Post/>
       </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
