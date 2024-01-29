function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer-content">
              <ul className="footer-content__1">
                <li>
                  <span>Protons</span> Charging
                </li>
                <li>
                  Offering a diverse range of charging solutions for electric vehicles. Power up your journey with Protons Charging Stations.
                </li>
                <li>
                  <a href="tel:+919942860391">
                    <i className="fa-solid fa-phone"></i> &nbsp; +91 9942860391
                  </a>
                </li>
  
                <li>
                  <a
                    href="mailto: welkindevelopers004@gmail.com"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    &nbsp; welkindevelopers004@gmail.com
                  </a>
                </li>
  
                <li>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://protonscharging.com/"
                  >
                    Designed by Welkin Developers
                  </a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Company</li>
                <li>
                  <a href="#home">Locations</a>
                </li>
                <li>
                  <a href="#home">Careers</a>
                </li>
                <li>
                  <a href="#home">Mobile App</a>
                </li>
                <li>
                  <a href="#home">Blog</a>
                </li>
                <li>
                  <a href="#home">How it Works</a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Support</li>
                <li>Report an issue</li>
                <li>Contact us</li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Subscription</li>
                <li>
                  <p>Subscribe for the latest news & updates on electric mobility.</p>
                </li>
                <li>
                  <input type="email" placeholder="Enter Email Address"></input>
                </li>
                <li>
                  <button className="submit-email">Subscribe</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  