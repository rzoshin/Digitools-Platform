import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetch("/productsData.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  const handleCheckOut = () => {
    setCartData([]);
    setSelectedIds([]);
    toast.success("Checkout successful!");
  };

  const data = {
    productsData,
    isCartOpen,
    setIsCartOpen,
    cartData,
    setCartData,
    selectedIds,
    setSelectedIds,
    handleCartOpen,
    handleCartClose,
    handleCheckOut,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataProvider;