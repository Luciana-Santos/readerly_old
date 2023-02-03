import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlossaryProvider from './store/GlossaryContext';
import TextProvider from './store/TextContext';
import ThemeProvider from './store/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TextProvider>
      <GlossaryProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </GlossaryProvider>
    </TextProvider>
  </React.StrictMode>
);
