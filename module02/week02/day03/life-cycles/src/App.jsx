import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductList from "./components/ProductList";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const fetchRecipes = () => {
    //   fetch("https://dummyjson.com/recipes")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("here is the actual data", data.recipes);
    //       setRecipes(data.recipes);
    //     })
    //     .catch((err) => console.log(err));
    // };
    const fetchProductsAsync = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log("products app.jsx", data);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductsAsync();
  }, []);

  function handleDelete(event, productId) {
    event.preventDefault();
    const filteredProducts = products.filter((oneProduct) => {
      if (productId !== oneProduct.id) {
        return true;
      }
    });
    setProducts(filteredProducts);
  }
  return (
    <>
      <h1>Use Effect Day!</h1>
      <Link to="/one-product/create">
        <button>Create a Product</button>
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList products={products} handleDelete={handleDelete} />
          }
        />
        <Route path="/one-product/:productId" element={<ProductDetailPage />} />
        <Route path="/one-product/create" element={<CreateProduct />} />
        <Route
          path="/one-product/update/:productId"
          element={<UpdateProduct />}
        />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <h1>This is a Footer</h1>
    </>
  );
}

export default App;
