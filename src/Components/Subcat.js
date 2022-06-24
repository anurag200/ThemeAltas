import React from 'react'
import Navbar from './Navbar'
import { wordpress } from './Carddata'
import Alltheme from './Alltheme'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Subcat = (props) => {
  return (
    <>
      <Navbar />
      <div className="alltheme">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-7 col-12">
              <div className="subsearch">
                <div className="col-12 position-relative p-0">
                  <input
                    type="text"
                    className="w-100  rounded border-0"
                    placeholder="Search Here"
                  />
                  <button className="position-absolute">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="sort text-right mt-3">
                <label htmlFor="sort">Sort By</label>
                <select name="" id="sort">
                  <option value="">Name/Title</option>
                  <option value="">Most Reviews</option>
                  <option value="">Featured</option>
                  <option value="">Newest First</option>
                  <option value="">Price: Low To High</option>
                  <option value="">Price: High To Low</option>
                </select>
                <span className="line"></span>
              </div>
              {wordpress.map((cur) => {
                if (cur.type === props.cat) {
                  return (
                    <Alltheme
                      img={cur.img}
                      heading={cur.heading}
                      para={cur.para}
                      price={cur.price}
                      rating={cur.rating}
                    />
                  )
                }
              })}
              <div className="page text-center">
                <button className="paginations btn btn-warning mt-5 mb-4 py-3">
                  Load more
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-5">
              <div className="cat mt-3 shadow">
                <h2>CATEGORIES</h2>
                <div className="catlist">
                  <ul>
                    <li>
                      <NavLink to="/category/wordpresstheme">
                        Wordpress Themes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/category/php">Magento Themes</NavLink>
                    </li>
                    <li>
                      <NavLink to="/category/ecommerce">
                        Opencart Templates
                      </NavLink>
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
                      <NavLink to="/category/ecommerce">eCommerce</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Subcat
