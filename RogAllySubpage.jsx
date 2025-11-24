import React from "react";
import "./RogAllySubpage.css";

const RogAlly = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark rog-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="flipkart logo.svg" alt="Flipkart" />
          </a>
          <form className="d-flex search-bar mx-auto">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
            />
          </form>
          <div>
            <button className="btn btn-light btn-sm me-2">Login</button>
            <button className="btn btn-light btn-sm">Cart</button>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <div className="container product-section">
        <div className="row">
          {/* Left: Gallery */}
          <div className="col-md-5 product-gallery">
            <img
              src="https://thfvnext.bing.com/th/id/OIP.YNGJJlrOEfSZByrb2keY5gHaE2?w=254&h=182&c=7&r=0&o=5&cb=thfvnext&dpr=1.3&pid=1.7"
              alt="ASUS ROG Ally"
            />
            <div className="thumbs d-flex mt-2">
              <img
                src="https://thfvnext.bing.com/th/id/OIP.IaaWAmARXIOTBMksPK170QHaEK?w=307&h=180&c=7&r=0&o=5&cb=thfvnext&dpr=1.3&pid=1.7"
                alt="thumb"
              />
              <img
                src="https://thfvnext.bing.com/th/id/OIP.ZcPmJwhyAO69jz3p8WviSgHaHa?w=170&h=180&c=7&r=0&o=5&cb=thfvnext&dpr=1.3&pid=1.7s"
                alt="thumb"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="col-md-7">
            <h4>
              ASUS ROG Ally Ryzen Z1 Extreme (16 GB RAM/512 GB SSD/Windows 11){" "}
              Handheld Gaming Console
            </h4>
            <div className="text-warning">
              ★★★★☆ <span className="text-dark small">(4,812 Ratings & 832 Reviews)</span>
            </div>
            <p className="price">
              ₹69,990{" "}
              <span className="text-muted text-decoration-line-through">₹79,990</span>{" "}
              <span className="discount">13% off</span>
            </p>
            <div className="offers">
              <h6>Available offers</h6>
              <ul>
                <li>Bank Offer: 10% off on Axis Bank Cards</li>
                <li>Special Price: Extra ₹3000 off</li>
                <li>No cost EMI available</li>
              </ul>
            </div>
            <div className="mt-3">
              <button className="btn btn-primary btn-cart">Add to Cart</button>
              <button className="btn btn-warning btn-buy">Buy Now</button>
            </div>
            <div className="highlights mt-3">
              <h6>Highlights</h6>
              <ul>
                <li>16 GB RAM | 512 GB SSD</li>
                <li>7-inch Full HD Touch Display</li>
                <li>Custom AMD Ryzen Z1 Extreme Processor</li>
                <li>Windows 11 Operating System</li>
                <li>Ergonomic Handheld Gaming Console</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mt-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="desc-tab"
              data-bs-toggle="tab"
              data-bs-target="#desc"
              type="button"
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="specs-tab"
              data-bs-toggle="tab"
              data-bs-target="#specs"
              type="button"
            >
              Specifications
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
            >
              Reviews
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="desc">
            <p>
              The ASUS ROG Ally is a powerful handheld gaming console featuring the
              Ryzen Z1 Extreme processor, 16 GB RAM, and 512 GB SSD. It runs on Windows 11
              and delivers desktop-level gaming in a portable handheld design.
            </p>
          </div>
          <div className="tab-pane fade" id="specs">
            <ul>
              <li>Processor: AMD Ryzen Z1 Extreme</li>
              <li>Memory: 16 GB RAM</li>
              <li>Storage: 512 GB SSD</li>
              <li>Display: 7-inch Full HD Touchscreen</li>
              <li>OS: Windows 11</li>
            </ul>
          </div>
          <div className="tab-pane fade" id="reviews">
            <h6>Customer Reviews</h6>
            <div className="border p-2 rounded mb-2">
              <strong>Karan</strong> ★★★★☆ <br />
              Great performance and portable design. Battery life could be better.
            </div>
            <div className="border p-2 rounded">
              <strong>Megha</strong> ★★★★★ <br />
              Absolutely love it! Plays AAA titles smoothly and feels premium.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
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
            <div className="col-6 col-md-2">
              <h6>Social</h6>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
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

          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <p className="mb-0">© 2007-2025 Flipkart.com</p>
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
};

export default RogAlly;
