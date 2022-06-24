import React from 'react'
import Alltheme from './Alltheme'
import Navbar from "./Navbar"
import Footer from "./Footer"
import featured from './Carddata'
import { NavLink } from 'react-router-dom'
const Wordpresstheme = (props) => {
    return (
        <>
            <Navbar />
            <div className="alltheme">

                <div className="container">

                    <div className="row">
                        <div className="col-md-7 col-lg-9">
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
                            {
                                featured.map((cur,ind) => {
                                    if (cur.type === props.cat) {
                                        return (
                                            <Alltheme img={cur.img}
                                                heading={cur.heading}
                                                para={cur.para}
                                                price={cur.price}
                                                rating={cur.rating}
                                                key={ind}
                                            />
                                        )
                                    }
                                })

                            }
                            <div className="page text-center">
                            <button className="paginations btn btn-warning mt-5 mb-4 py-3">Load more</button>

                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-5">
                            <div className="cat mt-2 shadow">
                                <h2>CATEGORIES</h2>
                                <div className="catlist">
                                    <ul>
                                    <li><NavLink to="/category/wordpresstheme">Wordpress Themes</NavLink></li>
                                        <li><NavLink to="/category/php">Magento Themes</NavLink></li>
                                        <li><NavLink to="/category/ecommerce">Opencart Templates</NavLink></li>
                                        <li><NavLink to="/category/php">PHP Script & Code</NavLink></li>
                                        <li><NavLink to="/category/wordpressplugins">Wordpress Plugins</NavLink></li>
                                        <li><NavLink to="/category/ecommerce">eCommerce</NavLink></li>
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

export default Wordpresstheme
