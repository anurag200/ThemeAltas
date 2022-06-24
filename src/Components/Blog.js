import React from 'react'
import Blogcard from './Blogcard'
import Navbar from './Navbar'
import Footer from './Footer'
import { blog } from './Carddata'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  return (
    <>
      <Navbar />
      <div className="blog mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {blog.map((cur, index) => {
                  return (
                    <Blogcard
                      img={cur.img}
                      heading={cur.heading}
                      author={cur.author}
                      para={cur.para}
                      date={cur.date}
                      ind={index}
                    />
                  )
                })}
              </div>
              <div className="page text-center">
                <button className="paginations btn btn-warning mt-5 mb-4 py-3">
                  Load more
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row mt-2">
                <div className="blogcat mt-2">
                  <div className="row">
                    <div className="col-4 ">
                      <img
                        src={require('../Components/imgs//blog1.png').default}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-8 p-0">
                      <Link to="#">
                        Top 10 Best Ready-To-Use WordPress Themes To Kick-Start
                        Your Webs...
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blogcat mt-2">
                  <div className="row">
                    <div className="col-4 ">
                      <img
                        src={require('../Components/imgs//blog2.png').default}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-8 p-0">
                      <Link to="#">
                        Top 10 Ultimate Startup Word Press Themes in 2021
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blogcat mt-2">
                  <div className="row">
                    <div className="col-4 ">
                      <img
                        src={require('../Components/imgs//blog3.png').default}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-8 p-0">
                      <Link to="#">
                        Top 10 Tour and Travel WordPress Themes
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blogcat mt-2">
                  <div className="row">
                    <div className="col-4 ">
                      <img
                        src={require('../Components/imgs//blog4.png').default}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-8 p-0">
                      <Link to="#">
                        Top 10 Most Customizable WordPress Themes of 2021 to
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cat mt-3 shadow">
                <h2>CATEGORIES</h2>
                <div className="catlist">
                  <ul>
                    <li>
                      <Link to="#">Wordpress</Link>
                    </li>
                    <li>
                      <Link to="#">Shopify</Link>
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

export default Blog
