import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EssaysPage } from "./pages/EssaysPage";
import { EssayPage } from "./pages/EssayPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";
import { HowWeThinkPage } from "./pages/HowWeThinkPage";
import { CapitalDiligencePage } from "./pages/CapitalDiligencePage";
import { VentureStudioPage } from "./pages/VentureStudioPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/how-we-think" element={<HowWeThinkPage />} />
        <Route path="/capital-diligence" element={<CapitalDiligencePage />} />
        <Route path="/venture-studio" element={<VentureStudioPage />} />
        <Route path="/essays" element={<EssaysPage />} />
        <Route path="/essays/:slug" element={<EssayPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
