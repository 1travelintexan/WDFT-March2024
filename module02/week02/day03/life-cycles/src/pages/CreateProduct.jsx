import axios from "axios";
import { useState } from "react";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState("");

  const handleCreateProduct = async (event) => {
    event.preventDefault();
    //with axios
    // getDataWithAxios()
    const newProduct = { title, thumbnail: thumb };
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    console.log("here is the data from fetch", data);
  };
  const getDataWithAxios = async () => {
    const newProduct = { title, thumbnail: thumb };
    try {
      const { data } = await axios.post(
        "https://dummyjson.com/products/add",
        newProduct
      );
      console.log("here is the return from the post", data);
    } catch (error) {
      console.log("there was an error with the post", error);
    }
  };
  return (
    <div>
      <h2>Create a Product</h2>
      <form onSubmit={handleCreateProduct}>
        <label>
          Title:
          <input
            value={title}
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          Thumbnail:
          <input
            type="text"
            value={thumb}
            onChange={(event) => {
              setThumb(event.target.value);
            }}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
};
export default CreateProduct;
