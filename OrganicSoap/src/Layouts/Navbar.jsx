import { Link, NavLink } from "react-router-dom";
import {
  FiShoppingCart,
  FiSearch,
  FiMenu,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
   <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white/70 px-7 py-4 shadow-lg backdrop-blur-md">

 
        <Link
          to="/"
          className="text-2xl font-extrabold text-green-700"
        >
          OrganicSoap
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
              to="/"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              Our Story
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              Contact
            </NavLink>
          </li>
        </ul>

      
        <div className="flex items-center gap-4">

          <button className="rounded-full p-2 transition hover:bg-green-100">
            <FiSearch size={20} />
          </button>

          <Link
            to="/cart"
            className="relative rounded-full p-2 transition hover:bg-green-100"
          >
            <FiShoppingCart size={20} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="hidden rounded-xl bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700 md:block"
          >
            Login
          </Link>

          <button className="rounded-full p-2 transition hover:bg-green-100 md:hidden">
            <FiMenu size={24} />
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;