import { Routes, Route } from "react-router-dom";
import React from 'react';
import Search from "./pages/Search";

function App() {
  const JSON_list = require('./data/whc-sites-2021.json')

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search details={JSON_list} />} />
      </Routes>
    </div>
  );
}

export default App;
