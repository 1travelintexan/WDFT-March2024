import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductList from "./components/ProductList";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";
import { API_URL } from "./config";
import Spinner from "./components/Spinner";
import HomePage from "./pages/HomePage";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  console.log("api url is here...", API_URL);
  console.log(import.meta.env);
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
        const res = await fetch(`${API_URL}/projects`);
        const data = await res.json();
        console.log("products app.jsx", data);
        setProducts(data);
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

  if (!products.length) {
    return <Spinner />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/products"
          element={
            <ProductList
              products={products}
              handleDelete={handleDelete}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
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
      <Link to="/one-product/create">
        <button>Create a Product</button>
      </Link>
      <h1>This is a Footer</h1>
    </>
  );
}

export default App;
