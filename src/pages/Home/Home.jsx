import React from "react"
import { useStateValue } from "../../context/StateProvider"
import "./Home.css"
import { eliteStudents } from "../../constants/Data"
import ShowCaseSlider from "../../components/Slider/ShowCaseSlider/ShowCaseSlider"

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

      {/* Main Show Slider */}
      <ShowCaseSlider />
      {/* End of Main Show Slider */}

      {/* Faculties */}
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
      {/* End of Faculties */}

      {/* Elite Students */}
      <section className="elite_students">
        <div class="section_title">
          <h1>محصلان نخبه</h1>
        </div>
        <div className="elite_stu">
          {eliteStudents.map((item) => (
            <div className="elite_stu_card">
              <div className="elite_stu_card_text">
                <p>{item.text}</p>
              </div>
              <div className="elite_stu_card_personalInfo">
                <img src={item.eliteImg} alt="" />
                <p>{item.eliteName}</p>
                <p>{item.studentsOf}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* End of Elite Students */}

      {/* Colleague Institute */}
      <section className="colleague_institute">
        <div class="section_title">
          <h1>نهاد های همکار</h1>
        </div>
      </section>
      {/* End of Colleague Institute */}
    </div>
  )
}

export default Home
