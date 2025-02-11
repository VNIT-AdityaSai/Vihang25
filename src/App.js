import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Clubs from "./components/Clubs";
import Sponsors from "./components/Sponsors";
import Organizers from "./components/Organizers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThunderStrikers from "./components/thunderStrikers/ThunderStrikers";
import TerraTitans from "./components/terraTitans/TerraTitans"; 
import KineticKairos from "./components/kineticKairos/KineticKairos";
import Events from "./components/Events"; 
import FieryPhoenix from "./components/fieryPhoenix/FieryPhoenix";
import VerdantMavericks from "./components/verdantMavericks/VerdantMavericks"

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Vihang 2025",
      "/terra-titans": "Terra Titans",
      "/thunder-strikers": "Thunder Strikers",
      "/fiery-phoenix": "Fiery Phoenix",
      "/verdant-mavericks": "Verdant Mavericks",
      "/kinetic-kairos": "Kinetic Kairos",
      "/events": "Events",
    };

    document.title = titles[location.pathname] || "Vihang 2025";
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <PageTitleUpdater />
      <div className="bg-gray-100 text-gray-900">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Gallery />
                <Clubs />
                <Sponsors />
                <Organizers />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/terra-titans" element={<TerraTitans />} />
          <Route path="/thunder-strikers" element={<ThunderStrikers />} />
          <Route path="/kinetic-kairos" element={<KineticKairos />} />
          <Route path="/fiery-phoenix" element={<FieryPhoenix />} />
          <Route path="/verdant-mavericks" element={<VerdantMavericks />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
