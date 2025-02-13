import React from "react";
import ProductCard from "../components/Product/ProductCard";
import products from "../components/Product/Products";
import '../styles/product-card.css';

export default function ProductPage() {
  return (
    <div className="bg-black text-gray">
   <div className="container">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row g-2">
        {products.map((product) => (
          <div className="col-sm-12 col-md-6 col-lg-6" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
