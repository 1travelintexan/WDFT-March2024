import ProductCard from "./ProductCard";

const ProductList = ({ products, handleDelete }) => {
  if (products.length === 0) {
    return <p>loading....</p>;
  }

  return (
    <div>
      {products &&
        products.map((oneProduct) => {
          return (
            <ProductCard
              key={oneProduct.id}
              product={oneProduct}
              handleDelete={handleDelete}
            />
          );
        })}
    </div>
  );
};
export default ProductList;
