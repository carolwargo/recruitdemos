//Product.js = (data) 
// Product -> ProductCarousel -> ProductCard -> Product Page

import Letter1 from '../../assets/images/Letters/Letter1.png';
import Letter2 from '../../assets/images/Letters/Letter2.png';
import Letter3 from '../../assets/images/Letters/Letter3.png';
import Letter4 from '../../assets/images/Letters/Letter4.png';
import Calendar1 from '../../assets/images/Calendars/Calendar1.png';
import Calendar2 from '../../assets/images/Calendars/Calendar2.png';
import Calendar3 from '../../assets/images/Calendars/Calendar3.png';
import Calendar4 from '../../assets/images/Calendars/Calendar4.png';

const products = [
  {
    id: 1,
    name: "Letters",
    price: 59.99,
    snippet: "Premium-quality letter designs for special occasions.",
    description: "This set includes beautifully crafted letters for invitations, business, and more.",
    image: Letter1,
    carouselImages: [
      { id: 1, image: Letter1, alt: "Letter 1", caption: "Elegant Letter Design" },
      { id: 2, image: Letter2, alt: "Letter 2", caption: "Classic Letter Style" },
      { id: 3, image: Letter3, alt: "Letter 3", caption: "Minimalist Letter Theme" },
      { id: 4, image: Letter4, alt: "Letter 4", caption: "Bold & Modern Letter" }
    ]
  },

  {
    id: 2,
    name: "Calendars",
    price: 59.99,
    snippet: "Premium-quality letter designs for special occasions.",
    description: "This set includes beautifully crafted letters for invitations, business, and more.",
    image: Calendar1,
    carouselImages: [
      { id: 1, image: Calendar1, alt: "Calendar 1", caption: "Elegant Calendar Design" },
      { id: 2, image: Calendar2, alt: "Calendar 2", caption: "Classic Calendar Style" },
      { id: 3, image: Calendar3, alt: "Calendar 3", caption: "Minimalist Calendar Theme" },
      { id: 4, image: Calendar4, alt: "Calendar 4", caption: "Bold & Modern Calendar" }
    ]
  },

  {
    id: 3,
    name: "Letters",
    price: 59.99,
    snippet: "Premium-quality letter designs for special occasions.",
    description: "This set includes beautifully crafted letters for invitations, business, and more.",
    image: Letter3,
    carouselImages: [
      { id: 1, image: Letter1, alt: "Letter 1", caption: "Elegant Letter Design" },
      { id: 2, image: Letter2, alt: "Letter 2", caption: "Classic Letter Style" },
      { id: 3, image: Letter3, alt: "Letter 3", caption: "Minimalist Letter Theme" },
      { id: 4, image: Letter4, alt: "Letter 4", caption: "Bold & Modern Letter" }
    ]
  },

  {
    id: 4,
    name: "Calendars",
    price: 59.99,
    snippet: "Premium-quality letter designs for special occasions.",
    description: "This set includes beautifully crafted letters for invitations, business, and more.",
    image: Calendar2,
    carouselImages: [
      { id: 1, image: Calendar1, alt: "Calendar 1", caption: "Elegant Calendar Design" },
      { id: 2, image: Calendar2, alt: "Calendar 2", caption: "Classic Calendar Style" },
      { id: 3, image: Calendar3, alt: "Calendar 3", caption: "Minimalist Calendar Theme" },
      { id: 4, image: Calendar4, alt: "Calendar 4", caption: "Bold & Modern Calendar" }
    ]
  },

];

export default products;
