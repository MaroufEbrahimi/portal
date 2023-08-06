import React, { useState } from "react"
import "./TeacherProfile.css"
import "../Profile/Profile.css"
import { teachers } from "../../constants/Data"
import ICONS from "../../constants/Icons"
import { useParams } from "react-router-dom"

const TeacherProfile = () => {
  const { id } = useParams()
  const [teacher, setteacher] = useState(teachers[id - 1])

  return (
    <div className="teacher_profile">
      <div className="profile_details">
        <div className="content_of_profile teacher_Profile_details">
          <div className="teacher_profile_img">
            <img src={teacher?.teacherImg} />
            <div class="teacher_social_media">
              <a href="" target="_blank">
                <i class={ICONS.twitter}></i>
              </a>
              <a href={teacher?.teacherGithub} target="_blank">
                <i class={ICONS.github}></i>
              </a>
              <a href={teacher?.teacherLinkedin} target="_blank">
                <i class={ICONS.linkedin}></i>
              </a>
              <a href={teacher?.teacherInstagram} target="_blank">
                <i class={ICONS.instagram}></i>
              </a>
            </div>
          </div>
          <div className="content">
            <div className="content_boxes display_grid ">
              <div className="content_box">
                <label>نـام</label>
                <p>{teacher?.teacherName}</p>
              </div>
              <div className="content_box">
                <label>تـخـلـص</label>
                <p>{teacher?.teacherLastName}</p>
              </div>
              <div className="content_box">
                <label>شـمـاره تـمـاس</label>
                <p>{teacher?.teacherCallNum}</p>
              </div>
              <div className="content_box">
                <label>ایـمـیل</label>
                <p>{teacher?.teacherEmail}</p>
              </div>
              <div className="content_box">
                <label>سـال فـراغـت</label>
                <p>{teacher?.teacherGraduationYear}</p>
              </div>
              <div className="content_box">
                <label>نمـبـر تـذکـره</label>
                <p>{teacher?.teacherIDNumber}</p>
              </div>
              <div className="content_box">
                <label>رشـتـه تـحـصـلـی</label>
                <p>{teacher?.teacherFieldofStudy}</p>
              </div>
              <div className="content_box">
                <label>مـدرک تـحـصـلـی</label>
                <p>{teacher?.teacherDegreeFfEducation}</p>
              </div>
              <div className="content_box">
                <label>سـمـت</label>
                <p>{teacher?.teacherDuty}</p>
              </div>
              <div className="content_box">
                <label>دیـپارتمـنت</label>
                <p>{teacher?.teacherDepartement}</p>
              </div>
              <div className="content_box">
                <label>ولایـت</label>
                <p>{teacher?.teacherProvince}</p>
              </div>
              <div className="content_box">
                <label>نـاحـیه</label>
                <p>{teacher?.teacherAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile
