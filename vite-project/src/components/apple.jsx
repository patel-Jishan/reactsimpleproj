import { useState } from "react";
import "./apple.css";

export function Shoping() {
  const [product, setProduct] = useState([]);
  const [obj, setObj] = useState({ name: "", quantity: "" });

  function setProductHandler() {
    if (obj.name.trim() && obj.quantity > 0) {
      setProduct([...product, obj]);
      setObj({ name: "", quantity: "" }); 
    } else {
      alert("Fields cannot be empty");
    }
  }
    
  function deleteProduct(index) {
    const updated = product.filter((_, i) => i !== index);
    setProduct(updated);
  }

  function removeAll() {
    setProduct([]);
  }

  return (
    <div className="shopping-container">
      <h1 className="title">Shopping Mall</h1>

      <div className="input-section">
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          value={obj.name}
          onChange={(e) => setObj({ ...obj , name: e.target.value })}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Enter Product Quantity"
          value={obj.quantity}
          onChange={(e) =>
            setObj({ ...obj, quantity: Number(e.target.value) })
          }
        />
        <button className="btn add-btn" onClick={setProductHandler}>
          Add
        </button>
        {product.length > 0 && (
          <button className="btn remove-all-btn" onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>

      {product.map((v, ind) => (
        <div key={ind} className="product-card">
          <h3>{v.name}</h3>
          <h4>Qty:-{v.quantity}</h4>
          <button className="btn delete-btn" onClick={() => deleteProduct(ind)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
