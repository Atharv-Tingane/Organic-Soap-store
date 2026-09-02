import { Link } from "react-router-dom";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { productPrice } from "../../utils/product";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  if (!product) return null;
  const price = productPrice(product);
  const hasDiscount = product.discounted_price != null && Number(product.discounted_price) < Number(product.price);
  return <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl">
    <Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60 lg:h-72" /></Link>
    <div className="p-3 sm:p-5"><p className="truncate text-xs font-semibold uppercase tracking-[.15em] text-green-600">{product.category}</p><Link to={`/product/${product.id}`}><h3 className="mt-2 truncate text-lg font-bold text-[#173b2c]">{product.name}</h3></Link><div className="mt-3 flex items-center gap-1 text-yellow-500"><FiStar fill="currentColor" /><span className="ml-1 text-sm text-gray-500">{product.rating.toFixed(1)} ({product.reviewCount})</span></div><div className="mt-4 flex items-center gap-2"><span className="text-2xl font-extrabold text-green-700">₹{price.toFixed(0)}</span>{hasDiscount && <span className="text-sm text-gray-400 line-through">₹{Number(product.price).toFixed(0)}</span>}</div><button onClick={() => addToCart(product)} disabled={!product.inStock} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"><FiShoppingCart />{product.inStock ? "Add to Cart" : "Out of Stock"}</button></div>
  </div>;
}
export default ProductCard;
