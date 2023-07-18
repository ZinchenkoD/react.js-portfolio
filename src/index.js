import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css'
import Main from './components/main/Main'
import About from './components/about/About'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([
    <Main />,
    <About />
]);
