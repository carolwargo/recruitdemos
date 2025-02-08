//Product.js = (data) 
// Product -> ProductCarousel -> ProductCard -> Product Page
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCarousel({ images }) { // Accept images as props
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 600, settings: { centerMode: false, slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 } },
      { breakpoint: 480, settings: { centerMode: false, slidesToShow: 1, slidesToScroll: 1, arrows: false } }
    ]
  };

  return (
    <div className="slider-container">
      <style> {`
      /* Make the dots lighter */
.slick-dots li button:before {
  color: rgba(255, 255, 255, 0.5); /* Lighter color (using rgba for transparency) */
  font-size: 16px; /* Optional: adjust dot size */
}

.slick-dots li.slick-active button:before {
  color: rgba(255, 255, 255, 0.9); /* Slightly darker for active dot */
}

/* Optional: Change color of dots when hovered */
.slick-dots li button:hover:before {
  color: rgba(255, 255, 255, 0.7); /* Slightly darker on hover */
}

       `}
       </style>
      <Slider {...settings}>
        {images.map((img) => (  // Use img.image instead of img directly
          <div key={img.id}>
            <img 
              src={img.image} 
              alt={img.alt} 
              className="w-100"
              style={{ boxShadow: "1px 1px 6px rgba(0,0,0,0.75)" }} 
            />
            <p className="text-center small mt-3 text-secondary">{img.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
