const ItemCard = ({ item }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col">
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.title}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="font-semibold text-sm mb-1 line-clamp-2">
          {item.title}
        </h2>
        {item.category && (
          <p className="text-[11px] text-indigo-700 font-medium mb-2">
            {item.category}
          </p>
        )}
        {item.description && (
          <p className="text-xs text-gray-600 line-clamp-3 mb-3">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
