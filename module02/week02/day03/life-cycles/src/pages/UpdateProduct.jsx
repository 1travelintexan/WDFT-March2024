import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { productId } = useParams();
  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState("");
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const { data } = await axios(
          `https://dummyjson.com/products/${productId}`
        );
        console.log("here is the first data", data);
        setTitle(data.title);
        setThumb(data.thumbnail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInitialData();
  }, [productId]);

  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.delete(
        `https://dummyjson.com/products/${productId}`
      );
      console.log("Yippee, we did an update, ", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: "60vh", background: "black" }}>
      <h2>Update a Product</h2>
      <form onSubmit={handleUpdateProduct}>
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
        <button>Update</button>
      </form>
    </div>
  );
};
export default UpdateProduct;
