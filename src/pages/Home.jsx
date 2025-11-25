import { useEffect, useState } from "react";
import { Link } from "react-router-dom";        // <-- ADD THIS
import { supabase } from "../supabase/client";
import ItemCard from "../components/ItemCard";
import heroBg from "../assets/hero-bg.jpg";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const introText = `ABM Multi Traders is a customized promotional item company that provides an extensive range of products for clients to promote their businesses. From budget-friendly to high-end items, we offer a wide range of products to meet your unique needs. Our commitment to quality and customer satisfaction sets us apart from our competitors, and we pride ourselves on delivering exceptional service to all of our clients.`;

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("items")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(12);

      if (error) {
        console.error("Error loading items", error);
      } else {
        setItems(data || []);
      }
      setLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <main className="mx-auto px-2 py-0">

      {/* HERO SECTION */}
      <section
        className="h-screen grid gap-4 md:grid-cols-2 items-start relative pt-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundColor: "rgba(0, 0, 0, 0.45)",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="pl-6 md:pl-8">
          <h1 className="text-2xl md:text-6xl font-bold mb-6 text-white">
            Quality Promotional Items Tailored to Showcase Your Brand
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed whitespace-pre-line">
            {introText}
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm border rounded-xl shadow-sm p-8 text-sm text-gray-700 pl-2 md:pl-10">
          <h2 className="font-semibold text-lg mb-3">What We Can Help You With</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Corporate giveaways and event merchandise</li>
            <li>Branded uniforms, apparel and accessories</li>
            <li>Office, stationery and desk items with your logo</li>
            <li>Customized drinkware, bags and travel items</li>
            <li>Seasonal, festive and executive gift solutions</li>
          </ul>
        </div>

        <button
          onClick={() =>
            document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-black rounded-full text-sm shadow hover:bg-gray-200 transition"
        >
          ↓ Scroll
        </button>
      </section>

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="mb-10 grid gap-6 md:grid-cols-2 items-center pt-14">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Expertise</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            At ABM Multi Traders, we specialize in providing customized promotional items
            that elevate your brand visibility.
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt="Promo Expertise"
          className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
        />
      </section>

      {/* SERVICES */}
      <section className="mb-12 grid gap-6 md:grid-cols-2 items-center">
        <img
          src="https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg"
          alt="Bags"
          className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
        />

        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Services</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
            Offering a wide variety of promotional items to suit any budget or need.
          </p>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md shadow hover:bg-gray-700">
            Browse Promo Items
          </button>
        </div>
      </section>

      {/* RECENT ITEMS SECTION */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Recently Added Items</h2>
        </div>

        {loading ? (
          <p className="text-sm text-gray-600">Loading items…</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-gray-600">
            No items found yet. Add products to your Supabase database and they will appear here.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {items
              .slice(0, 6)     // ONLY 6 MOST RECENT
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/category/${encodeURIComponent(item.category)}?itemId=${item.id}`}
                >
                  <ItemCard item={item} />
                </Link>
              ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
