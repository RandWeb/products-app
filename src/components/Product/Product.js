import "./Product.css";

const Product = ({ product, onDelete }) => {
  const titleHandler = () => {};

  return (
    <div className="product">
      <h5>{product.title}</h5>
      <div>
        <button className="btn" onClick={()=>{onDelete(product.id)}}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
