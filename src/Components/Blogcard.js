import React from 'react'

const Blogcard = (props) => {
  return (
    <>
      <div
        className="col-md-12 col-lg-6 rounded col-12 mt-3 "
        key={props.index}
      >
        <div className="Blog_cards shadow">
          <div className="col-md-12 p-0">
            <div className="img position-relative overflow-hidden">
              <img src={props.img.default} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="texts p-3">
            <h2>{props.heading}</h2>
            <div className="author">
              <p className="d-inline-block mb-0">
                By - <span>{props.author}</span>
              </p>
              <span className="line"></span>
              <p className="date d-inline-block">{props.date}</p>
            </div>
            <p className="details">{props.para}</p>
            <div className="buttons mt-3">
              <button className="btn btn-outline-warning  detailsbtnnn">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogcard
