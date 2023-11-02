import { create } from "zustand";

const useProducts = create((set) => ({
  loading: false,
  products: [],
  skip: 0,
  total: 0,

  setLoading: (loading) => set({ loading }),
  setProducts: (products) => set({ products }),
  setSkip: (skip) => set({ skip }),
  setTotal: (total) => set({ total }),
}));

export default useProducts;
