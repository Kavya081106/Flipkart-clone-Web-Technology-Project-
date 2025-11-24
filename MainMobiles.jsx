import React from 'react';
import './Mobiles.css';
import { BsSearch, BsCart3, BsShop, BsMegaphone, BsGift, BsQuestionCircle, BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';

const Mobiles = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ background: '#2874f0', padding: '8px 20px' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">
            Flipkart <small style={{ color: '#ffe500' }}>Explore Plus ✨</small>
          </a>

          <form className="d-flex mx-3 flex-grow-1">
            <div className="input-group search-box">
              <input
                className="form-control border-start-0"
                type="search"
                placeholder="Search for Products, Brands and More"
                aria-label="Search"
              />
              <span className="input-group-text bg-white border-end-0">
                <BsSearch />
              </span>
            </div>
          </form>
          <div className="d-flex align-items-center">
            <a href="login.html" className="btn btn-light btn-sm me-2 px-3">
              Login
            </a>
            <a href="#" className="text-white me-3 text-decoration-none fw-semibold">
              Become a Seller
            </a>
            <div className="dropdown me-3">
              <a
                className="text-white fw-semibold dropdown-toggle text-decoration-none"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Notification Preferences
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    24x7 Customer Care
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Advertise
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Download App
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="text-white text-decoration-none fw-semibold">
              🛒 Cart
            </a>
          </div>
        </div>
      </nav>

      <nav className="navbar category-bar">
        <div className="container">
          <ul className="nav justify-content-center">
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle " href="#" style={{ fontWeight: 600 }}>
                Electronics
              </a>
              <div className="dropdown-menu p-3">
                <div className="row">
                  <div className="col">
                    <div className="dropdown-header">Mobiles</div>
                    <a href="#">Mi</a>
                    <a href="#">Samsung</a>
                    <a href="#">Apple</a>
                  </div>
                  <div className="col">
                    <div className="dropdown-header">Accessories</div>
                    <a href="#">Headphones</a>
                    <a href="#">Chargers</a>
                  </div>
                  <div className="col">
                    <div className="dropdown-header">Wearables</div>
                    <a href="#">Smart Watches</a>
                    <a href="#">VR</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={{ fontWeight: 600 }}>
                TVs & Appliances
              </a>
              <div className="dropdown-menu p-3">
                <div className="row">
                  <div className="col">
                    <div className="dropdown-header">Televisions</div>
                    <a href="#">Smart TVs</a>
                    <a href="#">LED TVs</a>
                  </div>
                  <div className="col">
                    <div className="dropdown-header">Appliances</div>
                    <a href="#">Washing Machines</a>
                    <a href="#">Refrigerators</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={{ fontWeight: 600 }}>
                Men
              </a>
              <div className="dropdown-menu p-3">
                <div className="row">
                  <div className="col">
                    <div className="dropdown-header">Clothing</div>
                    <a href="#">T-Shirts</a>
                    <a href="#">Shirts</a>
                    <a href="#">Jeans</a>
                  </div>
                  <div className="col">
                    <div className="dropdown-header">Footwear</div>
                    <a href="#">Casual Shoes</a>
                    <a href="#">Sports Shoes</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={{ fontWeight: 600 }}>
                Women
              </a>
              <div className="dropdown-menu p-3">
                <div className="row">
                  <div className="col">
                    <div className="dropdown-header">Clothing</div>
                    <a href="#">Sarees</a>
                    <a href="#">Kurtas</a>
                    <a href="#">Dresses</a>
                  </div>
                  <div className="col">
                    <div className="dropdown-header">Beauty</div>
                    <a href="#">Makeup</a>
                    <a href="#">Skincare</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={{ fontWeight: 600 }}>
                Baby & Kids
              </a>
              <div className="dropdown-menu p-3">
                <div className="row">
                  <div className="col">
                    <div className="dropdown-header">Clothing</div>
                    <a href="#">Boys Clothing</a>
                    <a href="#">Girls Clothing</a>
                  </div>
                  <div className="col">
                    <div className="dropdown-header">Toys</div>
                    <a href="#">Action Toys</a>
                    <a href="#">Educational Toys</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={{ fontWeight: 600 }}>
                Home & Furniture
              </a>
              <div className="dropdown-menu p-3">
                <div className="row">
                  <div className="col">
                    <div className="dropdown-header">Furniture</div>
                    <a href="#">Beds</a>
                    <a href="#">Sofas</a>
                  </div>
                  <div className="col">
                    <div className="dropdown-header">Home Decor</div>
                    <a href="#">Wall Decor</a>
                    <a href="#">Lighting</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={{ fontWeight: 600 }}>
                Sports, Books & More
              </a>
              <div className="dropdown-menu p-3">
                <div className="row">
                  <div className="col">
                    <div className="dropdown-header">Sports</div>
                    <a href="#">Cricket</a>
                    <a href="#">Badminton</a>
                  </div>
                  <div className="col">
                    <div className="dropdown-header">Books</div>
                    <a href="#">Fiction</a>
                    <a href="#">Education</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontWeight: 600 }}>
                Flights
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontWeight: 600 }}>
                Offer Zone
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-3">
            <div className="filters p-3 border rounded bg-white">
              <h5 className="mb-3">Filters</h5>

              <p className="fw-bold">CATEGORIES</p>
              <div>
                <a href="#" className="text-decoration-none text-dark">
                  Mobiles & Accessories
                </a>
              </div>
              <hr />

              <p className="fw-bold">BRAND</p>
              <input type="text" className="form-control form-control-sm mb-2" placeholder="Search Brand" />
              <div>
                <input type="checkbox" /> Samsung
              </div>
              <div>
                <input type="checkbox" /> Apple
              </div>
              <div>
                <input type="checkbox" /> Xiaomi
              </div>
              <div>
                <input type="checkbox" /> OnePlus
              </div>
              <a href="#" className="text-primary small">
                + 20 more
              </a>
              <hr />

              <div className="accordion" id="filtersAccordion">
                <div className="accordion-item border-0">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed p-0 bg-white shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#ramFilter"
                    >
                      RAM
                    </button>
                  </h6>
                  <div id="ramFilter" className="accordion-collapse collapse">
                    <div className="accordion-body p-1">
                      <div>
                        <input type="checkbox" /> 2 GB
                      </div>
                      <div>
                        <input type="checkbox" /> 4 GB
                      </div>
                      <div>
                        <input type="checkbox" /> 6 GB
                      </div>
                      <div>
                        <input type="checkbox" /> 8 GB & Above
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed p-0 bg-white shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#networkFilter"
                    >
                      Network Type
                    </button>
                  </h6>
                  <div id="networkFilter" className="accordion-collapse collapse">
                    <div className="accordion-body p-1">
                      <div>
                        <input type="checkbox" /> 2G
                      </div>
                      <div>
                        <input type="checkbox" /> 3G
                      </div>
                      <div>
                        <input type="checkbox" /> 4G
                      </div>
                      <div>
                        <input type="checkbox" /> 5G
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0">
                  <h6 className="accordion-header">
                    <button
                      className="accordion-button collapsed p-0 bg-white shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#storageFilter"
                    >
                      Internal Storage
                    </button>
                  </h6>
                  <div id="storageFilter" className="accordion-collapse collapse">
                    <div className="accordion-body p-1">
                      <div>
                        <input type="checkbox" /> 32 GB
                      </div>
                      <div>
                        <input type="checkbox" /> 64 GB
                      </div>
                      <div>
                        <input type="checkbox" /> 128 GB
                      </div>
                      <div>
                        <input type="checkbox" /> 256 GB & Above
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <p className="fw-bold">Price</p>
              <input type="range" className="form-range" min="5000" max="100000" step="1000" />
              <div className="d-flex justify-content-between">
                <input type="text" className="form-control form-control-sm w-50 me-2" placeholder="Min" />
                <input type="text" className="form-control form-control-sm w-50" placeholder="Max" />
              </div>
              <hr />

              <p className="fw-bold">Customer Ratings</p>
              <div>
                <input type="checkbox" /> ★★★★ & above
              </div>
              <div>
                <input type="checkbox" /> ★★★ & above
              </div>
              <div>
                <input type="checkbox" /> ★★ & above
              </div>
              <hr />

              <p className="fw-bold">GST Invoice Available</p>
              <div>
                <input type="checkbox" /> Yes
              </div>
              <hr />

              <p className="fw-bold">Availability</p>
              <div>
                <input type="checkbox" /> Include Out of Stock
              </div>
            </div>
          </div>

          <div className="col-md-9">
            {[1, 2, 3, 4, 5].map((section) => (
              <div className="section-card" key={section}>
                <div className="section-head">
                  <h5>Apple SmartPhones</h5>
                  <a className="btn btn-sm btn-outline-primary" href="#">
                    VIEW ALL
                  </a>
                </div>
                <div className="product-scroller">
                  <div className="card product-card text-center">
                    <a href="./product.html" style={{ textDecoration: 'none', color: 'black' }}>
                      <img
                        src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/p/-original-imah4jyfveygyubc.jpeg?q=70"
                        alt="p1"
                      />
                      <div className="card-body">
                        <p className="card-title small">Apple iPhone 16 (White, 128GB)</p>
                        <p className="mb-1">
                          <span className="badge bg-success">4.6★</span> (19,106)
                        </p>
                        <h6 className="mb-0">
                          ₹74,900
                          <small>
                            <span className="text-muted text-decoration-line-through">₹79,900</span>{' '}
                            <span className="text-success">6% off</span>
                          </small>
                        </h6>
                      </div>
                    </a>
                  </div>

                  <div className="card product-card text-center">
                    <img
                      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70"
                      alt="p2"
                    />
                    <div className="card-body">
                      <p className="card-title small">Apple iPhone 14 (Starlight, 128GB)</p>
                      <p className="mb-1">
                        <span className="badge bg-success">4.6★</span> (3,14,144)
                      </p>
                      <h6 className="mb-0">
                        ₹52,990{' '}
                        <small>
                          <span className="text-muted text-decoration-line-through">₹59,990</span>{' '}
                          <span className="text-success">11% off</span>
                        </small>
                      </h6>
                    </div>
                  </div>

                  <div className="card product-card text-center">
                    <img
                      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/r/r/-original-imah9khh8wgzdafb.jpeg?q=70"
                      alt="p3"
                    />
                    <div className="card-body">
                      <p className="card-title small">Apple iPhone 16e (White, 128GB)</p>
                      <p className="mb-1">
                        <span className="badge bg-success">4.5★</span> (1,544)
                      </p>
                      <h6 className="mb-0">
                        ₹54,900
                        <small>
                          <span className="text-muted text-decoration-line-through">₹59,990</span>{' '}
                          <span className="text-success">8% off</span>
                        </small>
                      </h6>
                    </div>
                  </div>

                  <div className="card product-card text-center">
                    <img
                      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/p/c/-original-imah9khhnfvstqka.jpeg?q=70"
                      alt="p4"
                    />
                    <div className="card-body">
                      <p className="card-title small">Apple iPhone 16e (Black, 128GB)</p>
                      <p className="mb-1">
                        <span className="badge bg-success">4.5★</span> (1,544)
                      </p>
                      <h6 className="mb-0">
                        ₹54,900{' '}
                        <small>
                          <span className="text-muted text-decoration-line-through">₹59,990</span>{' '}
                          <span className="text-success">8% off</span>
                        </small>
                      </h6>
                    </div>
                  </div>

                  <div className="card product-card text-center">
                    <img
                      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70"
                      alt="p5"
                    />
                    <div className="card-body">
                      <p className="card-title small">Apple iPhone 15 Plus (Black, 128GB)</p>
                      <p className="mb-1">
                        <span className="badge bg-success">4.6★</span> (46,300)
                      </p>
                      <h6 className="mb-0">
                        ₹69,999
                        <small>
                          <span className="text-muted text-decoration-line-through">₹79,900</span>{' '}
                          <span className="text-success">12% off</span>
                        </small>
                      </h6>
                    </div>
                  </div>

                  <div className="card product-card text-center">
                    <img
                      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70"
                      alt="p6"
                    />
                    <div className="card-body">
                      <p className="card-title small">Apple iPhone 16 (Teal, 256GB)</p>
                      <p className="mb-1">
                        <span className="badge bg-success">4.6★</span> (19,106)
                      </p>
                      <h6 className="mb-0">
                        ₹84,900
                        <small>
                          <span className="text-muted text-decoration-line-through">₹89,900</span>{' '}
                          <span className="text-success">5% off</span>
                        </small>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase">About</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Flipkart Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Corporate Information
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase">Group Companies</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Myntra
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Cleartrip
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Shopsy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase">Help</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Cancellation & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase">Consumer Policy</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Cancellation & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Grievance Redressal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    EPR Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-3 border-start ps-4">
              <h6 className="text-uppercase">Mail Us:</h6>
              <p className="small mb-1">
                Flipkart Internet Private Limited,
                <br />
                Buildings Alyssa, Begonia &
                <br />
                Clove Embassy Tech Village,
                <br />
                Outer Ring Road, Devarabeesanahalli Village,
                <br />
                Bengaluru, 560103,
                <br />
                Karnataka, India
              </p>
              <h6 className="text-uppercase">Social:</h6>
              <a href="#" className="text-light me-2">
                <BsFacebook />
              </a>
              <a href="#" className="text-light me-2">
                <BsTwitter />
              </a>
              <a href="#" className="text-light me-2">
                <BsYoutube />
              </a>
              <a href="#" className="text-light">
                <BsInstagram />
              </a>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase">Registered Office Address:</h6>
              <p className="small mb-1">
                Flipkart Internet Private Limited,
                <br />
                Buildings Alyssa, Begonia &
                <br />
                Clove Embassy Tech Village,
                <br />
                Outer Ring Road, Devarabeesanahalli Village,
                <br />
                Bengaluru, 560103,
                <br />
                Karnataka, India
                <br />
                CIN : U51109KA2012PTC066107
                <br />
                Telephone:{' '}
                <a href="tel:04445614700" className="text-light">
                  044-45614700
                </a>{' '}
                /{' '}
                <a href="tel:04467415800" className="text-light">
                  044-67415800
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="row text-center align-items-center">
          <div className="col-md-11 d-flex justify-content-center flex-wrap gap-4 ">
            <a href="#" className="footer-link ps-3">
              <BsCart3 className="icon-yellow" /> Cart
            </a>
            <a href="#" className="footer-link ps-3">
              <BsShop className="icon-yellow" /> Become a Seller
            </a>
            <a href="#" className="footer-link ps-3">
              <BsMegaphone className="icon-yellow" /> Advertise
            </a>
            <a href="#" className="footer-link ps-3">
              <BsGift className="icon-yellow" /> Gift Cards
            </a>
            <a href="#" className="footer-link ps-3">
              <BsQuestionCircle className="icon-yellow" /> Help Center
            </a>

            <p className="mb-0">© 2007-2025 Flipkart.com</p>
            <span className="payment-icons">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
              <img src="https://img.icons8.com/color/48/discover.png" alt="Discover" />
              <img src="https://img.icons8.com/color/48/rupay.png" alt="RuPay" />
              <img src="https://img.icons8.com/color/48/bank-card-back-side.png" alt="Net Banking" />
              <img src="https://img.icons8.com/color/48/delivery.png" alt="Cash on Delivery" />
              <img src="https://img.icons8.com/color/48/installing-updates.png" alt="EMI Options" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Mobiles;