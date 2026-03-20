import React from 'react';
import './css/App.scss';
import VaporwaveLayout from './layouts/VaporwaveLayout';
import Modal from './components/modal';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VaporwaveLayout />} >
          <Route index element={<Modal />} />
          <Route path="/about" element={<Modal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
