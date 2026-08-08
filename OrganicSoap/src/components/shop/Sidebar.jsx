function Sidebar({ selectedCategory, setSelectedCategory })  {
  return (
    <aside className="rounded-2xl bg-white p-6 shadow-md">

      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Filters
      </h2>


    <div className="mb-8">
  <h3 className="mb-4 text-lg font-semibold text-gray-800">
    Categories
  </h3>

  <div className="space-y-3">

    <label className="flex  items-center gap-3">
      <input
        type="radio"
        name="category"
        checked={selectedCategory === "All"}
        onChange={() => setSelectedCategory("All")}
      />
      All Products
    </label>

    <label className="flex items-center gap-3">
      <input
        type="radio"
        name="category"
        checked={selectedCategory === "Organic Soap"}
        onChange={() => setSelectedCategory("Organic Soap")}
      />
      Organic Soaps
    </label>

    <label className="flex  items-center gap-3">
      <input
        type="radio"
        name="category"
        checked={selectedCategory === "Face Packs"}
        onChange={() => setSelectedCategory("Face Packs")}
      />
      Face Packs
    </label>

    <label className="flex  items-center gap-3">
      <input
        type="radio"
        name="category"
        checked={selectedCategory === "Herbal Care"}
        onChange={() => setSelectedCategory("Herbal Care")}
      />
      Herbal Care
    </label>

  </div>
</div>


      <div>

        <h3 className="mb-4 text-lg font-semibold text-gray-800">
          Price Range
        </h3>

        <input
          type="range"
          min="100"
          max="1000"
          className="w-full accent-green-600"
        />

        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>₹100</span>
          <span>₹1000</span>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;