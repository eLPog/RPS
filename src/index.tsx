import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './index.css';
import App from './App';
import { Instruction } from './components/Instruction/Instruction';
import { AppHistory } from './components/AppHistory/Main/AppHistory';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

// version without TS: const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/versions" element={<AppHistory />} />
        <Route path="/" element={<App />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
