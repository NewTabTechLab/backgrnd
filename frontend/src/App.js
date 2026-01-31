import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { EssaysPage } from "./pages/EssaysPage";
import { EssayPage } from "./pages/EssayPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";
import { HowWeThinkPage } from "./pages/HowWeThinkPage";
import { CapitalDiligencePage } from "./pages/CapitalDiligencePage";
import { VentureStudioPage } from "./pages/VentureStudioPage";
import { AccessPage } from "./pages/AccessPage";
import { PrincipalsPage } from "./pages/PrincipalsPage";

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/how-we-think" element={<HowWeThinkPage />} />
        <Route path="/capital-diligence" element={<CapitalDiligencePage />} />
        <Route path="/venture-studio" element={<VentureStudioPage />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/principals" element={<PrincipalsPage />} />
        <Route path="/essays" element={<EssaysPage />} />
        <Route path="/essays/:slug" element={<EssayPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
