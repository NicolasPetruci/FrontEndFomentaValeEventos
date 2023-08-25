import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'



const theme = extendTheme({
  colors: {
    cor: {
      P1: '#008177',
      P2: '#00a99d',
      P3: '#f7941d',
      S1: '#003b33',
      S2: '#005349',
      S3: '#f37021',
      S4: '#fdb913',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);
