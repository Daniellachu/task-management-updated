import "./styles.css";
// import Playlist from "./components/tasklist";
// import calendar from "./icons/calendar.png";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { useState } from "react";
import { InventoryContext } from "./data/inventoryContext";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);

  function addProduct(product) {
    setProducts([...products, product]);

    //remove the form after creating product
    setEditing(null);
  }

  function updateProduct(product) {
    setProducts(
      products.map(function (p) {
        if (p.id === product.id) {
          return product;
        } else {
          return p;
        }
      })
    );
    //remove the form after creating product
    setEditing(null);
  }

  function deleteProduct(id) {
    setProducts(
      products.filter(function (p) {
        return p.id !== id;
      })
    );
  }

  return (
    <div className="App">
      {/* <div className="header"> */}
      <InventoryContext.Provider
        value={{
          products,
          addProduct,
          deleteProduct,
          updateProduct,
          setEditing,
          editing
        }}
      >
        {/* <img src={calendar} alt="calendar" /> */}
        <h1 className="title">Doodle to do!</h1>
        {/* </div> */}
        {/* <Playlist /> */}
        <h2>Task management app by daniellachu</h2>
        {!editing ? (
          <>
            {products.map(function (product) {
              return <Product product={product} />;
            })}
            <button
              className="save-btn add-btn"
              onClick={() => setEditing("new")}
            >
              Add task
            </button>
          </>
        ) : (
          <ProductForm />
        )}
        {/* <Product product={initialProducts[0]} /> */}
        {/* <ProductList /> */}
      </InventoryContext.Provider>
    </div>
  );
}

const initialProducts = [
  // {
  //   id: 1,
  //   name: "Lettuce",
  //   price: 4.56,
  //   category: "produce",
  //   inStock: false
  // },
  // {
  //   id: 2,
  //   name: "Milk",
  //   price: 5.99,
  //   category: "Dairy",
  //   inStock: true
  // }
  {
    id: 1,
    task: "clean room"
  },
  {
    id: 2,
    task: "do homework"
  }
];
