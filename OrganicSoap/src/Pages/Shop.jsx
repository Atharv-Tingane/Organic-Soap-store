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

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
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
    <section className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-6 py-20">

      <div className="mx-auto max-w-7xl">


        <div className="mb-12 text-center">

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
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Thoughtfully crafted skincare essentials made with
              carefully selected natural ingredients.
            </p>
          </Reveal>

        </div>



        <div className="mb-8">

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

        <div className="mt-8 grid gap-10 lg:grid-cols-4">


          <div className="lg:col-span-1">

            <Reveal delay={400}>

              <Sidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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