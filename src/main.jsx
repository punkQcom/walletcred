//Main.jsx
//import React from 'react'
//import ReactDOM from 'react-dom/client' //'react-dom/client'
//import App from './App.jsx'
//import './index.css'

//kokeillaan valikkoa
//import { BrowserRouter } from 'react-router-dom';


 // ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
 // <App />
 // </React.StrictMode>,
 // )

//koitetaan valikkoa
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <BrowserRouter>
//    <App />
//  </BrowserRouter>
//);


//Ylläolevat toimii tähän saakka poistot:
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Create a root using createRoot and render your app inside it
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
