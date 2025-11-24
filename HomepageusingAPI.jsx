import React,{useState,useEffect} from 'react'
import './HomepageusingAPI.css'
import Cart from "./Cart";
import { Link } from "react-router-dom";

function HomepageusingAPI() {
  const [searchText, setSearchText] = useState("");//variable,function
    const handleSearch = (e) => {
      e.preventDefault();
      alert(`Searching for: ${searchText}`);
    };


  return (
    <>
     <header className="fk-header">
        <div className="container-fluid maxw py-2">
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="d-flex align-items-center">
              <img
                className="fk-logo"
                alt="Flipkart"
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              />
            </a>

            <form className="flex-grow-1" onSubmit={handleSearch}>
            {/* Makes this form grow and occupy all available space inside its flex container.
            onSubmit is a React event handler triggered when the form is submitted. */}
              <div className="input-group search-box">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 
              1.398h-.001q.044.06.098.115l3.85 3.85
              a1 1 0 0 0 1.415-1.414l-3.85-3.85
              a1 1 0 0 0-.115-.1zM12 6.5a5.5 
              5.5 0 1 1-11 0 5.5 5.5 
              0 0 1 11 0" />
                  </svg>
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search for Products, Brands and More"
                  aria-label="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </form>

            <div className="dropdown">
              <button className="btn nav-btn dropdown-toggle d-flex align-items-center" type="button" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-circle me-1" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                Login
              </button>
              <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                <li><a className="dropdown-item" href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt=""/>New Customer?&nbsp;&nbsp;&nbsp;&nbsp;<p style={{color: 'blue'}}>Sign Up</p></a></li>
                <li><a className="dropdown-item" href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt=""/>My Profile</a></li>
                <li><a className="dropdown-item" href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt=""/>Orders</a></li>
                <li><a className="dropdown-item" href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt=""/>Wishlist</a></li>
                <li><a className="dropdown-item" href="#">Rewards</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>

         

<Link to="/Cart">
  <button className="btn nav-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16" style={{margin: '4px'}}>
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
    Cart
  </button>
</Link>


            <button className="btn nav-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16" style={{margin: '4px'}}>
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
              </svg>
              Become a Seller
            </button>

            <button className="btn" style={{background: '#fff', border: 'none'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#111" viewBox="0 0 16 16">
                <circle cx="8" cy="3" r="1.5" />
                <circle cx="8" cy="8" r="1.5" />
                <circle cx="8" cy="13" r="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

    <div className='products'>
    
      <div className="category-strip">
  <div className="container-fluid container-xl">
    <div className="category-list">

      <div className="category-item">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e00302d428f5c7be.png?q=100" alt="minutes"/>
        <small>Minutes</small>
      </div>

      <div className="category-item">
        <Link to="./mobile" style={{textDecoration:"none", color:"#000"}}>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/5f2ee7f883cdb774.png?q=100" alt="mobiles"/>
       <small>Mobiles & Tablets</small></Link>
      </div>
      <div className="category-item has-dropdown">
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" alt="fashion"/>
        <small>Fashion</small>
        <div className="mega-menu">
          <div className="mega-columns">
            <div>
              <h4>Men's Top Wear</h4>
              <Link to="#">All</Link>
              <Link to="#">T-Shirts</Link>
              <Link to="#">Casual Shirts</Link>
              <Link to="#">Formal Shirts</Link>
              <Link to="#">Kurtas</Link>
            </div>
            <div>
              <h4>Men's Bottom Wear</h4>
              <Link to="#">Jeans</Link>
              <Link to="#">Trousers</Link>
              <Link to="#">Shorts</Link>
              <Link to="#">Track Pants</Link>
            </div>
            <div>
              <h4>Women Ethnic</h4>
              <Link to="#">Sarees</Link>
              <Link to="#">Kurtas</Link>
              <Link to="#">Dress Materials</Link>
            </div>
            <div>
              <h4>Footwear</h4>
              <Link to="#">Men Footwear</Link>
              <Link to="#">Women Footwear</Link>
              <Link to="#">Kids Footwear</Link>
            </div>
          </div>
        </div>
      </div>

          <div className="category-item has-dropdown">
     <Link to='/electronics'><img src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="electronics"/>
        <small>Electronics</small></Link> 
        <div className="mega-menu">
          <div className="mega-columns">
            <div>
              <h4>Audio</h4>
              <Link to="#">Bluetooth Headphones</Link>
              <Link to="#">Wired Headphones</Link>
              <Link to="#">Speakers</Link>
            </div>
            <div>
              <h4>Computers</h4>
              <Link to="#">Laptops</Link>
              <Link to="#">Gaming Laptops</Link>
              <Link to="#">Desktops</Link>
            </div>
            <div>
              <h4>Accessories</h4>
              <Link to="#">Mouse</Link>
              <Link to="#">Keyboards</Link>
              <Link to="#">Storage Devices</Link>
            </div>
            <div>
              <h4>Cameras</h4>
              <Link to="#">DSLR</Link>
              <Link to="#">Mirrorless</Link>
              <Link to="#">Action Cameras</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="category-item has-dropdown">
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="home"/>
        <small>Home & Furniture</small>
        <div className="mega-menu">
          <div className="mega-columns">
            <div>
              <h4>Home Furnishings</h4>
              <Link to="#">Bedsheets</Link>
              <Link to="#">Curtains</Link>
              <Link to="#">Cushions</Link>
            </div>
            <div>
              <h4>Living Room</h4>
              <Link to="#">Sofas</Link>
              <Link to="#">Coffee Tables</Link>
              <Link to="#">TV Units</Link>
            </div>
            <div>
              <h4>Bedroom</h4>
              <Link to="#">Beds</Link>
              <Link to="#">Wardrobes</Link>
              <Link to="#">Mattresses</Link>
            </div>
            <div>
              <h4>Kitchen & Dining</h4>
              <Link to="#">Cookware</Link>
              <Link to="#">Dinnerware</Link>
              <Link to="#">Storage</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="category-item">
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/0139228b2f7eb413.jpg?q=100" alt="tv"/>
        <small>TVs & Appliances</small>
      </div>

      <div className="category-item">
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="flight"/>
        <small>Flight Bookings</small>
      </div>
       <div className="category-item has-dropdown">
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="beauty"/>
        <small>Beauty, Food...</small>
        <div className="mega-menu">
          <div className="mega-columns">
            <div>
              <h4>Beauty</h4>
              <Link to="#">Skincare</Link>
              <Link to="#">Haircare</Link>
              <Link to="#">Makeup</Link>
            </div>
            <div>
              <h4>Food & Drinks</h4>
              <Link to="#">Snacks</Link>
              <Link to="#">Beverages</Link>
              <Link to="#">Packaged Food</Link>
            </div>
            <div>
              <h4>Health</h4>
              <Link to="#">Supplements</Link>
              <Link to="#">Protein</Link>
              <Link to="#">Vitamins</Link>
            </div>
            <div>
              <h4>Baby Care</h4>
              <Link to="#">Diapers</Link>
              <Link to="#">Baby Food</Link>
              <Link to="#">Bath Essentials</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="category-item">
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="grocery"/>
        <small>Grocery</small>
      </div>

    </div>
  </div>
</div>
  <section className="hero container-xl">
    <div id="heroCarousel" className="carousel slide rounded-3 overflow-hidden shadow-sm " data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/2a3c4b674758e05f.jpg?q=60" className="d-block w-100" alt="banner1"/>
        </div>
        <div className="carousel-item">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1338bd4fc60390d8.jpg?q=60" className="d-block w-100" alt="banner2"/>
        </div>
        <div className="carousel-item">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60" className="d-block w-100" alt="banner2"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </section>


  <main className="container-fluid mt-3">
    {/* <div className="section-card">
      <div className="section-head">
        <h5>Best of Electronics</h5>
        <Link className="btn btn-sm btn-outline-primary" to="#">VIEW ALL</Link>
      </div> */}
      {/* <div className="product-scroller">
        
        <div className="card product-card text-center">
          <img src="./nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.webp" alt="p1"/>
          <div className="card-body">
            <h6 className="card-title text-truncate">Wireless Earbuds</h6>
            <div className="price">Grab Now </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./Printers.webp" alt="p2"/>
          <div className="card-body">
            <h6 className="card-title text-truncate">Printers</h6>
            <div className="price">From ₹2,699 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./compact-camera-portable-small-point-and-shoot-digital-camera-for-original-imahec6vcssf4hzg.webp" alt="p3"/>
          <div className="card-body">
            <h6 className="card-title text-truncate">Mirrorless Camera</h6>
            <div className="price">Shop Nows! </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./-original-imagxrhetgfuebnn.webp" alt="p4"/>
          <div className="card-body">
            <h6 className="card-title text-truncate">Fasttrack SmartWatch</h6>
            <div className="price">From ₹1,399 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./-original-imahf4rbgwtzquxh.webp" alt="p5"/>
          <div className="card-body">
            <h6 className="card-title text-truncate">Monitors</h6>
            <div className="price">From ₹6,299 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./i9-pro-10-ei9027-led-projector-egate-original-imah5e3bggu5qcgp.webp" alt="p6"/>
          <div className="card-body">
            <h6 className="card-title text-truncate">Projectors</h6>
            <div className="price">From ₹6,990 </div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="./-original-imah9ax89ghhgbyg.webp" alt="p6"/>
          <div className="card-body">
            <h6 className="card-title text-truncate">TV</h6>
            <div className="price">From ₹20,990 </div>
          </div>
        </div>
      </div> */}
   {/* </div> */}
    <ProductSection title="Best of Electronics" category="electronics" />

   
    {/* <div className="section-card mt-3">
      <div className="section-head">
        <h5>Jewellery</h5>
        <Link className="btn btn-sm btn-outline-primary" to="#">VIEW ALL</Link>
      </div> */}
      {/* <div className="product-scroller">
        <div className="card product-card text-center">
          <img src="./119766-flair-original-imag9nzubznagufg (1).webp" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Top Selling Stationery</h6>
            <div className="price"> From ₹49 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.webp" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Best of Action Toys</h6>
            <div className="price">Up to 70% off </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.webp" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Dry Fruits</h6>
            <div className="price">Upto 75% off </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93 (1).webp" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Remote Control Toys</h6>
            <div className="price">From ₹1,299</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="./510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.webp" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Food Spreads</h6>
            <div className="price">Up to 75% off</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="./4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.webp" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Soft Toy</h6>
            <div className="price">Up to 70% off</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="./-original-imagbwf3wvhzfh5z.webp" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Coffee Powder</h6>
            <div className="price">Up to 80% off</div>
          </div>
        </div>
      </div> */}
     {/* </div> */}
     <ProductSection title="Trending in Jewellery" category="jewelery" />

     {/* <div className="section-card mt-3">
      <div className="section-head">
        <h5>Men's Clothing</h5>
        <Link className="btn btn-sm btn-outline-primary" to="#">VIEW ALL</Link>
      </div> */}
      {/* <div className="product-scroller">
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Puzzles and Cubes</h6>
            <div className="price"> From ₹79 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Musical Toys</h6>
            <div className="price">Under 199 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Tea Powder</h6>
            <div className="price">Upto 75% off </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/ks6ef0w0/cereal-flake/q/w/h/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Breakfast Cereal</h6>
            <div className="price">Upto 75% off</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/krgohow0/learning-toy/1/a/h/mapology-ultimate-indian-combo-india-with-capitals-map-puzzle-original-imag59f2vyh63v9x.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Learning & Education</h6>
            <div className="price">Up to 80% off</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/kcjexe80/honey/w/y/4/1-honey-saffola-original-imaftn9ppz2shxzg.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Honey</h6>
            <div className="price">Up to 75% off</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/vitamin-supplement/u/5/a/60-hair-vitamins-with-biotin-iron-for-hair-regrowth-hairfall-original-imah3nvzbgqkqggx.jpeg?q=70" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Beauty Supplements</h6>
            <div className="price">Min 30% off</div>
          </div>
        </div>
      </div> */}
    {/* </div> */}
          <ProductSection title="Men's Fashion" category="men's clothing" />

     {/* <div className="section-card mt-3">
      <div className="section-head">
        <h5>Furniture Deals</h5>
        <Link className="btn btn-sm btn-outline-primary" to="#">VIEW ALL</Link>
      </div>
      <div className="product-scroller">
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/l4d2ljk0/sofa-sectional/x/j/l/left-facing-180-34-aqua-blue-241-3-polyester-80-steffan-l-sheped-original-imagf9zer8ptqhrh.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Sofa & Sectional</h6>
            <div className="price"> From ₹7,999 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/office-study-chair/z/t/2/1-teak-sagun-58-42-js-29-beaatho-121-92-original-imagrwgshgp2bhwv.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Office Study Chairs</h6>
            <div className="price">From ₹1,890</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/jm9hfgw0/bed/h/g/g/king-na-rosewood-sheesham-bkwl05nhbs0401d1p-flipkart-perfect-original-imaf97cwhvgnwg95.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Beds</h6>
            <div className="price">From ₹1,790</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/kb9ou4w0/tv-entertainment-unit/f/x/h/particle-board-za0022wh-barewether-white-with-walnut-original-imafsnnntmvsysap.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">TV Units</h6>
            <div className="price">From ₹1,249</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/sofa-bed/3/q/4/-original-imagm9ckhma9u8a3.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Sofa Beds</h6>
            <div className="price">From ₹6,099</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/sofa-set/x/o/p/blue-cotton-3-2-1-1-sofa-set-blue-amorini-aqua-blue-original-imagwgmtf5gu4ycc.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Sofa Set</h6>
            <div className="price">From ₹21,999</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/jsc3ssw0/sofa-bed/z/u/m/double-beige-jute-ritz-sofa-bed-beige-sofame-brown-original-imafdxg7dgg3tkty.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Sofa Beds</h6>
            <div className="price">From ₹6,099</div>
          </div>
        </div>
      </div>
    </div> */}
    <ProductSection title="Women's Fashion" category="women's clothing" />

     <div className="section-card mt-3">
      <div className="section-head">
        <h5>Fashion Top Deals</h5>
        <Link className="btn btn-sm btn-outline-primary" to="#">VIEW ALL</Link>
      </div>
      <div className="product-scroller">
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/shoe/s/c/x/-original-imagn9na9ysruzgs.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Puma,Addidas...</h6>
            <div className="price">Min. 40% off </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/shirt/5/e/s/l-nb-sh-3742-pnk-nobarr-original-imaguf2yrca2duph.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Women's Shirts</h6>
            <div className="price">Min. 70% off</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/x/r/l-beniciabluedischarge-charvi-fashion-original-imahf4ftmzfhvzkh.jpeg?q=70" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Women Dresses</h6>
            <div className="price">50-80% off </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/r/0/m-24p3p99j4207i-united-colors-of-benetton-original-imagzzghfrfuztbq.jpeg?q=70" />
          <div className="card-body">
            <h6 className="card-title text-truncate">United Colors of Benetton</h6>
            <div className="price">Upto 80% off</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/o/2/7/11-12-years-boy24-rn13-ath-alan-jones-original-imahfhk2gjgmmhwu.jpeg?q=70" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Alan Jones</h6>
            <div className="price">Under ₹499</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/420/420/xif0q/t-shirt/g/u/6/m-82091475-try-this-original-imahd2hterrzs6fk.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Men's T-shirts</h6>
            <div className="price">Min. 50% off</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/420/420/xif0q/shirt/e/k/c/l-combo-st-black-white-combraided-original-imahauh2xbyycxvg.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Casual Shirts</h6>
            <div className="price">Special Offer</div>
          </div>
        </div>
      </div>
    </div>
     <div className="section-card mt-3">
      <div className="section-head">
        <h5>Top Deals</h5>
        <Link className="btn btn-sm btn-outline-primary" to="#">VIEW ALL</Link>
      </div>
      <div className="product-scroller">
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/tablet/u/u/n/-original-imahayydffmgtmyr.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Apple Ipads</h6>
            <div className="price">Shop Now!</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/perfume/a/k/i/100-mystic-bloom-perfume-for-women-floral-musky-notes-long-original-imahbyjrakcvmgqh.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Perfumes & more</h6>
            <div className="price">Min 50% off </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/240/240/image/345cef25f4179b5c.jpg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Bata,Khadim's...</h6>
            <div className="price">Upto 75% off </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/kp2y2kw0/instant-camera/3/z/r/treasure-box-mini-11-instax-mini-11-fujifilm-original-imag3efzmkzvretx.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Instax Cameras</h6>
            <div className="price">From ₹3,999</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/chocolate/v/5/h/150-rakhi-chocolate-gift-pack-for-sister-with-roli-chawal-and-original-imahd9zyaamfwygd.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Chocolates</h6>
            <div className="price">Up to 65% off</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/sandal/w/l/0/-original-imaggcb2jp2a7dzk.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Allen Solly & Van He...</h6>
            <div className="price">Min. 40% off</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/camera-bag/shoulder-bag/8/x/0/dslr-slr-camera-lens-shoulder-printed-backpack-bnp-0197p-2-red-original-imahf35ffhhzymz2.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Camera Bags</h6>
            <div className="price">Min 50% off</div>
          </div>
        </div>
      </div>
    </div>
     <div className="section-card mt-3">
      <div className="section-head">
        <h5>Pick Your Styles</h5>
        <Link className="btn btn-sm btn-outline-primary" to="#">VIEW ALL</Link>
      </div>
      <div className="product-scroller">
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/torch/a/y/1/3-1-3-mode-flashlight-2000mah-li-ion-battery-400-lm-ip44-type-c-original-imah4bzxj728tysk.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Torches</h6>
            <div className="price"> From ₹139 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/wall-clock/e/n/d/wall-clock-for-home-decore-28-wallclock-1-ga-analog-gulabi-art-original-imah2xxdydfj9suz.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Wall Clock</h6>
            <div className="price"> From ₹149 </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/umbrella/l/o/y/39-4-1pc-auto-8-ribs-umbrella-for-sun-rain-protection-man-woman-original-imahycxchaycxsrz.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Umbrellas</h6>
            <div className="price">Up to 85% off </div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/kziqvm80/gas-stove/j/n/h/4-13-40380-prestige-64-original-imagbgc53mdrdbys.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Gas Stoves</h6>
            <div className="price">From ₹999</div>
          </div>
        </div>
        <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/flap/240/240/image/f1ffa6330a602013.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Bags,Trolleys,Lugg...</h6>
            <div className="price">50-70%+Extra 10%</div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/chopper/a/k/i/3-stainless-steel-blade-powerful-mini-handy-quick-450-ml-chopper-original-imagkw7m99qemaqm.jpeg?q=60" />
          <div className="card-body">
            <h6 className="card-title text-truncate">Choppers</h6>
            <div className="price"> From ₹99 </div>
          </div>
        </div>
         <div className="card product-card text-center">
          <img src="https://rukminim1.flixcart.com/image/240/240/xif0q/slipcover/s/l/r/3-1-1-seater-3-0-47-variksh-417-papsun-65-original-imah7rztr2yf3gkj.jpeg?q=60" alt/>
          <div className="card-body">
            <h6 className="card-title text-truncate">Sofa Covers</h6>
            <div className="price"> From ₹399 </div>
          </div>
        </div>
      </div>
      </div>
    
            <section className="content">
          <h2>Top Stories : Brand Directory</h2>
          <div className="category">
            <span className="title">MOST SEARCHED FOR ON FLIPKART:</span>
            <div className="links">
              <a href="#">Independence Day Sale</a><span className="sep">|</span>
              <a href="#">Ganesh Chaturthi Sale</a><span className="sep">|</span>
              <a href="#">Onam Sale</a><span className="sep">|</span>
              <a href="#">Aadi Sale</a><span className="sep">|</span>
              <a href="#">Infinix GT 30 5g+</a><span className="sep">|</span>
              <a href="#">Samsung Galaxy Z Flip7 5G</a><span className="sep">|</span>
              <a href="#">REDMI Note 14 SE 5G</a><span className="sep">|</span>
              <a href="#">Nothing Phone 3</a><span className="sep">|</span>
              <a href="#">vivo X200 Fe</a><span className="sep">|</span>
              <a href="#">vivo X Fold 5</a><span className="sep">|</span>
              <a href="#">MOTOROLA Edge 60 5G</a><span className="sep">|</span>
              <a href="#">SAMSUNG Galaxy S25 Edge</a><span className="sep">|</span>
              <a href="#">MOTOROLA Razr 60</a><span className="sep">|</span>
              <a href="#">CMF Phone 2 Pro</a><span className="sep">|</span>
              <a href="#">Google Pixel 9A</a><span className="sep">|</span>
              <a href="#">SAMSUNG F16</a><span className="sep">|</span>
              <a href="#">Mobile</a><span className="sep">|</span>
              <a href="#">POCO M7</a><span className="sep">|</span>
              <a href="#">Nothing Phone 3a</a><span className="sep">|</span>
              <a href="#">iPhone 16e</a><span className="sep">|</span>
              <a href="#">SAMSUNG Galaxy S25 Ultra</a><span className="sep">|</span>
              <a href="#">SAMSUNG Galaxy S25 Plus</a><span className="sep">|</span>
              <a href="#">SAMSUNG Galaxy S25</a><span className="sep">|</span>
              <a href="#">iPhone 16</a><span className="sep">|</span>
              <a href="#">iPhone 16 Plus</a><span className="sep">|</span>
              <a href="#">iPhone 16 Pro</a><span className="sep">|</span>
              <a href="#">iPhone 16 Pro Max</a><span className="sep">|</span>
              <a href="#">iPhone 16s</a><span className="sep">|</span>
              <a href="#">iQOO 13</a><span className="sep">|</span>
              <a href="#">Infinix Note 40 Pro 5G</a><span className="sep">|</span>
              <a href="#">iPhone 15</a><span className="sep">|</span>
              <a href="#">Infinix Note 40 5G</a><span className="sep">|</span>
              <a href="#">iPhone 15 Plus</a><span className="sep">|</span>
              <a href="#">Motorola g04s</a><span className="sep">|</span>
              <a href="#">Vivo x 100</a><span className="sep">|</span>
              <a href="#">OnePlus Nord CE 3 Lite 5G</a><span className="sep">|</span>
              <a href="#">SAMSUNG Flip5</a><span className="sep">|</span>
              <a href="#">SAMSUNG Fold5</a><span className="sep">|</span>
              <a href="#">Flipkart Axis Bank Super Elite Credit card</a><span className="sep">|</span>
              <a href="#">5G Mobile Phones</a><span className="sep">|</span>
              <a href="#">Moto Edge 40</a><span className="sep">|</span>
              <a href="#">Grievance Redressal</a><span className="sep">|</span>
              <a href="#">Help Centre</a><span className="sep">|</span>
              <a href="#">Track Orders</a><span className="sep">|</span>
              <a href="#">Manage Orders</a><span className="sep">|</span>
              <a href="#">Return Orders</a><span className="sep">|</span>
              <a href="#">Gift Cards Store</a><span className="sep">|</span>
              <a href="#">Flipkart Axis Bank Credit Card</a>
            </div>
          </div>

          <div className="category">
            <span className="title">MOBILES</span>
            <div className="links">
               <Link to="/Mobile">One Plus Nord</Link><span className="sep">|</span>
              <a href="#">Infinix SMART 10</a><span className="sep">|</span>
              <a href="#">OPPO Reno 14 Pro</a><span className="sep">|</span>
              <a href="#">Motorola g64 5G</a><span className="sep">|</span>
              <a href="#">OPPO Reno 12</a><span className="sep">|</span>
              <a href="#">Motorola Edge 50 Fusion</a><span className="sep">|</span>
              <a href="#">REDMI 12 5G</a><span className="sep">|</span>
              <a href="#">REDMI Note 13 5G</a><span className="sep">|</span>
              <a href="#">Realme 12+ 5G</a><span className="sep">|</span>
              <a href="#">POCO C65</a><span className="sep">|</span>
              <a href="#">Motorola G84</a><span className="sep">|</span>
              <a href="#">Realme C53</a><span className="sep">|</span>
              <a href="#">Infinix Smart 8</a><span className="sep">|</span>
              <a href="#">Samsung Galaxy S23 5G</a><span className="sep">|</span>
              <a href="#">Samsung Galaxy S21 FE 5G Qualcomm</a><span className="sep">|</span>
              <a href="#">vivo V30</a><span className="sep">|</span>
              <a href="#">Samsung Galaxy S24 5G</a><span className="sep">|</span>
              <a href="#">Samsung Galaxy S24+ 5G</a><span className="sep">|</span>
              <a href="#">SAMSUNG Galaxy S21 FE 5G</a><span className="sep">|</span>
              <a href="#">Infinix HOT 30i</a><span className="sep">|</span>
              <a href="#">Realme 10 Pro 5G</a><span className="sep">|</span>
              <a href="#">REDMI Note 12 Pro 5G</a><span className="sep">|</span>
              <a href="#">Motorola 5g Phone</a><span className="sep">|</span>
              <a href="#">Realme 5g Smartphone</a><span className="sep">|</span>
              <a href="#">Apple 5g Phone</a><span className="sep">|</span>
              <a href="#">Iqoo 5g Phones</a><span className="sep">|</span>
              <a href="#">Oneplus 5g Phones</a><span className="sep">|</span>
              <a href="#">Vivo 5g Phones</a><span className="sep">|</span>
              <a href="#">Oppo 5g Smart Phones</a><span className="sep">|</span>
              <a href="#">4G Mobile</a><span className="sep">|</span>
              <a href="#">Nokia Mobile</a><span className="sep">|</span>
              <a href="#">Samsung Mobile</a><span className="sep">|</span>
              <a href="#">Oppo Mobile</a><span className="sep">|</span>
              <a href="#">Vivo Mobile</a><span className="sep">|</span>
              <a href="#">Apple Mobile</a>
            </div>
          </div>

          <div className="category">
            <span className="title">CAMERA</span>
            <div className="links">
              <a href="#">GoPro Action Camera</a><span className="sep">|</span>
              <a href="#">Nikon Camera</a><span className="sep">|</span>
              <a href="#">Canon Camera</a><span className="sep">|</span>
              <a href="#">Sony Camera</a><span className="sep">|</span>
              <a href="#">Canon DSLR</a><span className="sep">|</span>
              <a href="#">Nikon DSLR</a>
            </div>
          </div>

          <div className="category">
            <span className="title">LAPTOPS</span>
            <div className="links">
              <Link to="/RogAlly">Asus ROG Ally</Link><span className="sep">|</span>
              <Link to="/Laptop">Dell Inspiron Laptop</Link><span className="sep">|</span>
              <a href="#">MacBook Pro M2</a><span className="sep">|</span>
              <a href="#">Premium Laptop</a><span className="sep">|</span>
              <a href="#">ASUS ROG Strix SCAR 16 (2023) Core i9 13th Gen</a><span className="sep">|</span>
              <a href="#">ASUS ROG Zephyrus M16 (2023) Core i9 13th Gen</a><span className="sep">|</span>
              <a href="#">ASUS Zenbook 14 OLED (2022)</a><span className="sep">|</span>
              <a href="#">Realme Book Prime Core i5 11th Gen</a><span className="sep">|</span>
              <a href="#">Microsoft Surface Go Pentium 128GB</a><span className="sep">|</span>
              <a href="#">Apple Laptops</a><span className="sep">|</span>
              <a href="#">Acer Laptops</a><span className="sep">|</span>
              <a href="#">Lenovo Laptops</a><span className="sep">|</span>
              <a href="#">Asus Laptops</a><span className="sep">|</span>
              <a href="#">HP Laptops</a><span className="sep">|</span>
              <a href="#">Gaming Laptops</a><span className="sep">|</span>
              <a href="#">2 in 1 Laptops</a><span className="sep">|</span>
              <a href="#">Laptops</a><span className="sep">|</span>
              <a href="#">Dell latest laptops 2022</a><span className="sep">|</span>
              <a href="#">HP latest laptops 2022</a><span className="sep">|</span>
              <a href="#">Infinix INBook Y1 Plus</a><span className="sep">|</span>
              <a href="#">SAMSUNG Galaxy Book3</a><span className="sep">|</span>
              <a href="#">12th Gen Intel Core Laptops</a>
            </div>
          </div>

          <div className="category">
            <span className="title">TVS</span>
            <div className="links">
              <a href="#">TV</a><span className="sep">|</span>
              <a href="#">LG TV</a><span className="sep">|</span>
              <a href="#">Sony TV</a><span className="sep">|</span>
              <a href="#">Samsung TV</a><span className="sep">|</span>
              <a href="#">TCL TV</a><span className="sep">|</span>
              <a href="#">Mi TV</a><span className="sep">|</span>
              <a href="#">Panasonic TV</a><span className="sep">|</span>
              <a href="#">OnePlus TVs</a><span className="sep">|</span>
              <a href="#">Iffalcon TV</a><span className="sep">|</span>
              <a href="#">32 Inch TV</a><span className="sep">|</span>
              <a href="#">40 Inch TV</a><span className="sep">|</span>
              <a href="#">43 Inch TV</a><span className="sep">|</span>
              <a href="#">50 Inch TV</a><span className="sep">|</span>
              <a href="#">55 Inch TV</a><span className="sep">|</span>
              <a href="#">65 Inch TV</a><span className="sep">|</span>
              <a href="#">75 Inch TV</a><span className="sep">|</span>
              <a href="#">LED TV</a><span className="sep">|</span>
              <a href="#">OLED TV</a><span className="sep">|</span>
              <a href="#">QLED TV</a>
            </div>
          </div>

          <div className="category">
            <span className="title">LARGE APPLIANCES:</span>
            <div className="links">
              <Link to="/Pendrive">Pendrive</Link><span className="sep">|</span>
              <a href="#">Television</a><span className="sep">|</span>
              <a href="#">Washing Machines</a><span className="sep">|</span>
              <a href="#">Refrigerators</a><span className="sep">|</span>
              <a href="#">Air Conditioners</a><span className="sep">|</span>
              <a href="#">Coffee Machine</a><span className="sep">|</span>
              <a href="#">Electric Cookers</a><span className="sep">|</span>
              <a href="#">Electric Jug(Heater) / Travel Kettles</a><span className="sep">|</span>
              <a href="#">Induction Cooktops</a><span className="sep">|</span>
              <a href="#">Inverters / stabilizer</a><span className="sep">|</span>
              <a href="#">Irons / Iron Box</a><span className="sep">|</span>
              <a href="#">Mixer Grinder Juicer</a><span className="sep">|</span>
              <a href="#">Wet Grinders</a><span className="sep">|</span>
              <a href="#">French Press</a><span className="sep">|</span>
              <a href="#">Milk/Coffee Frother</a><span className="sep">|</span>
              <a href="#">Chimneys</a><span className="sep">|</span>
              <a href="#">Microwave Ovens</a><span className="sep">|</span>
              <a href="#">Vacuum Cleaners</a><span className="sep">|</span>
              <a href="#">Water Purifier</a><span className="sep">|</span>
              <a href="#">Fan</a>
            </div>
          </div>

          <div className="category">
            <span className="title">CLOTHING</span>
            <div className="links">
              <a href="#">Sarees</a><span className="sep">|</span>
              <a href="#">Men's Jeans</a><span className="sep">|</span>
              <a href="#">Green bridal lehenga</a><span className="sep">|</span>
              <a href="#">Tops</a><span className="sep">|</span>
              <a href="#">Apron for Doctors</a><span className="sep">|</span>
              <a href="#">Mens Footwear</a><span className="sep">|</span>
              <a href="#">Sunglasses</a><span className="sep">|</span>
              <a href="#">Bridal Blouse</a><span className="sep">|</span>
              <a href="#">Half saree blouse designs</a><span className="sep">|</span>
              <a href="#">Designer blouses</a><span className="sep">|</span>
              <a href="#">Women's Haldi Dress</a><span className="sep">|</span>
              <a href="#">Women's Mehndi Dress</a><span className="sep">|</span>
              <a href="#">Lavender Saree</a><span className="sep">|</span>
              <a href="#">Blouse designs</a><span className="sep">|</span>
              <a href="#">Shirts</a><span className="sep">|</span>
              <a href="#">Cotton saree blouse designs</a><span className="sep">|</span>
              <a href="#">Tshirts</a><span className="sep">|</span>
              <a href="#">Dresses</a><span className="sep">|</span>
              <a href="#">One pieces</a><span className="sep">|</span>
              <a href="#">Groom wedding sherwani</a><span className="sep">|</span>
              <a href="#">Designer Salwar Suits</a><span className="sep">|</span>
              <a href="#">Bra</a><span className="sep">|</span>
              <a href="#">Cotton simple blouse designs</a><span className="sep">|</span>
              <a href="#">Banarasi saree blouse designs</a><span className="sep">|</span>
              <a href="#">Stylish blouse astin design</a><span className="sep">|</span>
              <a href="#">Track Pant</a><span className="sep">|</span>
              <a href="#">Blouse neck designs</a><span className="sep">|</span>
              <a href="#">Jodhpur pants</a>
            </div>
          </div>

          <div className="category">
            <span className="title">FOOTWEAR:</span>
            <div className="links">
              <a href="#">Adidas Shoes</a><span className="sep">|</span>
              <a href="#">Reebok Shoes</a><span className="sep">|</span>
              <a href="#">Nike Shoes</a><span className="sep">|</span>
              <a href="#">Puma Shoes</a><span className="sep">|</span>
              <a href="#">Boots</a><span className="sep">|</span>
              <a href="#">Bata Shoes</a><span className="sep">|</span>
              <a href="#">Crocs</a><span className="sep">|</span>
              <a href="#">Woodland Shoes</a><span className="sep">|</span>
              <a href="#">Skechers Shoes</a><span className="sep">|</span>
              <a href="#">Sneakers</a><span className="sep">|</span>
              <a href="#">Womens Boots</a><span className="sep">|</span>
              <a href="#">Sports Shoes</a><span className="sep">|</span>
              <a href="#">Loafers</a><span className="sep">|</span>
              <a href="#">Sandals</a><span className="sep">|</span>
              <a href="#">Lotto Sports Shoes</a>
            </div>
          </div>
        </section>
      </main>


    </div>
      <footer className="bg-dark text-white pt-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-2">
              <h6 className="text-uppercase fw-bold">About</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Flipkart Stories</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Press</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Corporate Information</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <h6 className="text-uppercase fw-bold">Help</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white-50 text-decoration-none">Payments</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Shipping</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Cancellation & Returns</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">FAQ</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Report Infringement</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <h6 className="text-uppercase fw-bold">Policy</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white-50 text-decoration-none">Return Policy</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Terms of Use</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Security</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Sitemap</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">EPR Compliance</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <h6 className="text-uppercase fw-bold">Social</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white-50 text-decoration-none">Facebook</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Twitter</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">YouTube</a></li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <h6 className="text-uppercase fw-bold">Mail Us:</h6>
              <p className="small text-white-50 mb-3">Flipkart Internet Private Limited,<br/>Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br/>Outer Ring Road, Devarabeesanahalli Village,<br/>Bengaluru, 560103,<br/>Karnataka, India</p>

              <h6 className="text-uppercase fw-bold">Registered Office Address:</h6>
              <p className="small text-white-50">Flipkart Internet Private Limited,<br/>Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br/>Outer Ring Road, Devarabeesanahalli Village,<br/>Bengaluru, 560103,<br/>Karnataka, India<br/>CIN : U51109KA2012PTC066107<br/>Telephone: 044-45614700</p>
            </div>
          </div>

          <hr className="border-secondary my-4" />

          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex gap-4">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-shop me-1" viewBox="0 0 16 16">
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
                </svg> Become a Seller
              </a>

              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star me-1" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg> Advertise
              </a>

              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-gift me-1" viewBox="0 0 16 16">
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                </svg> Gift Cards
              </a>

              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-question-circle me-1" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                </svg> Help Center
              </a>
            </div>

            <p className="mb-0 small text-white-50">© 2007-2025 Flipkart.com</p>

            <div className="payment-logos d-flex flex-wrap align-items-center gap-2">
              <img alt="payments" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" height="25" />
            </div>
          </div>
        </div>
      </footer>
  
  </>
  )
}
function ProductSection({ title, category }) {
  // props
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <main className="container-fluid mt-3">
      <div className="section-card">
        <div className="section-head">
          <h5>{title}</h5>
          <Link className="btn btn-sm btn-outline-primary" to="#">
            VIEW ALL
          </Link>
        </div>

        <div className="product-scroller">
          {products.map((product) => (
            <div key={product.id} className="card product-card text-center">
              <Link
                to={`/API/products/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title text-truncate">{product.title}</h6>
                  <div className="price">₹{product.price}</div>
                </div>
              </Link>
            </div>
          ))}
        </div> 
      </div>   
    </main>   
  );
}

export default HomepageusingAPI