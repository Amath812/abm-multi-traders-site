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
    <nav
      className="bg-white border-b shadow-sm sticky top-0 z-20"
      style={{ height: "56px", "--nav-h": "56px" }}
    >
      <div className="max-w-7xl mx-auto px-1 h-full flex items-center justify-between min-w-0">
        
        {/* Logo + Name (allow shrink / truncate on small screens) */}
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <img
            src={logo}
            alt="ABM Logo"
            className="w-8 h-8 object-contain flex-shrink-0"
          />
          <span className="text-2xl font-bold tracking-tight text-blue-900 truncate max-w-[12rem] md:max-w-none">
            ABM Multi Traders
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-sm font-medium flex-wrap">
          <Link to="/" className="text-black hover:text-indigo-700">
            Home
          </Link>

          {/* Categories Dropdown (hover + keyboard/focus support) */}
          <div className="relative group focus-within:z-30">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              className="hover:text-indigo-700 flex items-center gap-1 focus:outline-none"
            >
              Categories <span aria-hidden>▾</span>
            </button>

            {/* Dropdown: visible on hover OR when focused (keyboard) */}
            <div
              role="menu"
              aria-label="Categories"
              className="
                absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg max-h-80 overflow-y-auto
                opacity-0 translate-y-1 scale-98 group-hover:opacity-100 group-focus-within:opacity-100
                group-hover:translate-y-0 group-focus-within:translate-y-0
                pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto
                transition duration-150 ease-in-out transform
              "
            >
              {categories.map((cat) => (
                <Link
                  key={cat}
                  role="menuitem"
                  to={`/category/${encodeURIComponent(cat)}`}
                  className="block px-4 py-2 text-sm hover:bg-indigo-50 focus:bg-indigo-50 focus:outline-none"
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
