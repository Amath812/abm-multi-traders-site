import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import ItemCard from "../components/ItemCard";

const Category = () => {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // for pop-up image
  const [selectedImage, setSelectedImage] = useState(null);

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
        console.log("Fetched items:", data);
        setItems(data || []);
      }
      setLoading(false);
    };

    fetchByCategory();
  }, [categoryName]);

  // resolve image URL safely: supports absolute URLs or stored path strings
  const resolveImageUrl = (imageField) => {
    if (!imageField) return null;
    // if it's already a full URL
    if (typeof imageField === "string" && imageField.startsWith("http")) {
      return imageField;
    }
    // if the item stores an object or array, try common fields
    if (typeof imageField === "object") {
      // try common patterns
      return imageField.url || imageField.path || imageField[0]?.url || null;
    }
    // fallback: return string as-is (maybe it's a public path)
    return imageField;
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
        {categoryName}
      </h1>

      {loading ? (
        <p className="text-sm text-gray-600">Loading items…</p>
      ) : items.length === 0 ? (
        <p className="text-sm text-gray-600">
          No items found for this category yet.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => {
            const imgUrl = resolveImageUrl(item.image ?? item.image_url ?? item.thumbnail);

            return (
              // use a button so clicks reliably work; keep accessibility
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  console.log("Clicked item:", item.id, "imgUrl:", imgUrl);
                  if (!imgUrl) {
                    // debug helper
                    console.warn("No image URL for item", item.id, item);
                    return;
                  }
                  setSelectedImage(imgUrl);
                }}
                className="text-left p-0 bg-transparent border-0"
                aria-label={`Open image of ${item.name || "item"}`}
              >
                <ItemCard item={item} />
              </button>
            );
          })}
        </div>
      )}

      {/* POPUP MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative p-2 bg-white rounded-lg shadow-lg max-w-3xl w-[90%] md:w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-3 -right-3 bg-white text-black rounded-full px-3 py-1 shadow"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Item"
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
              onError={(e) => {
                console.error("Modal image load error for src:", selectedImage);
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Category;
