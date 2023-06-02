import React from "react"
import "./Home.css"
import bg1 from "../../assets/img/slide/slide1.jpg"
import LOGO from "../../assets/img/logo.png"

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="input_group">
          <button className="btn btn-secondary" type="button">
            <i className="bi bi-search"></i>
          </button>
          <input type="text" placeholder="جستجو ..." />
        </div>
        <img src={LOGO} alt="LOGO" />
      </div>
      <div className="img_slider">
        <img src={bg1} alt="home img" />
      </div>
    </div>
  )
}

export default Home
