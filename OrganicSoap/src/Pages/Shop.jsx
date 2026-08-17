import { useState } from "react";
import Reveal from "../components/common/Reveal";

import SearchBar from "../components/shop/SearchBar";
import Sidebar from "../components/shop/Sidebar";
import SortBar from "../components/shop/SortBar";
import ProductGrid from "../components/shop/ProductGrid";

import products from "../data/products";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");

  // Maximum price filter
  const [maxPrice, setMaxPrice] = useState(1000);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts];

  switch (sortOption) {
    case "low-high":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "a-z":
      sortedProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    default:
      break;
  }

  return (
    <section className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-4 py-16 sm:px-6 sm:py-20">

      <div className="mx-auto max-w-7xl">


        <div className="mb-10 text-center sm:mb-12">

          <Reveal>
            <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
              Our Collection
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-3 text-4xl font-bold text-[#173b2c] sm:text-5xl">
              Shop Our Products
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Thoughtfully crafted skincare essentials made with
              carefully selected natural ingredients.
            </p>
          </Reveal>

        </div>

        <div className="mb-6 sm:mb-8">

          <Reveal delay={300}>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </Reveal>

        </div>


        <Reveal delay={350}>

          <SortBar
            sortOption={sortOption}
            setSortOption={setSortOption}
            productCount={sortedProducts.length}
          />

        </Reveal>


        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-4 lg:gap-10">


          <div className="lg:col-span-1">

            <Reveal delay={400}>

              <Sidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />

            </Reveal>

          </div>


          <div className="lg:col-span-3">

            <ProductGrid products={sortedProducts} />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Shop;