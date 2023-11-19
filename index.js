import React from 'react';
import './src/StworekShow.css';
import StworekShow from './src/StworekShow.js';
import  { createRoot }  from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StworekShow className="StworekShow" />);