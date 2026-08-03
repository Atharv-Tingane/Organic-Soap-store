import ProductCard from "../products/ProductCard";
import products from "../../data/products";

function ProductGrid({ searchTerm, selectedCategory, sortOption }) {

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortOption) {
    case "low-high":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "a-z":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    default:
      break;
  }

  return (
    <>
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-80 items-center justify-center rounded-2xl bg-[#f8faf8] shadow-md">
          <p className="text-xl font-medium text-gray-500">
            No products found.
          </p>
        </div>
      )}
    </>
  );
}

export default ProductGrid;