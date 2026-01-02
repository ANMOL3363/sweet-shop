
import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <>
      <nav className="navbar">
        <h2>🍬 Sweet Shop</h2>
      </nav>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p._id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
