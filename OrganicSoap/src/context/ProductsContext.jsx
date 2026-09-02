import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/client";
import { normalizeProduct } from "../utils/product";

const ProductsContext = createContext(null);
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadProducts = async () => { setLoading(true); try { const { data } = await api.get("/products/all", { params: { active: true, limit: 100 } }); setProducts((data.products || []).map(normalizeProduct)); } finally { setLoading(false); } };
  useEffect(() => { loadProducts(); }, []);
  return <ProductsContext.Provider value={{ products, loading, reloadProducts: loadProducts }}>{children}</ProductsContext.Provider>;
}
export function useProducts() { const context = useContext(ProductsContext); if (!context) throw new Error("useProducts must be used inside ProductsProvider"); return context; }
