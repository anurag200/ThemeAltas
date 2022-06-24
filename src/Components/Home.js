import React from 'react'
import Navbar from './Navbar'
import ThemeCard from './ThemeCard'
import Tooltips from './Tooltips'
import { trending, wordpress, magento } from './Carddata'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="wrap-3 ">
        <div className="home">
          <div className="container">
            <div className="text text-center">
              <h2 className="w-100">
                Templates, PHP Scripts, Graphics and Codes starting from $2
              </h2>
              <div className="inp">
                <input
                  type="text"
                  className="w-75 py-2 px-4 rounded border-0"
                  placeholder="Search themes & Scripts eg.ecommerce,creative,education,food"
                />
                <button className="position-absolute">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-4 ">
        <div className="tip text-center">
          <div className="container">
            <h2 className="text-primary">Our Newest Items</h2>
            <h3>
              Explore our newest items, from to , we always have something
              interesting for you.
            </h3>
            <div className="row mt-10 ">
              <div className="col-12 col-md-10 mx-auto my-1">
                <div className="row justify-content-center ttt">
                  <Tooltips
                    img={require('../Components/imgs/tips/img1.jpg')}
                    cont={'Wokie - multipurpose Shopify theme'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img2.png')}
                    cont={'Feello - Personal Blog XD Template'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img3.png')}
                    cont={'Golo  - Directory & Listing HTML Template'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img4.png')}
                    cont={'Whatsapp Fake chat Generator Script'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img5.jpg')}
                    cont={'Websub link Manager PHP Script'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img7.jpg')}
                    cont={'VPN Script - Advanced VPN Management Scripts'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img8.jpg')}
                    cont={'VPN Script - Advanced VPN Management Scripts'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img9.jpg')}
                    cont={'Shareplus video download'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img10.jpg')}
                    cont={'Server File Explore - PHP file Manager Scripts'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img11.jpg')}
                    cont={'SavinLo - Saving Loan Investment Scripts'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img12.jpg')}
                    cont={'ProADs - Online Advertising Network Scripts'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img13.jpg')}
                    cont={'Minght Cloud Mining Scripts'}
                  />
                  <Tooltips
                    img={require('../Components/imgs/tips/img14.jpg')}
                    cont={'VPN Script - Advanced VPN Management Scripts'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-5">
        <div className="container">
          <div className="featured">
            <div className="featured_text">
              <h2 className="text-center">Featured Items Of The Week</h2>
              <h3 className="w-75 text-center mx-auto">
                Explore our best items of the week. App Templates, Themes,
                Plugins, Graphics, Scripts & Code and more.
              </h3>
            </div>
          </div>
          <div className="row">
            <ThemeCard />
          </div>
        </div>
      </div>
      <div className="wrap-6">
        <div className="container">
          <div className="trending">
            <div className="trending_text">
              <h2 className="text-center">Trending Now</h2>
              <h3 className="w-75 text-center mx-auto">
                Product recommendations that includes no. of purchase, customer
                ratings etc. in order to drive your interest.
              </h3>
            </div>
          </div>
          <div className="row">
            {trending.map((cur, ind) => {
              return (
                <div className="col-lg-4 col-md-12 col-12 mt-4" key={ind}>
                  <div className="cards shadow">
                    <div className="img position-relative">
                      <img
                        src={cur.img.default}
                        alt=""
                        className="img-fluid w-100"
                      />
                      <span className="position-absolute">{cur.theme}</span>
                    </div>
                    <div className="texts p-3">
                      <Link to="#" className="text-decoration-none">
                        <h2>{cur.heading}</h2>
                      </Link>
                      <div className="author">
                        <p className="d-inline-block mb-0">
                          By - <span>Themeforest</span>
                        </p>
                        <span className="line"></span>
                        <p className="rating d-inline-block mb-0">
                          Rating - {cur.rating}
                        </p>
                      </div>
                      <div className="buttons mt-4">
                        <div className="row">
                          <div className="col-9">
                            <button className="btn btn-outline-info mr-1 shopingbtn">
                              <i className="fas fa-shopping-cart"></i>
                            </button>
                            <button className="btn btn-outline-info mr-1 shopingbtn ">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-outline-warning detailsbtnnn">
                              Details
                            </button>
                          </div>
                          <div className="col-3 text-right">
                            <h2 className="text-danger">${cur.price}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="wrap-7">
        <div className="container">
          <h2>WORDPRESS THEMES</h2>
          <span className="bigline"></span>
          <div className="row">
            {wordpress.map((cur, index) => {
              console.log('anay')
              return (
                <div className="col-lg-4 col-md-12 col-12 mt-4" key={index}>
                  <div className="cards shadow">
                    <div className="img position-relative overflow-hidden">
                      <img
                        src={cur.img.default}
                        alt=""
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="texts p-3">
                      <Link to="#" className="text-decoration-none">
                        <h2>{cur.heading}</h2>
                      </Link>
                      <div className="buttons mt-4">
                        <div className="row">
                          <div className="col-9">
                            <button className="btn btn-outline-info mr-1 shopingbtn">
                              <i className="fas fa-shopping-cart"></i>
                            </button>
                            <button className="btn btn-outline-info mr-1 shopingbtn ">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-outline-warning detailsbtnnn">
                              Details
                            </button>
                          </div>
                          <div className="col-3 text-right">
                            <h2 className="text-danger">${cur.price}</h2>
                          </div>
                        </div>
                      </div>
                      <p className="date">{cur.date}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <h2 className="mt-4">MAGENTO THEMES</h2>
          <span className="bigline"></span>
          <div className="row">
            {magento.map((cur, key) => {
              return (
                <div className="col-lg-4 col-md-12 col-12 mt-4" key={key}>
                  <div className="cards shadow">
                    <div className="img position-relative overflow-hidden">
                      <img
                        src={cur.img.default}
                        alt=""
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="texts p-3">
                      <Link to="#" className="text-decoration-none">
                        <h2>{cur.heading}</h2>
                      </Link>
                      <div className="buttons mt-4">
                        <div className="row">
                          <div className="col-9">
                            <a
                              href="https://codecanyon.net/item/wordpress-automatic-plugin/1904470?irgwc=1&clickid=Tqb2-cRo5xyLWrgwUx0Mo3QnUkB2THWuTWCIwY0&iradid=275988&irpid=2440653&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_2440653&utm_medium=affiliate&utm_source=impact_radius"
                              className="btn btn-outline-info mr-1 shopingbtn "
                            >
                              <i className="fas fa-shopping-cart"></i>
                            </a>
                            <a
                              href="http://preview.codecanyon.net/item/wordpress-automatic-plugin/full_screen_preview/1904470?_ga=2.159423166.2073279074.1615814569-2068270308.1615279058&irgwc=1&clickid=Tqb2-cRo5xyLWrgwUx0Mo3QnUkB2TFS3TWCIwY0&iradid=275988&irpid=2440653&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_2440653&utm_medium=affiliate&utm_source=impact_radius"
                              className="btn btn-outline-info mr-1  shopingbtn "
                            >
                              <i className="fas fa-eye"></i>
                            </a>
                            <button className="btn btn-outline-warning detailsbtnnn">
                              Details
                            </button>
                          </div>
                          <div className="col-3 text-right">
                            <h2 className="text-danger">${cur.price}</h2>
                          </div>
                        </div>
                      </div>
                      <p className="date">{cur.date}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
