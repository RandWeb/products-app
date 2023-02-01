import { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  
  const submiteForm = (event) => {
    event.preventDefault();

    onAdd({ title });

    setTitle("");
  };

  return (
    <div>
      <form className="add-product-form" onSubmit={submiteForm}>
        <div className="form-control">
          <input
            className=""
            type="text"
            placeholder="Add Product"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="form-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
