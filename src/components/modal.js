import React from 'react'
import '../stylesheets/modal.css'

function Modal({name, image, content, close, trailer, date, rating}) {
  return (
    <div className='modalBackground'>
      <header style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}")`,
      backgroundPosition: "center center"
      }} className='modalHeader'>
      <div className="modal">
          <div className="modal_elements">
            <h1  className="modal_title">{name}</h1>
            <p className='modal_rating'>Rating: {rating ? rating : "null"}</p>
            <p className="modal_date">Release date: {date? date: "null"}</p>
            <h3 className="modal_description">{content}</h3>
            <h2 className="modal_watch">Watch Now</h2>
            <button onClick={trailer} className="modal_play modal_btn">&#9654; Play</button>
            <button className="modal_list modal_btn"><span className="plus">&#43;</span> My List</button>
          </div>
          <div className='modal_fade'></div>
          <div className='modal_fade2'></div>
          <div onClick={close} className='closeButton'><i className="fa-regular fa-circle-xmark"></i></div>
      </div>
      </header>
    </div>
  )
}

export default Modal

