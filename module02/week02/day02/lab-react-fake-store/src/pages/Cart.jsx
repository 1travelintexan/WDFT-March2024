import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const arr = [];
      try {
        const response = await axios("https://fakestoreapi.com/carts/1");
        const products = response.data.products;
        for (let i = 0; i < products.length; i++) {
          const productId = products[i].productId;
          const res = await fetchOneProduct(productId);
          arr.push(res);
        }
      } catch (error) {
        console.log(error);
      }
      setCart(arr);
    };
    fetchCart();
  }, []);

  const fetchOneProduct = async (id) => {
    try {
      const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {cart.map((oneProduct) => {
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
};
