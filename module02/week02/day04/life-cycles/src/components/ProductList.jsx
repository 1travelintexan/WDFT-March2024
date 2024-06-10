import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  handleDelete,
  currentUser,
  setCurrentUser,
}) => {
  // if (!products) {
  //   return <p>loading....</p>;
  // }

  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
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
