import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import logo from '../Components/imgs/logo.png'
const Navbar = () => {
  const [navstauts, setNavStatus] = useState(false)
  const [drop, setDrop] = useState(false)
  const [dropsen, setDropSen] = useState(false)

  return (
    <>
      <div className="wrap-1 py-1">
        <div className="container">
          <div className="navbars ">
            <div className="row">
              <div className="col-4 col-md-4 col-lg-2">
                <h1 className="mr-5">
                  <NavLink to="/">
                    <img
                      src={require('../Components/imgs/logo.png').default}
                      alt="logo"
                      className="img-fluid"
                    />
                  </NavLink>
                </h1>
              </div>
              <div className="col-md-8 col-4 position-relative search">
                <input
                  type="text"
                  className="w-75 py-2 px-4 rounded border-0"
                  placeholder="Search themes & Scripts eg.ecommerce,creative,education,food"
                />
                <button className="position-absolute">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="col-2 logindetails text-right">
                <div className="user">
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <Link to="">Login</Link>
                  <span>/</span>
                  <Link to="">SignUp</Link>
                </div>
              </div>
            </div>
            <div
              className="togglebutton"
              onClick={() => setNavStatus(!navstauts)}
            >
              <span className="tbtn">
                <i className="fas fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-2 wraphide">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <ul className="drops">
                  <li>
                    <NavLink to="/category/wordpresstheme">
                      Wordpress Themes
                    </NavLink>
                    <span className="droptabs">
                      <i className="fas fa-angle-down"></i>
                    </span>
                    <div className="dropdowns">
                      <ul>
                        <li>
                          <NavLink to="/subcategory/blog">
                            Blog / Magazine
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/subcategory/buddypress">
                            BuddyPress
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/subcategory/corporate">
                            Corporate
                          </NavLink>
                        </li>
                        <li>
                          <Link to="#">Creative</Link>
                        </li>
                        <li>
                          <Link to="#">Directory & Listings</Link>
                        </li>
                        <li>
                          <Link to="#">eCommerce</Link>
                        </li>
                        <li>
                          <Link to="#">Education</Link>
                        </li>
                        <li>
                          <Link to="#">Elemenator</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/category/ecommerce">eCommerce</NavLink>

                    <span className="droptabs">
                      <i className="fas fa-angle-down"></i>
                    </span>
                    <div className="dropdowns">
                      <ul>
                        <li>
                          <NavLink to="/subcategory/blog">BigCommerce</NavLink>
                        </li>
                        <li>
                          <NavLink to="/subcategory/buddypress">
                            Drupal Commerce
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/subcategory/corporate">
                            Magento Theme
                          </NavLink>
                        </li>
                        <li>
                          <Link to="#">OpenCart</Link>
                        </li>
                        <li>
                          <Link to="#">Os Commerce</Link>
                        </li>
                        <li>
                          <Link to="#">PrestaShop</Link>
                        </li>
                        <li>
                          <Link to="#">Shopify</Link>
                        </li>
                        <li>
                          <Link to="#">WooCommerce</Link>
                        </li>
                        <li>
                          <Link to="#">Ubercart</Link>
                        </li>
                        <li>
                          <Link to="#">Zen cart</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/category/php">PHP Script & Code</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/wordpressplugins">
                      Wordpress Plugins
                    </NavLink>
                  </li>
                  <li>
                    <Link to="">ThemeAtlas Shop</Link>
                  </li>
                  <li>
                    <NavLink to="/blog">Blogs</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {navstauts ? (
        <div className="wrap-2 navhide">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  <ul className="drop">
                    <li>
                      <NavLink to="/category/wordpresstheme">
                        Wordpress Themes
                      </NavLink>
                      <span className="droptab" onClick={() => setDrop(!drop)}>
                        <i className="fas fa-angle-down"></i>
                      </span>
                    </li>
                    {drop ? (
                      <div className="dropdown">
                        <ul>
                          <li>
                            <NavLink to="/subcategory/blog">
                              Blog / Magazine
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/subcategory/buddypress">
                              BuddyPress
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/subcategory/corporate">
                              Corporate
                            </NavLink>
                          </li>
                          <li>
                            <Link to="#">Creative</Link>
                          </li>
                          <li>
                            <Link to="#">Directory & Listings</Link>
                          </li>
                          <li>
                            <Link to="#">eCommerce</Link>
                          </li>
                          <li>
                            <Link to="#">Education</Link>
                          </li>
                          <li>
                            <Link to="#">Elemenator</Link>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                    <li>
                      <NavLink to="/category/ecommerce">eCommerce</NavLink>

                      <span
                        className="droptab"
                        onClick={() => setDropSen(!dropsen)}
                      >
                        <i className="fas fa-angle-down"></i>
                      </span>
                    </li>
                    {dropsen ? (
                      <div className="dropdown">
                        <ul>
                          <li>
                            <NavLink to="/subcategory/blog">
                              BigCommerce
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/subcategory/buddypress">
                              Drupal Commerce
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/subcategory/corporate">
                              Magento Theme
                            </NavLink>
                          </li>
                          <li>
                            <Link to="#">OpenCart</Link>
                          </li>
                          <li>
                            <Link to="#">Os Commerce</Link>
                          </li>
                          <li>
                            <Link to="#">PrestaShop</Link>
                          </li>
                          <li>
                            <Link to="#">Shopify</Link>
                          </li>
                          <li>
                            <Link to="#">WooCommerce</Link>
                          </li>
                          <li>
                            <Link to="#">Ubercart</Link>
                          </li>
                          <li>
                            <Link to="#">Zen cart</Link>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                    <li>
                      <NavLink to="/category/php">PHP Script & Code</NavLink>
                    </li>
                    <li>
                      <NavLink to="/category/wordpressplugins">
                        Wordpress Plugins
                      </NavLink>
                    </li>
                    <li>
                      <Link to="">ThemeAtlas Shop</Link>
                    </li>
                    <li>
                      <NavLink to="/blog">Blogs</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Navbar
