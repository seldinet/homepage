import React, { useEffect } from "react";
import i18n from "i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

function App() {
  useEffect(() => {
    const language = window.navigator.language;
    i18n.changeLanguage(language);
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
