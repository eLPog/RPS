import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import './index.css';
import App from './App';
import { Instruction } from './components/Instruction/Instruction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/" element={<App />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
