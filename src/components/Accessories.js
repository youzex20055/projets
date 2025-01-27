import React from "react";
import { PRODUCTS } from "../proacc";
import { Product } from "../pages/shop/product"; // Corrected path
import "../pages/shop/shop.css"; // Corrected path

const Footer = () => (
  <footer className="section__container footer__container">
    <div className="footer__col">
      <h4 className="footer__heading">CONTACT INFO</h4>
      <p><i className="ri-map-pin-2-fill"></i>13 RUE BAB ENNACER QU MLY ELHASSANE SAFI</p>
      <p><i className="ri-mail-fill"></i> youssefhdilisse5@gmail.com</p>
      <p><i className="ri-phone-fill"></i> (+212) 678102292</p>
    </div>
    <div className="footer__col">
      <h4 className="footer__heading">COMPANY</h4>
      <p>Home</p>
      <p>About Us</p>
      <p>Work With Us</p>
      <p>Our Blog</p>
      <p>Terms & Conditions</p>
    </div>
    <div className="footer__col">
      <h4 className="footer__heading">COPYRIGHT</h4>
      <p>&copy; 2025 YourCompanyName. All rights reserved. Use of this site constitutes acceptance of our <a href="/terms-and-conditions">Terms and Conditions</a></p>
    </div>
    <div className="footer__col">
      <h4 className="footer__heading">ADVERTISING POSTER</h4>
      <div className="instagram__grid">
        <img src="/assets/products/1.jpg" alt="instagram" />
        <img src="/assets/products/5.jpg" alt="instagram" />
        <img src="/assets/products/3.jpg" alt="instagram" />
        <img src="/assets/products/2.jpg" alt="instagram" />
        <img src="/assets/products/4.jpg" alt="instagram" />
        <img src="/assets/products/6.jpg" alt="instagram" />
      </div>
    </div>
  </footer>
);

export const Accessories = () => {
  return (
    <div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      <footer>
      <section className="section__container brands__container">
          <div className="brand__image">
            <img src="../../assets/products/brand-1.png" alt="brand" />
          </div>
          <div className="brand__image">
            <img src="../../assets/products/brand-2.png" alt="brand" />
          </div>
          <div className="brand__image">
            <img src="../../assets/products/brand-6.png" alt="brand" />
          </div>
          <div className="brand__image">
            <img src="../../assets/products/brand-5.png" alt="brand" />
          </div>
          <div className="brand__image">
            <img src="../../assets/products/kappa.jpg" alt="brand" />
          </div>
          <div className="brand__image">
            <img src="../../assets/products/macron.jpg" alt="brand" />
          </div>
        </section>
      </footer>
      <hr />
      <Footer />
    </div>
  );
};
