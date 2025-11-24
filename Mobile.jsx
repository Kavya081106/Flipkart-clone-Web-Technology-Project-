import React from "react";
import "./Mobile.css";

export default function Mobile() {
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

      {/* Main Section */}
      <main className="container-lg">
        <section className="product-wrap">
          {/* LEFT */}
          <div className="left">
            <div className="main-image">
              <img
                src="https://images.thequint.com/thequint/2024-06/c7de8ba6-033b-43f5-9d0a-af06e4c89790/OnePlus_Nord_CE_4_Lite_5G.png"
                alt="OnePlus Nord CE4 Lite"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <h1 className="product-title">
              OnePlus Nord CE4 Lite 5G (8GB RAM, 256GB Storage)
            </h1>
            <div>
              <span className="rating">4.3 ★</span>
              <span className="rating-info">
                12,345 Ratings & 1,201 Reviews
              </span>
            </div>

            <div className="price-row">
              <div className="price">₹19,999</div>
              <div className="mrp">₹24,999</div>
              <div className="discount">20% off</div>
            </div>

            <ul className="offers">
              <li>Bank Offer: 10% Instant Discount on ICICI Cards</li>
              <li>Exchange Offer: Up to ₹6,000 off</li>
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
                  The OnePlus Nord CE4 Lite 5G comes with a Snapdragon 7 Gen 2
                  processor, 6.7&quot; AMOLED display, 5000mAh battery with 67W
                  fast charging, and OxygenOS based on Android 14.
                </div>
                <div className="content">
                  <ul>
                    <li>Display: 6.7&quot; AMOLED, 120Hz</li>
                    <li>Processor: Snapdragon 7 Gen 2</li>
                    <li>RAM/Storage: 8GB / 256GB</li>
                    <li>Battery: 5000mAh, 67W Fast Charging</li>
                    <li>Camera: 50MP + 8MP + 2MP | 16MP Front</li>
                  </ul>
                </div>
                <div className="content">
                  <p>
                    <strong>Ramesh:</strong> Great phone at this price, smooth
                    performance. ★★★★★
                  </p>
                  <p>
                    <strong>Anita:</strong> Camera is decent, battery life is
                    excellent. ★★★★☆
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
            {/* About */}
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

            {/* Help */}
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

            {/* Policy */}
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

            {/* Social */}
            <div className="col-6 col-md-2">
              <h6>Social</h6>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>

            {/* Address */}
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
