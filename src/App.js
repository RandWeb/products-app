import { useState, useEffect } from "react";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("uri");
      const responseData = await response.json();
      setProducts(responseData);
    };
    sendRequest();
  }, []);

  const deleteProducts = async (id) => {
    await fetch(`uri/${id}`, { method: "DELETE" });

    let newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  const addProduct = async (title) => {
    const response = await fetch(`uri`, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(title),
    });
    const reponseData = await response.json();
    setProducts([...products, reponseData]);
  };
  return (
    <div className="container">
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProducts} />
    </div>
  );
};

export default App;
