import React from "react";
import  App  from './App'
import './index.css';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
