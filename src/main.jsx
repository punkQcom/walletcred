//Main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client' //'react-dom/client' for Webbrowsers
import App from './App.jsx'
import './index.css'

//kokeillaan valikkoa
import { BrowserRouter } from 'react-router-dom';


 // ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
 // <App />
 // </React.StrictMode>,
 // )

//koitetaan valikkoa
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

