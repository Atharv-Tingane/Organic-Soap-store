import { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import api, { getErrorMessage } from "../api/client";
import { normalizeProduct, productPrice } from "../utils/product";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);
const normalizeCart = (data) => (data?.items || []).filter((item) => item.product).map((item) => ({ ...normalizeProduct(item.product), quantity: item.quantity }));

export function CartProvider({ children }) {
  const { user, loading: authLoading } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadCart = async () => { if (!user) { setCart([]); return; } setLoading(true); try { const { data } = await api.get("/cart"); setCart(normalizeCart(data)); } catch (error) { toast.error(getErrorMessage(error)); } finally { setLoading(false); } };
  useEffect(() => { if (!authLoading) loadCart(); }, [user, authLoading]);
  const ensureUser = () => { if (!user) { toast.error("Please log in to manage your cart"); return false; } return true; };
  const addToCart = async (product, quantity = 1) => { if (!ensureUser()) return false; try { const { data } = await api.post("/cart/items", { productId: product.id || product._id, quantity }); setCart(normalizeCart(data)); toast.success("Added to cart"); return true; } catch (error) { toast.error(getErrorMessage(error)); return false; } };
  const updateQuantity = async (productId, quantity) => { if (!ensureUser() || quantity < 1) return; try { const { data } = await api.patch(`/cart/items/${productId}`, { quantity }); setCart(normalizeCart(data)); } catch (error) { toast.error(getErrorMessage(error)); } };
  const removeFromCart = async (productId) => { if (!ensureUser()) return; try { const { data } = await api.delete(`/cart/items/${productId}`); setCart(normalizeCart(data)); } catch (error) { toast.error(getErrorMessage(error)); } };
  const clearCart = async () => { if (!user) return; await api.delete("/cart"); setCart([]); };
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + productPrice(item) * item.quantity, 0), [cart]);
  return <CartContext.Provider value={{ cart, loading, cartCount, cartTotal, addToCart, updateQuantity, removeFromCart, clearCart, reloadCart: loadCart }}>{children}</CartContext.Provider>;
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart must be used inside CartProvider"); return context; }
