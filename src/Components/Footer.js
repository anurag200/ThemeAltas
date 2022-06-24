import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <h2>INFORMATION</h2>
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h2>CATEGORY</h2>
              <ul>
                <li>
                  <Link to="#">Freebies</Link>
                </li>
                <li>
                  <Link to="#">Magento</Link>
                </li>
                <li>
                  <Link to="#">Free Theme</Link>
                </li>
                <li>
                  <Link to="#">Shopify</Link>
                </li>
                <li>
                  <Link to="#">Plugins</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h2>SUPPORT</h2>
              <ul>
                <li>
                  <Link to="#">Customer Service</Link>
                </li>
                <li>
                  <Link to="#">Disclaimer</Link>
                </li>
                <li>
                  <Link to="#">Cancellation</Link>
                </li>
                <li>
                  <Link to="#">Refund</Link>
                </li>
                <li>
                  <Link to="#">Delivery</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h2>FOLLOW US</h2>
              <ul>
                <li>
                  <Link className="text-primary" to="#">
                    <span>
                      <i className="fab fa-facebook-f"></i>
                    </span>{' '}
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-info" to="#">
                    <span>
                      <i className="fab fa-twitter"></i>
                    </span>{' '}
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link className="text-warning" to="#">
                    {' '}
                    <span>
                      <i className="fas fa-rss"></i>
                    </span>{' '}
                    RSS
                  </Link>
                </li>
                <li>
                  <Link className="text-danger" to="#">
                    <span>
                      <i className="fab fa-pinterest-p"></i>
                    </span>{' '}
                    Pinterest
                  </Link>
                </li>
                <li>
                  <Link className="text-light" to="#">
                    <span>
                      <i className="fab fa-instagram"></i>
                    </span>{' '}
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerblck">
        <div className="container">
          <p className="text-center text-light p-4 m-0 ">
            Copyright © 2021 Themeatlas - All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
