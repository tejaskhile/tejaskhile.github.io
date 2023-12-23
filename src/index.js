import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blogs from './components/Blogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     {/* <App /> */}
     <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/blogs" element={<Blogs />}/>
     </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);

