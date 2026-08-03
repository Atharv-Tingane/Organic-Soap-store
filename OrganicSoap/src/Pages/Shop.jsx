import { useState } from "react";

import SearchBar from "../components/shop/SearchBar";
import Sidebar from "../components/shop/Sidebar";
import SortBar from "../components/shop/SortBar";
import ProductGrid from "../components/shop/ProductGrid";

import products from "../data/products";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");

  // Count filtered products
  const filteredCount = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  }).length;

  return (
    <section className="bg-[#f8faf8] py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Shop
          </p>

          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            Discover Our Products
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Browse our handcrafted organic skincare collection made with
            natural ingredients.
          </p>
        </div>

        {/* Search */}

        <div className="mb-8">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        {/* Sort Bar */}

        <SortBar
          sortOption={sortOption}
          setSortOption={setSortOption}
          productCount={filteredCount}
        />

        {/* Sidebar + Products */}

        <div className="mt-8 grid gap-10 lg:grid-cols-4">

          <div className="lg:col-span-1">
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <div className="lg:col-span-3">
            <ProductGrid
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              sortOption={sortOption}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Shop;