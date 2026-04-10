import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-[80%] mx-auto bg-base-100 py-6.5">
        <div className="">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button`"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
            DigiTools
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <FiShoppingCart />
          <a className="hover:cursor-pointer hover:text-[#9514FA]">Login</a>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-4 px-3 text-white font-semibold font-inter hover:shadow-sm hover:shadow-fuchsia-900">
            Get Started
          </button>
        </div>
      </div>
  );
};

export default Navbar;
