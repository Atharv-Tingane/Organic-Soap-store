function SortBar({ sortOption, setSortOption, productCount }) {
  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-md sm:flex-row sm:items-center">

      <p className="text-gray-600">
        Showing{" "}
        <span className="font-semibold text-green-600">
          {productCount}
        </span>{" "}
        products
      </p>

      <div className="flex items-center gap-3">

        <label className="font-medium text-gray-700">
          Sort By:
        </label>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-green-500"
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="a-z">Name: A → Z</option>
        </select>

      </div>

    </div>
  );
}

export default SortBar;