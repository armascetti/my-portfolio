import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      </Route>
      <Route path="projects" element={<Projects />}>
        </ Route> 
      <Route path="contact" element={<Contact />}>
</Route>
<Route path="about" element={<App />}>
</Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);