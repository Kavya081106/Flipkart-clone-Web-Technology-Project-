import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Product not found");
      }
      return res.json();
    })
    .then((data) => setProduct(data))
    .catch((err) => {
      console.error("Error fetching product:", err);
      setProduct(null); // explicitly set to null on error
    });
}, [id]);

if (product === null) {
  return <h3 className="text-center mt-5 text-danger">Product not found</h3>;
}

if (!product) {
  return <h3 className="text-center mt-5">Loading product...</h3>;
}
  
  return (
    <main className="container-fluid mt-3">
      <div className="card product-detail-card">
        <div className="row g-0">
          <div className="col-md-5 text-center p-3">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7 p-4">
            <h4 className="mb-3">{product.title}</h4>
            <h5 className="text-success">₹{product.price}</h5>
            <p className="text-muted">
              <strong>Category:</strong> {product.category}
            </p>
            <p>{product.description}</p>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-outline-primary">Add to Cart</button>
              <button className="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
