import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import ItemCard from "../components/ItemCard";

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
    <main className="max-w-6xl mx-auto px-4 py-8">

      {/* ================================
          FULL-SCREEN HERO SECTION
      ================================= */}
      <section className="h-screen grid gap-6 md:grid-cols-2 items-center relative">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Quality Promotional Items Tailored to Showcase Your Brand
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
            {introText}
          </p>
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-5 text-sm text-gray-700">
          <h2 className="font-semibold text-lg mb-3">What We Can Help You With</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Corporate giveaways and event merchandise</li>
            <li>Branded uniforms, apparel and accessories</li>
            <li>Office, stationery and desk items with your logo</li>
            <li>Customized drinkware, bags and travel items</li>
            <li>Seasonal, festive and executive gift solutions</li>
          </ul>
        </div>

        {/* Scroll Button */}
        <button
          onClick={() =>
            document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-black text-white rounded-full text-sm shadow hover:bg-gray-700 transition"
        >
          ↓ Scroll
        </button>
      </section>

      {/* =====================================================
          EXPERTISE SECTION (scroll target)
      ====================================================== */}
      <section id="expertise" className="mb-10 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Expertise</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            At ABM Multi Traders, we specialize in providing customized promotional items
            that elevate your brand visibility. With a wide selection of products ranging
            from budget-friendly to premium options, we tailor solutions to meet your 
            business needs and marketing goals.
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt="Promo Expertise"
          className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
        />
      </section>

      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}
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

      {/* =====================================================
          RECENT ITEMS SECTION
      ====================================================== */}
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
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
