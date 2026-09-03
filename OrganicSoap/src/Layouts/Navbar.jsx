import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import products from "../data/products";

function Navbar() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  /* Close empty search when user scrolls */

  useEffect(() => {
    const handleScroll = () => {
      if (searchOpen && searchTerm.trim() === "") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchOpen, searchTerm]);


  /* Search */

  const searchResults =
    searchTerm.trim() === ""
      ? []
      : products.filter((product) =>
          product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleProductClick = (productId) => {
    setSearchOpen(false);
    setSearchTerm("");
    setMenuOpen(false);

    navigate(`/product/${productId}`);
  };


  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setSearchTerm("");
  };


  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">

      <nav
        className="
          relative mx-auto max-w-7xl
          rounded-2xl
          border border-white/60
          bg-white/45
          px-4 py-3
          shadow-[0_8px_40px_rgba(23,59,44,0.12)]
          backdrop-blur-xl
          backdrop-saturate-150
          sm:px-7 sm:py-4
        "
      >


        <div className="flex items-center justify-between">


          {/* LOGO */}

          <Link
  to="/"
  onClick={closeAll}
  className="shrink-0 text-xl font-extrabold tracking-tight text-green-700 sm:text-2xl"
>
  {user?.role === "admin" ? "OrganicSoap 🦋 Admin" : "OrganicSoap"}
</Link>
          



          <ul className="hidden items-center gap-8 md:flex">

            <li>
              <NavLink
                to="/"
                className="font-medium text-gray-700 transition hover:text-green-600"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className="font-medium text-gray-700 transition hover:text-green-600"
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/story"
                className="font-medium text-gray-700 transition hover:text-green-600"
              >
                Our Story
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="font-medium text-gray-700 transition hover:text-green-600"
              >
                Contact
              </NavLink>
            </li>

            {user?.role === "admin" && (
              <li>
                <NavLink
                  to="/admin"
                  className="font-medium text-gray-700 transition hover:text-green-600"
                >
                  Admin
                </NavLink>
              </li>
            )}

          </ul>



          <div className="flex items-center gap-1 sm:gap-3">


            {/* SEARCH */}

            <button
              onClick={() => {
                setSearchOpen((prev) => !prev);
                setMenuOpen(false);
              }}
              className="
                rounded-full p-2
                text-gray-700
                transition-all duration-200
                hover:bg-green-100
                hover:text-green-700
              "
              aria-label="Search"
            >
              {searchOpen ? (
                <FiX size={20} />
              ) : (
                <FiSearch size={20} />
              )}
            </button>


            {/* CART */}

            <Link
              to="/cart"
              onClick={closeAll}
              className="
                relative rounded-full p-2
                text-gray-700
                transition-all duration-200
                hover:bg-green-100
                hover:text-green-700
              "
              aria-label="Shopping cart"
            >
              <FiShoppingCart size={20} />

              {cartCount > 0 && (
                <span
                  className="
                    absolute -right-1 -top-1
                    flex h-5 min-w-5
                    items-center justify-center
                    rounded-full
                    bg-green-600
                    px-1
                    text-xs font-bold text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>


            {/* AUTH */}
            {!user ? (

              <Link
                to="/login"
                onClick={closeAll}
                className="
                  hidden rounded-xl
                  bg-green-600
                  px-5 py-2
                  font-medium text-white
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-green-700
                  hover:shadow-md
                  md:block
                "
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  logout();
                  closeAll();
                }}
                className="
                  hidden rounded-xl
                  bg-green-600
                  px-5 py-2
                  font-medium text-white
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-green-700
                  hover:shadow-md
                  md:block
                "
              >
                Logout
              </button>
            )}


            {/* MOBILE MENU */}

            <button
              onClick={() => {
                setMenuOpen((prev) => !prev);
                setSearchOpen(false);
                setSearchTerm("");
              }}
              className="
                rounded-full p-2
                text-gray-700
                transition-all duration-200
                hover:bg-green-100
                hover:text-green-700
                md:hidden
              "
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>

          </div>

        </div>


        {/* ================= SEARCH PANEL ================= */}

        {searchOpen && (
          <div className="absolute left-1 right-1 top-[calc(100%+10px)] z-50 sm:left-0 sm:right-0">

            <div
              className="
                overflow-hidden rounded-2xl
                border border-white/70
                bg-white/80
                p-3
                shadow-[0_15px_45px_rgba(23,59,44,0.15)]
                backdrop-blur-xl
                backdrop-saturate-150
                sm:p-4
              "
            >

              {/* SEARCH INPUT */}

              <div
                className="
                  flex items-center gap-3
                  rounded-xl
                  border border-green-100
                  bg-[#f5faf6]/90
                  px-4 py-3
                "
              >

                <FiSearch
                  size={20}
                  className="shrink-0 text-green-600"
                />

                <input
                  type="text"
                  autoFocus
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search products..."
                  className="
                    w-full
                    bg-transparent
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="
                      shrink-0
                      text-gray-400
                      transition
                      hover:text-gray-700
                    "
                    aria-label="Clear search"
                  >
                    <FiX size={18} />
                  </button>
                )}

              </div>


              {/* SEARCH RESULTS */}

              {searchTerm.trim() !== "" && (
                <div className="mt-3 max-h-[60vh] overflow-y-auto">

                  {searchResults.length > 0 ? (

                    <div className="space-y-1">

                      {searchResults.map((product) => {

                        const discount = product.discount || 0;

                        const discountedPrice =
                          product.price -
                          (product.price * discount) / 100;

                        return (
                          <button
                            key={product.id}
                            onClick={() =>
                              handleProductClick(product.id)
                            }
                            className="
                              flex w-full items-center gap-3
                              rounded-xl p-3
                              text-left
                              transition
                              hover:bg-green-50
                            "
                          >

                            <img
                              src={product.image}
                              alt={product.name}
                              className="
                                h-12 w-12
                                shrink-0
                                rounded-lg
                                object-cover
                                sm:h-14 sm:w-14
                              "
                            />

                            <div className="min-w-0 flex-1">

                              <p className="truncate font-semibold text-gray-800">
                                {product.name}
                              </p>

                              <p className="mt-1 text-sm text-green-700">

                                ₹{discountedPrice.toFixed(0)}

                                {discount > 0 && (
                                  <span className="ml-2 text-xs text-gray-400 line-through">
                                    ₹{product.price}
                                  </span>
                                )}

                              </p>

                            </div>

                          </button>
                        );
                      })}

                    </div>

                  ) : (

                    <div className="px-3 py-8 text-center">

                      <p className="font-semibold text-gray-700">
                        No products found
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        Try searching for another product.
                      </p>

                    </div>

                  )}

                </div>
              )}

            </div>

          </div>
        )}


        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (
          <div className="mt-4 border-t border-white/50 pt-4 md:hidden">

            <div
              className="
                flex flex-col gap-1
                rounded-2xl
                border border-white/60
                bg-white/35
                p-2
                backdrop-blur-lg
              "
            >

              <NavLink
                to="/"
                onClick={closeAll}
                className="
                  rounded-xl px-4 py-3
                  font-medium text-gray-700
                  transition
                  hover:bg-green-50
                  hover:text-green-700
                "
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={closeAll}
                className="
                  rounded-xl px-4 py-3
                  font-medium text-gray-700
                  transition
                  hover:bg-green-50
                  hover:text-green-700
                "
              >
                Shop
              </NavLink>

              <NavLink
                to="/story"
                onClick={closeAll}
                className="
                  rounded-xl px-4 py-3
                  font-medium text-gray-700
                  transition
                  hover:bg-green-50
                  hover:text-green-700
                "
              >
                Our Story
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeAll}
                className="
                  rounded-xl px-4 py-3
                  font-medium text-gray-700
                  transition
                  hover:bg-green-50
                  hover:text-green-700
                "
              >
                Contact
              </NavLink>

              {!user ? (
                <Link
                  to="/login"
                  onClick={closeAll}
                  className="
                    mt-2 rounded-xl bg-green-600 px-4 py-3
                    text-center font-semibold text-white transition
                    hover:bg-green-700
                  "
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    closeAll();
                  }}
                  className="
                    mt-2 rounded-xl bg-green-600 px-4 py-3
                    text-center font-semibold text-white transition
                    hover:bg-green-700
                  "
                >
                  Logout
                </button>
              )}

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;