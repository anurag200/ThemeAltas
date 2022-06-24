import React from 'react'
import { Link } from 'react-router-dom'
const Alltheme = (props) => {
  return (
    <>
      <div className="col-md-12 col-12 p-0">
        <div className="cards shadow">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <div className="img position-relative">
                <img src={props.img.default} alt="" className="img-fluid" />
              </div>
            </div>
            <div className=" col-md-12 col-lg-7">
              <div className="texts p-3">
                <Link className="text-decoration-none">
                  <h2>{props.heading}</h2>
                </Link>
                <div className="author">
                  <p className="d-inline-block mb-0">
                    By - <span>Themeforest</span>
                  </p>
                  <span className="line"></span>
                  <p className="rating d-inline-block mb-0">
                    Rating - {props.rating}
                  </p>
                </div>
                <p className="details">{props.para}</p>
                <div className="buttons mt-3">
                  <div className="row">
                    <div className="col-8">
                      <button className="btn btn-outline-info shopingbtn mr-1">
                        <i className="fas fa-shopping-cart"></i>
                      </button>
                      <button className="btn btn-outline-info mr-1 shopingbtn">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="btn btn-outline-warning detailsbtnnn">
                        Details
                      </button>
                    </div>
                    <div className="col-4 text-right">
                      <h2 className="text-danger">${props.price}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Alltheme
