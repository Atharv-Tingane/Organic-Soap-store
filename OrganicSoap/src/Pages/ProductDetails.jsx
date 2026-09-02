import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiShoppingCart, FiStar } from "react-icons/fi";
import api, { getErrorMessage } from "../api/client";
import { normalizeProduct, productPrice } from "../utils/product";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams(); const { addToCart } = useCart(); const [product, setProduct] = useState(null); const [quantity, setQuantity] = useState(1); const [error, setError] = useState("");
  useEffect(() => { api.get(`/products/${id}`).then(({ data }) => setProduct(normalizeProduct(data))).catch((err) => setError(getErrorMessage(err))); }, [id]);
  if (error) return <main className="p-16 text-center"><p>{error}</p><Link className="text-green-700" to="/shop">Back to shop</Link></main>;
  if (!product) return <main className="p-16 text-center">Loading product…</main>;
  const price = productPrice(product);
  return <main className="min-h-screen bg-[#f8fbf8] px-4 py-12"><div className="mx-auto max-w-6xl"><Link to="/shop" className="inline-flex items-center gap-2 text-green-700"><FiArrowLeft />Back to shop</Link><div className="mt-8 grid gap-10 rounded-3xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10"><img src={product.image} alt={product.name} className="h-96 w-full rounded-2xl object-cover" /><div><p className="font-semibold uppercase tracking-[.2em] text-green-600">{product.category}</p><h1 className="mt-3 text-4xl font-bold text-[#173b2c]">{product.name}</h1><p className="mt-4 flex items-center gap-2 text-yellow-500"><FiStar fill="currentColor" /> <span className="text-gray-600">{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span></p><p className="mt-5 text-3xl font-bold text-green-700">₹{price.toFixed(0)}</p><p className="mt-6 leading-7 text-gray-600">{product.description}</p><div className="mt-7 flex items-center gap-4"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="rounded-lg border px-4 py-2">−</button><span>{quantity}</span><button onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))} className="rounded-lg border px-4 py-2">+</button></div><button disabled={!product.inStock} onClick={() => addToCart(product, quantity)} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white disabled:bg-gray-300"><FiShoppingCart />{product.inStock ? "Add to Cart" : "Out of Stock"}</button></div></div></div></main>;
}
