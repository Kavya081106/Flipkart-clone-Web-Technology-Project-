import React from "react";
import "./Laptop.css";

export default function Laptop() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="container-lg">
          <a href="#" className="brand">
            Flipkart<span>Explore Plus</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-lg">
        <section className="product-wrap">
          {/* LEFT */}
          <div className="left">
            <div className="main-image">
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6299/6299821_sd.jpg"
                alt="Dell Inspiron 15 Laptop"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <h1 className="product-title">
              Dell Inspiron 15 (12th Gen Intel i5, 16GB RAM, 512GB SSD, Windows 11)
            </h1>

            <div>
              <span className="rating">4.4 ★</span>
              <span className="rating-info">
                8,942 Ratings & 1,035 Reviews
              </span>
            </div>

            <div className="price-row">
              <div className="price">₹62,999</div>
              <div className="mrp">₹74,999</div>
              <div className="discount">16% off</div>
            </div>

            <ul className="offers">
              <li>Bank Offer: 10% Instant Discount on HDFC Cards</li>
              <li>No Cost EMI available on select cards</li>
              <li>Free Delivery by Tomorrow</li>
            </ul>

            <div className="btn-wrap">
              <button className="btn-cart">ADD TO CART</button>
              <button className="btn-buy">BUY NOW</button>
            </div>

            {/* Tabs */}
            <div className="tabs">
              <input type="radio" id="tab-desc" name="tabs" defaultChecked />
              <label htmlFor="tab-desc">Description</label>

              <input type="radio" id="tab-specs" name="tabs" />
              <label htmlFor="tab-specs">Specifications</label>

              <input type="radio" id="tab-rev" name="tabs" />
              <label htmlFor="tab-rev">Reviews</label>

              <div className="tab-content">
                <div className="content">
                  The Dell Inspiron 15 is powered by the latest 12th Gen Intel
                  Core i5 processor with Intel Iris Xe graphics. It comes with
                  16GB RAM, 512GB SSD storage, a 15.6&quot; FHD anti-glare
                  display, and runs on Windows 11 Home for smooth multitasking
                  and performance.
                </div>
                <div className="content">
                  <ul>
                    <li>Display: 15.6&quot; FHD Anti-Glare, 120Hz</li>
                    <li>Processor: 12th Gen Intel Core i5</li>
                    <li>RAM/Storage: 16GB DDR4 / 512GB SSD</li>
                    <li>Graphics: Intel Iris Xe</li>
                    <li>Battery: 3-cell, up to 6 hours backup</li>
                    <li>OS: Windows 11 Home</li>
                  </ul>
                </div>
                <div className="content">
                  <p>
                    <strong>Aryan:</strong> Great laptop for office and studies,
                    fast SSD. ★★★★★
                  </p>
                  <p>
                    <strong>Neha:</strong> Display is sharp, performance is
                    smooth but battery could be better. ★★★★☆
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            {/* ABOUT */}
            <div className="col-6 col-md-2">
              <h6>About</h6>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Flipkart Stories</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Corporate Information</a></li>
              </ul>
            </div>

            {/* HELP */}
            <div className="col-6 col-md-2">
              <h6>Help</h6>
              <ul>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Cancellation & Returns</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Report Infringement</a></li>
              </ul>
            </div>

            {/* POLICY */}
            <div className="col-6 col-md-2">
              <h6>Policy</h6>
              <ul>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">EPR Compliance</a></li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="col-6 col-md-2">
              <h6>Social</h6>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>

            {/* ADDRESS */}
            <div className="col-12 col-md-4">
              <h6>Mail Us:</h6>
              <p>
                Flipkart Internet Private Limited,<br />
                Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                Outer Ring Road, Devarabeesanahalli Village,<br />
                Bengaluru, 560103,<br />
                Karnataka, India
              </p>

              <h6>Registered Office Address:</h6>
              <p>
                Flipkart Internet Private Limited,<br />
                Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                Outer Ring Road, Devarabeesanahalli Village,<br />
                Bengaluru, 560103,<br />
                Karnataka, India<br />
                CIN : U51109KA2012PTC066107<br />
                Telephone: 044-45614700
              </p>
            </div>
          </div>

          <hr />

          <div className="footer-bottom">
            <div className="links">
              <a href="#">Become a Seller</a>
              <a href="#">Advertise</a>
              <a href="#">Gift Cards</a>
              <a href="#">Help Center</a>
            </div>
            <p>© 2007-2025 Flipkart.com</p>
            <div className="payment-logos">
              <img
                alt="payments"
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                height="25"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
