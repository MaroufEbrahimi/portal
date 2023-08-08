import React, { useState, useEffect } from "react"
import { useStateValue } from "../../context/StateProvider"
import "./Home.css"
import ShowCaseSlider from "../../components/Slider/ShowCaseSlider/ShowCaseSlider"
import Footer from "../../components/Footer/Footer"
import { eliteStudents } from "../../constants/Data"
import { colleagueInstitute } from "../../constants/Data"
import APIEndpoints from "../../constants/APIEndpoints"

import field1 from "../../assets/img/fields/0.jpg"
import field2 from "../../assets/img/fields/1.jpg"
import field3 from "../../assets/img/fields/2.jpg"
const images = [field1, field2, field3]

const Home = () => {
  const [{ term }, dispatch] = useStateValue()

  const [fields, setFields] = useState([])
  useEffect(() => {
    fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.getAll)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        setFields(data.content)
      })
  }, [])

  return (
    <div className="home">
      {/* Main Show Slider */}
      <ShowCaseSlider />
      {/* End of Main Show Slider */}

      {/* Faculties */}
      <section className="hariwa_faculties fade_in">
        <div className="section_title">
          <h1>پوهنــځی‌ها</h1>
        </div>
        <div className="faculty_boxes display_grid align_items_center text_align_center justify_content_center ">
          {fields.map((f) => {
            return (
              <div className="faculty box_shadow" key={f.id}>
                <div className="faculty_img">
                  <img src={images[f.id - 1]} alt="img faculty" />
                </div>
                <div className="faculty_details display_flex flex_direction_column">
                  <h3>{f.fieldName}</h3>
                  <p>{f.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* End of Faculties */}

      {/* Elite Students */}
      <section className="elite_students fade_in">
        <div className="section_title">
          <h1>محصلان نخبه</h1>
        </div>
        <div className="elite_stu display_grid">
          {eliteStudents.map((item) => (
            <div className="elite_stu_card" key={item.id}>
              <div className="elite_stu_card_text box_shadow">
                <p>{item.text}</p>
              </div>
              <div className="elite_stu_card_personalInfo">
                <img className="box_shadow" src={item.eliteImg} alt="" />
                <p>{item.eliteName}</p>
                <p>{item.studentsOf}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* End of Elite Students */}

      {/* Colleague Institute */}
      <section className="colleague_institute fade_in">
        <div className="section_title">
          <h1>نهاد های همکار</h1>
        </div>
        <div className="colleague_institute_boxes display_grid">
          {colleagueInstitute.map((itemImg) => (
            <div
              key={itemImg.id}
              className="colleague_institute_box display_flex align_items_center justify_content_center"
              title={itemImg.title}
            >
              <img src={itemImg.imgInstitute} alt={itemImg.alt} />
            </div>
          ))}
        </div>
      </section>
      {/* End of Colleague Institute */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
