import axios from "axios";
import useProducts from "./useProducts";

const useAxios = () => {
  const { setProducts, setLoading, setTotal } = useProducts();

  axios.defaults.baseURL = "https://dummyjson.com";

  const fetchProducts = (url) => {
    setLoading(true);

    setTimeout(async () => {
      try {
        const res = await axios(url);
        setTotal(res.data.total);
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return { fetchProducts };
};

export default useAxios;
