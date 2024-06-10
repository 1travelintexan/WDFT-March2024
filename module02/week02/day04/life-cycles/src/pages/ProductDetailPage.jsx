import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";

const ProductDetailsPage = () => {
  const [oneProduct, setOneProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/projects/${productId}`)
      .then((res) => res.json())
      .then((theOneProduct) => {
        setOneProduct(theOneProduct);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  if (!oneProduct) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <img
        src={oneProduct.thumbnail}
        alt={oneProduct.title}
        style={{ width: "70vw" }}
      />
      <h2>{oneProduct.title}</h2>
    </div>
  );
};
export default ProductDetailsPage;
