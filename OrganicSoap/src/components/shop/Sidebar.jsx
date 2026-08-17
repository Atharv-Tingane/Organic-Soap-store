import { useState } from "react";
import { FiChevronDown, FiSliders } from "react-icons/fi";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  const [open, setOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    setOpen(false);
  };

  return (
    <aside className="w-full">


      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex w-full items-center justify-between
          rounded-2xl border border-gray-100
          bg-white px-5 py-4
          font-semibold text-gray-800
          shadow-sm
          transition-all duration-300
          hover:shadow-md
          lg:hidden
        "
      >

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
            <FiSliders size={18} />
          </div>

          <span>Filters</span>

        </div>

        <FiChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>


      <div
        className={`
          mt-3 rounded-2xl bg-white p-6 shadow-md
          ${open ? "block" : "hidden"}
          lg:mt-0 lg:block
        `}
      >

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Filters
        </h2>



        <div className="mb-8">

          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Categories
          </h3>


          <div className="space-y-3">

            {/* ALL */}

            <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-green-50">

              <input
                type="radio"
                name="category"
                checked={selectedCategory === "All"}
                onChange={() => handleCategoryChange("All")}
                className="h-4 w-4 accent-green-600"
              />

              <span className="text-gray-700">
                All Products
              </span>

            </label>


            <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-green-50">

              <input
                type="radio"
                name="category"
                checked={selectedCategory === "Organic Soap"}
                onChange={() =>
                  handleCategoryChange("Organic Soap")
                }
                className="h-4 w-4 accent-green-600"
              />

              <span className="text-gray-700">
                Organic Soaps
              </span>

            </label>


            <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-green-50">

              <input
                type="radio"
                name="category"
                checked={selectedCategory === "Face Packs"}
                onChange={() =>
                  handleCategoryChange("Face Packs")
                }
                className="h-4 w-4 accent-green-600"
              />

              <span className="text-gray-700">
                Face Packs
              </span>

            </label>


            <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-green-50">

              <input
                type="radio"
                name="category"
                checked={selectedCategory === "Herbal Care"}
                onChange={() =>
                  handleCategoryChange("Herbal Care")
                }
                className="h-4 w-4 accent-green-600"
              />

              <span className="text-gray-700">
                Herbal Care
              </span>

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
            defaultValue="1000"
            className="w-full accent-green-600"
          />

          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>₹100</span>
            <span>₹1000</span>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;