import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FaMoon, FaSun, FaShoppingCart, FaUser } from "react-icons/fa";

export const Navbar = () => {
    const { cart } = useCart();
    const total = cart.length;

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Swift-Shop
            </Link>

            {/* Middle - Search bar (optional) */}
            {/* <input
        type="text"
        placeholder="Search products..."
        className="hidden md:block px-3 py-2 rounded-md border dark:bg-gray-800 dark:text-white"
      /> */}

            {/* Right Side */}
            <div className="flex items-center gap-4">
                {/* Cart Icon */}
                <Link to="/cart" className="relative text-xl text-gray-600 dark:text-gray-300">
                    <FaShoppingCart />
                    {total > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                            {total}
                        </span>
                    )}
                </Link>

                {/* Profile / Auth */}
                <Link to="/login" className="text-xl text-gray-600 dark:text-gray-300">
                    <FaUser />
                </Link>
            </div>
        </nav>
    );
};
