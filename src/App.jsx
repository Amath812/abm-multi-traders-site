import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Category from "./pages/Category.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:name" element={<Category />} />
          </Routes>
        </div>
        <footer className="border-t bg-white mt-10">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 flex justify-between">
            <span>© {new Date().getFullYear()} ABM Multi Traders. All rights reserved.</span>
            <span>Promotional Items & Corporate Gifts</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
