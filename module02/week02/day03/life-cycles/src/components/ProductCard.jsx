import { Link, useLocation } from "react-router-dom";
const ProductCard = ({ product, handleDelete }) => {
  const something = useLocation();

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Link to={`/one-product/${product.id}`}>
        <div className="recipe-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ height: "100px" }}
          />
          <h5>{product.title}</h5>
          {something.pathname === "/something" ? (
            <button
              onClick={(event) => {
                handleDelete(event, product.id);
              }}
            >
              Delete
            </button>
          ) : null}
        </div>
      </Link>
      <Link to={`/one-product/update/${product.id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};
export default ProductCard;
