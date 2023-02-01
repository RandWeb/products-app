import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";

let arr = [
  { id: 1, title: "product 1" },
  { id: 2, title: "product 2" },
  { id: 3, title: "product 3" },
];
const App = () => {
  const [products, setProducts] = useState(arr);
  const deleteProducts = (id) => {
    let newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };
  return (
    <div className="container">
      <ProductList products={products} onDelete={deleteProducts} />
    </div>
  );
};

export default App;
