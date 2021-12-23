import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Header } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
