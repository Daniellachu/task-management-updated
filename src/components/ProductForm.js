import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { InventoryContext } from "../data/inventoryContext";

export default function ProductForm() {
  const {
    addProduct,
    setEditing,
    updateProduct,
    editing,
    products
  } = useContext(InventoryContext);

  // check if value of editing is "new" or some id of a product
  let initialData = {
    task: ""
    // name: "",
    // price: 0,
    // category: "",
    // inStock: false
  };

  if (editing !== "new") {
    initialData = products.find(function (p) {
      return p.id === editing;
    });
  }

  const [product, setProduct] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addProduct({
        ...product,
        id: nanoid()
      });
    } else {
      updateProduct(product);
    }
  }

  function handleInput(e, field) {
    setProduct({ ...product, [field]: e.target.value });
  }

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>Name:</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleInput(e, "name")}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => handleInput(e, "price")}
          />
        </div> */}
        <div>
          <label>Task</label>
          <input
            type="text"
            value={product.task}
            onChange={(e) => handleInput(e, "task")}
          ></input>
        </div>
        {/* <div>
          <label>Category:</label>
          <select defaultValue="" onChange={(e) => handleInput(e, "category")}>
            <option value="">--select category--</option>
            <option value="diary">diary</option>
            <option value="produce">produce</option>
          </select>
        </div> */}
        <div className="form-btns">
          <button className="cancel-btn" onClick={() => setEditing(null)}>
            cancel
          </button>
          <button className="save-btn">save</button>
        </div>
      </form>
    </div>
  );
}
