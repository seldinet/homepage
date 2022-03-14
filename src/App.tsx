import { useEffect } from "react";
import i18n from "i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Price from './pages/price'

const KOREAN_LANGUAGE = ["ko", "ko_kr", "ko_KR"];

function App() {
  useEffect(() => {
    const language = window.navigator.language;
    const isKoreaLanguage = KOREAN_LANGUAGE.includes(language);

    i18n.changeLanguage(isKoreaLanguage ? "ko" : language);
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
