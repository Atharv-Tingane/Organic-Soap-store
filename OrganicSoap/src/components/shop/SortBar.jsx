function SortBar({ sortOption, setSortOption, productCount }) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">

      <p className="text-sm text-gray-600 sm:text-base">
        Showing{" "}
        <span className="font-semibold text-green-600">
          {productCount}
        </span>{" "}
        {productCount === 1 ? "product" : "products"}
      </p>


      <div className="flex w-full items-center gap-3 sm:w-auto">

        <label
          htmlFor="sort-products"
          className="shrink-0 text-sm font-medium text-gray-700"
        >
          Sort By:
        </label>

        <select
          id="sort-products"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="
            w-full
            rounded-xl
            border border-gray-200
            bg-white
            px-3 py-2.5
            text-sm text-gray-700
            outline-none
            transition
            focus:border-green-500
            focus:ring-2
            focus:ring-green-100
            sm:w-auto
            sm:min-w-48
          "
        >
          <option value="featured">
            Featured
          </option>

          <option value="low-high">
            Price: Low → High
          </option>

          <option value="high-low">
            Price: High → Low
          </option>

          <option value="a-z">
            Name: A → Z
          </option>
        </select>

      </div>

    </div>
  );
}

export default SortBar;