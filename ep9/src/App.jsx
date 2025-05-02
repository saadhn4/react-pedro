import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./Navbar";
import { useState, createContext } from "react";
export const userContext = createContext();
const App = () => {
  const [user, setUser] = useState("PedroTech");
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* instead of profile ill use menu */}
            <Route path="/menu" element={<Menu username={user} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </userContext.Provider>
    </div>
  );
};

export default App;
