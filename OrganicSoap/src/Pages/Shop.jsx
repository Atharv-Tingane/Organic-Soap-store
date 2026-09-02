import { useMemo, useState } from "react";
import SearchBar from "../components/shop/SearchBar";
import SortBar from "../components/shop/SortBar";
import ProductGrid from "../components/shop/ProductGrid";
import { useProducts } from "../context/ProductsContext";
import { productPrice } from "../utils/product";

function Shop() {
  const { products, loading } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const visibleProducts = useMemo(() => {
    const result = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return result.sort((a, b) => sortOption === "low-high" ? productPrice(a) - productPrice(b) : sortOption === "high-low" ? productPrice(b) - productPrice(a) : sortOption === "a-z" ? a.name.localeCompare(b.name) : 0);
  }, [products, searchTerm, sortOption]);
  return <section className="min-h-screen bg-linear-to-b from-[#f1faf4] via-[#f8fbf8] to-white px-4 py-16 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><p className="font-semibold uppercase tracking-[.3em] text-green-600">Our Collection</p><h1 className="mt-3 text-4xl font-bold text-[#173b2c] sm:text-5xl">Shop Our Products</h1><p className="mt-4 text-gray-500">Thoughtfully crafted skincare essentials made with natural ingredients.</p><div className="mt-8"><SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></div><div className="mt-6"><SortBar sortOption={sortOption} setSortOption={setSortOption} productCount={visibleProducts.length} /></div>{loading ? <p className="py-20 text-center text-gray-500">Loading products…</p> : <ProductGrid products={visibleProducts} />}</div></section>;
}
export default Shop;
