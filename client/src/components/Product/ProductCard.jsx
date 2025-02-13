//Product.js = (data) 
// Product -> ProductCarousel -> ProductCard -> Product Page
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCarousel from "./ProductCarousel";
import '../../styles/product-card.css';

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container text-white">
 
<div className="product">
      <div className="row d-flex justify-content-center align-items-end">
        <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-24 w3-margin-bottom">
          {/* Show corresponding carousel */}
          {product.carouselImages && product.carouselImages.length > 1 ? (
            <ProductCarousel images={product.carouselImages} />
          ) : (
            <img 
              src={product.image} 
              className="card-img-top shadow" 
              alt={product.name} 
            />
          )}
          
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6" >
          <div className="container w3-padding-large">

          <h5 className="card-title my-2">{product.name}</h5>
          <p className="card-text opacity-80" style={{textShadow:'1px 1px 1px black'}}>${product.price}</p>
          <p className="card-snippet small opacity-90">{product.snippet}</p>
          <Link variant="secondary" className="small link-secondary fw-bold" onClick={handleShow}>
            View More
          </Link>
          <div className=" w3-hide-medium w3-hide-small mb-8">
          </div>
          </div>
        </div>
      </div>
      </div>
      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <div className="w3-padding-small">
          <Modal.Body className="mt-0 py-0">
            {/* Show corresponding carousel */}
            {product.carouselImages && product.carouselImages.length > 1 ? (
              <ProductCarousel images={product.carouselImages} />
            ) : (
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-80 mb-3 shadow-lg" 
              />
            )}
            <div className="w3-padding-large mt-3">
              <h6 className="text-dark-emphasis fw-bolder">${product.price}</h6>
              <p className="small text-secondary">{product.description}</p>
            </div>
          </Modal.Body>
        </div>
        <Modal.Footer className="">
          <Link>
            <i className="fas fa-cart-plus medium link-body-emphasis"></i>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
