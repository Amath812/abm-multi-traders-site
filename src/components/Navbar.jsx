import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const categories = [
  "Apparel",
  "Drinkware",
  "Bags",
  "Office & Stationery",
  "Outdoor, Sports & Fitness",
  "Corporate & Executive Gifts",
  "Seasonal & Festive Items",
  "Safety & PP"
];

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-1 py-3 flex items-center justify-between">
        
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="ABM Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl font-bold tracking-tight text-blue-900">
            ABM Multi Traders
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-black hover:text-indigo-700">
            Home
          </Link>

          {/* Categories Dropdown */}
          <div className="relative group">
            <button className="hover:text-indigo-700 flex items-center gap-1">
              Categories <span>▾</span>
            </button>

            {/* Dropdown */}
            <div
              className="
                absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg max-h-80 overflow-y-auto
                opacity-0 group-hover:opacity-100 
                pointer-events-none group-hover:pointer-events-auto
                transition duration-150 ease-in-out
              "
            >
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${encodeURIComponent(cat)}`}
                  className="block px-4 py-2 text-sm hover:bg-indigo-50"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="hover:text-indigo-700">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
