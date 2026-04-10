import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Mengimpor file CSS utama yang sudah berisi konfigurasi Tailwind CSS
import './index.css';

// ReactDOM.createRoot akan mencari elemen dengan id="root" di index.html
// dan mulai merender aplikasi React kita di dalamnya.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
