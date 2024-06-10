import { Link } from "react-router-dom";

const ProductCard = ({ product, handleDelete }) => {
  return (
    <div>
      <Link to={`/one-product/${product.id}`}>
        <div className="recipe-card">
          <h5>{product.title}</h5>
          <button
            onClick={(event) => {
              handleDelete(event, product.id);
            }}
          >
            Delete
          </button>
        </div>
      </Link>
      <Link to={`/one-product/update/${product.id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};
export default ProductCard;
