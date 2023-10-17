import { useContext } from "react";
import { InventoryContext } from "../data/inventoryContext";
export default function Product({ product }) {
  const { deleteProduct, setEditing } = useContext(InventoryContext);

  return (
    <div className="product ">
      <h3>{product.name}</h3>
      {/* <p>
        <span>Price</span> : {`CAD${product.price}`}
      </p> */}
      <p>
        <span>Task</span> : {product.task}
      </p>
      <label>
        {/* {product.inStock ? "In Stock" : "Not in Stock"}
        <input type="checkbox" checked={product.inStock}></input> */}
        <button className="edit-btn" onClick={() => setEditing(product.id)}>
          edit
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteProduct(product.id)}
        >
          delete
        </button>
      </label>
    </div>
  );
}
