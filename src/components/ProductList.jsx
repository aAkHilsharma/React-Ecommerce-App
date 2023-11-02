import useProducts from "../hooks/useProducts";
import Loading from "./Loading";
import ProductCard from "./ProductCard";
import { Pagination } from "antd";

const ProductList = () => {
  const { products, skip, setSkip, total, loading } = useProducts();

  const handlePaginationChange = (page) => {
    const newSkip = (page - 1) * 6;
    setSkip(newSkip);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-2">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-auto">
        {loading ? (
          <Loading item={6} />
        ) : (
          products?.map((product) => (
            <div key={product.id}>
              <ProductCard
                title={product.title}
                image={product.images[0]}
                price={product.price}
                description={product.description}
                category={product.category}
              />
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center mt-9 text-xs font-semibold">
        <Pagination
          current={skip / 6 + 1}
          total={total}
          pageSize={6}
          showSizeChanger={false}
          onChange={handlePaginationChange}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default ProductList;
