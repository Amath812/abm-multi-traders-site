import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import ItemCard from "../components/ItemCard";

const Category = () => {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryName = decodeURIComponent(params.name || "");

  useEffect(() => {
    const fetchByCategory = async () => {
      if (!categoryName) return;
      setLoading(true);
      const { data, error } = await supabase
        .from("items")
        .select("*")
        .eq("category", categoryName)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading category items", error);
      } else {
        setItems(data || []);
      }
      setLoading(false);
    };

    fetchByCategory();
  }, [categoryName]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
        {categoryName}
      </h1>

      {loading ? (
        <p className="text-sm text-gray-600">Loading items…</p>
      ) : items.length === 0 ? (
        <p className="text-sm text-gray-600">
          No items found for this category yet. Add items in Supabase with
          the category set to exactly: <span className="font-mono">{categoryName}</span>.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Category;
