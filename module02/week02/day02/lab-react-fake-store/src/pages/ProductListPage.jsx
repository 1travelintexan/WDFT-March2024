import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("here are the products", data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((oneProduct) => {
        return (
          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
            <div className="product-card">
              <img
                src={oneProduct.image}
                alt={oneProduct.title}
                style={{ height: "100px" }}
              />
              <h4>{oneProduct.title}</h4>
              <h4>{oneProduct.category}</h4>
              <h4>${oneProduct.price}</h4>
              <h4>{oneProduct.description}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
