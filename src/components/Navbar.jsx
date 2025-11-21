import { Link } from "react-router-dom";

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
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-indigo-700">
            ABM Multi Traders
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-700">
            Home
          </Link>

          <div className="relative group">
            <button className="hover:text-indigo-700 flex items-center gap-1">
              Categories
              <span>▾</span>
            </button>
            <div className="absolute hidden group-hover:block mt-2 bg-white border rounded shadow-lg w-64 max-h-80 overflow-y-auto">
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
