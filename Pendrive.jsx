import React from "react";
import "./Pendrive.css";

export default function Pendrive() {
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
                src="https://media.education.studio7thailand.com/11782/SanDisk-Ultra-Dual-Drive-Go-USB-Type-C-64GB-0.jpg"
                alt="SanDisk Ultra Dual Drive 64GB"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <h1 className="product-title">
              SanDisk Ultra Dual Drive 64GB USB 3.1 (OTG, Type-C & Type-A)
            </h1>
            <div>
              <span className="rating">4.5 ★</span>
              <span className="rating-info">
                15,876 Ratings & 2,301 Reviews
              </span>
            </div>

            <div className="price-row">
              <div className="price">₹699</div>
              <div className="mrp">₹1,199</div>
              <div className="discount">42% off</div>
            </div>

            <ul className="offers">
              <li>Bank Offer: 5% Cashback on Flipkart Axis Bank Card</li>
              <li>Special Price: Get extra ₹100 off</li>
              <li>Free Delivery available</li>
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
                  The SanDisk Ultra Dual Drive offers 64GB storage with dual USB
                  Type-C and Type-A connectors. It allows seamless data transfer
                  between smartphones, tablets, and computers with fast USB 3.1
                  performance.
                </div>
                <div className="content">
                  <ul>
                    <li>Capacity: 64GB</li>
                    <li>Connector: Dual (USB Type-C + USB Type-A)</li>
                    <li>Performance: USB 3.1 up to 150MB/s</li>
                    <li>Compatibility: Android, Windows, macOS</li>
                    <li>Design: Retractable, compact, portable</li>
                  </ul>
                </div>
                <div className="content">
                  <p>
                    <strong>Karan:</strong> Super fast transfer speeds, works
                    perfectly with my phone. ★★★★★
                  </p>
                  <p>
                    <strong>Priya:</strong> Very handy for OTG use, build is
                    solid. ★★★★☆
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-4 mt-5">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-6 col-md-2">
              <h6 className="text-uppercase fw-bold">About</h6>
              <ul className="list-unstyled small">
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
              <h6 className="text-uppercase fw-bold">Help</h6>
              <ul className="list-unstyled small">
                <li><a href="#">Payments</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Cancellation & Returns</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Report Infringement</a></li>
              </ul>
            </div>

            {/* Policy */}
            <div className="col-6 col-md-2">
              <h6 className="text-uppercase fw-bold">Policy</h6>
              <ul className="list-unstyled small">
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
              <h6 className="text-uppercase fw-bold">Social</h6>
              <ul className="list-unstyled small">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>

            {/* Address */}
            <div className="col-12 col-md-4">
              <h6 className="text-uppercase fw-bold">Mail Us:</h6>
              <p className="small text-white-50 mb-3">
                Flipkart Internet Private Limited,
                <br />
                Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                <br />
                Outer Ring Road, Devarabeesanahalli Village,
                <br />
                Bengaluru, 560103,
                <br />
                Karnataka, India
              </p>

              <h6 className="text-uppercase fw-bold">
                Registered Office Address:
              </h6>
              <p className="small text-white-50">
                Flipkart Internet Private Limited,
                <br />
                Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                <br />
                Outer Ring Road, Devarabeesanahalli Village,
                <br />
                Bengaluru, 560103,
                <br />
                Karnataka, India
                <br />
                CIN : U51109KA2012PTC066107
                <br />
                Telephone: 044-45614700
              </p>
            </div>
          </div>

          <hr className="border-secondary my-4" />

          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex gap-4">
              <a href="#" className="text-white text-decoration-none">
                Become a Seller
              </a>
              <a href="#" className="text-white text-decoration-none">
                Advertise
              </a>
              <a href="#" className="text-white text-decoration-none">
                Gift Cards
              </a>
              <a href="#" className="text-white text-decoration-none">
                Help Center
              </a>
            </div>

            <p className="mb-0 small text-white-50">
              © 2007-2025 Flipkart.com
            </p>

            <div className="payment-logos d-flex flex-wrap align-items-center gap-2">
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
