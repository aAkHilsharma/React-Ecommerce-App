import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import useProducts from "./hooks/useProducts";
import useAxios from "./hooks/useAxios";

export default function App() {
  const { skip } = useProducts();
  const { fetchProducts } = useAxios();

  useEffect(() => {
    fetchProducts(`/products?limit=6&skip=${skip}`);
  }, [skip]);

  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
}
