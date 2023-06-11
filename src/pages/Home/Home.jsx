import React from "react"
import { useStateValue } from "../../context/StateProvider"
import "./Home.css"
import bg1 from "../../assets/img/slide/slide1.jpg"
import LOGO from "../../assets/img/logo.png"
import faculty from "../../assets/img/imgpost.jpg"

const Home = () => {
  const [{ term }, dispatch] = useStateValue()

  return (
    <div className="home">
      <div className="header">
        <div className="input_group">
          <label>
            <h1>{term}</h1>
            {/* <i className="bi bi-search search__icon"></i>
            <input type="text" placeholder="جستجو ..." /> */}
          </label>
        </div>
        <img src={LOGO} alt="LOGO" />
      </div>
      <div className="showcase">
        <img src={bg1} alt="home img" />
        <div className="showcase_sldier">
          <div className="showcase_slider_details">
            <h1>تعهد امروز تخصص فردا</h1>
            <p>
              یکی از وظایف اساسی و مهم معلمان و مربیان گرامی هوشیار ساختن
              متربیان است، یا متوجه ساختن شاگردان به خودشان است که چگونه به این
              درجات علمی و سنی رسیده اند.
            </p>
          </div>
        </div>
      </div>

      <section className="hariwa_faculties">
        <div class="section_title">
          <h1>پوهنحی ها</h1>
        </div>
        <div className="faculty_boxes">
          <div className="faculty">
            <div className="faculty_img">
              <img src={faculty} alt="img faculty" />
              <div className="img_details">
                <p>این یک متن تستی است</p>
              </div>
            </div>
            <div className="faculty_details">
              <img src={LOGO} alt="" />
              <div>
                <p>120$</p>
                <p>0799999999</p>
              </div>
            </div>
          </div>
          <div className="faculty">
            <div className="faculty_img">
              <img src={faculty} alt="img faculty" />
              <div className="img_details">
                <p>این یک متن تستی است</p>
              </div>
            </div>
            <div className="faculty_details">
              <img src={LOGO} alt="" />
              <div>
                <p>120$</p>
                <p>0799999999</p>
              </div>
            </div>
          </div>
          <div className="faculty">
            <div className="faculty_img">
              <img src={faculty} alt="img faculty" />
              <div className="img_details">
                <p>این یک متن تستی است</p>
              </div>
            </div>
            <div className="faculty_details">
              <img src={LOGO} alt="" />
              <div>
                <p>120$</p>
                <p>0799999999</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
