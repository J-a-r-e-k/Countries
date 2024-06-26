import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import App from './App'
import './App.scss';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
//   {
//     path: '/abc',
//     element: <div>Hej</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
