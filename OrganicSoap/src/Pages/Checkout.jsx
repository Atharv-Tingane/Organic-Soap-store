import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheck, FiMapPin, FiShoppingBag } from "react-icons/fi";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import api, { getErrorMessage } from "../api/client";
import { productPrice } from "../utils/product";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: user?.name || "", phone: user?.phone || "", addressLine: "", city: "", state: "", pincode: "" });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    if (!user) { toast.error("Please log in before checkout"); navigate("/login", { state: { from: { pathname: "/checkout" } } }); return; }
    setSubmitting(true);
    try {
      await api.post("/orders", { items: cart.map((item) => ({ productId: item.id || item._id, quantity: item.quantity })), shippingAddress: form });
      await clearCart(); setPlaced(true); toast.success("Order placed successfully");
    } catch (error) { toast.error(getErrorMessage(error)); } finally { setSubmitting(false); }
  };
  if (placed) return <main className="min-h-[70vh] bg-[#f8fbf8] px-4 py-20 text-center"><div className="mx-auto max-w-lg rounded-3xl bg-white p-10 shadow-sm"><FiCheck className="mx-auto text-green-600" size={54} /><p className="mt-6 font-semibold uppercase tracking-[.2em] text-green-600">Order confirmed</p><h1 className="mt-3 text-4xl font-bold text-[#173b2c]">Thank you!</h1><p className="mt-4 text-gray-500">Your Cash on Delivery order has been placed.</p><Link to="/shop" className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white">Continue Shopping</Link></div></main>;
  if (!cart.length) return <main className="min-h-[70vh] bg-[#f8fbf8] px-4 py-20 text-center"><FiShoppingBag className="mx-auto text-green-700" size={48} /><h1 className="mt-6 text-3xl font-bold text-[#173b2c]">Your cart is empty</h1><Link to="/shop" className="mt-7 inline-flex items-center gap-2 text-green-700"><FiArrowLeft />Continue Shopping</Link></main>;
  return <main className="min-h-screen bg-[#f8fbf8] px-4 py-12"><div className="mx-auto max-w-6xl"><Link to="/cart" className="inline-flex items-center gap-2 text-green-700"><FiArrowLeft />Back to cart</Link><h1 className="mt-6 text-4xl font-bold text-[#173b2c]">Checkout</h1><div className="mt-8 grid gap-8 lg:grid-cols-3"><form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2"><div className="flex gap-3"><FiMapPin className="text-green-600" size={24} /><div><h2 className="text-2xl font-bold text-[#173b2c]">Delivery details</h2><p className="text-sm text-gray-500">Cash on Delivery</p></div></div><div className="mt-7 grid gap-4 sm:grid-cols-2">{[["name", "Full name"], ["phone", "Phone"], ["addressLine", "Address"], ["city", "City"], ["state", "State"], ["pincode", "Pincode"]].map(([name, label]) => <label key={name} className={name === "addressLine" ? "sm:col-span-2" : ""}><span className="text-sm font-semibold">{label}</span><input required name={name} value={form[name]} onChange={update} className="mt-2 w-full rounded-xl border p-3" /></label>)}</div><button disabled={submitting} className="mt-8 w-full rounded-xl bg-green-600 py-4 font-semibold text-white disabled:bg-gray-300">{submitting ? "Placing order…" : `Place COD order · ₹${cartTotal.toFixed(0)}`}</button></form><aside className="h-fit rounded-3xl bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-[#173b2c]">Your order</h2>{cart.map((item) => <div key={item.id || item._id} className="mt-5 flex justify-between gap-3 text-sm"><span>{item.name} × {item.quantity}</span><strong>₹{(productPrice(item) * item.quantity).toFixed(0)}</strong></div>)}<div className="my-5 border-t" /><div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-green-700">₹{cartTotal.toFixed(0)}</span></div></aside></div></div></main>;
}
