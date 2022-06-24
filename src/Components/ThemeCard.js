import React from 'react'
import featured from './Carddata'
import { Link } from 'react-router-dom'

const ThemeCard = () => {
  return (
    <>
      {featured.map((cur, ind) => {
        return (
          <div className=" col-lg-4 col-md-12 col-12 mt-4" key={ind}>
            <div className="card shadow">
              <div className="img position-relative overflow-hidden">
                <img src={cur.img.default} alt="" className="img-fluid w-100" />
                <span className="position-absolute">{cur.theme}</span>
              </div>
              <div className="texts p-3">
                <Link className="text-decoration-none" to="#">
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
                <p className="details mt-2">{cur.para}</p>
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
    </>
  )
}

export default ThemeCard
