// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryMenu from './components/CategoryMenu';

function App() {
  return (
    <Router>
      <div>
        <CategoryMenu />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
