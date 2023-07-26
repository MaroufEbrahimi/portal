import React from "react"
import "../Profile/Profile.css"
import "./TeacherProfile.css"
import { teachers } from "../../constants/Data"
import ICONS from "../../constants/Icons"

const TeacherProfile = () => {
  return (
    <div className="teacher_profile">
      {teachers.map((item, index) => (
        <div className="profile_details">
          <div className="content_of_profile teacher_Profile_details">
            <div className="teacher_profile_img">
              <img src={item.teacherImg} />
              <div class="teacher_social_media">
                <a href="" target="_blank">
                  <i class={ICONS.twitter}></i>
                </a>
                <a href={item.teacherGithub} target="_blank">
                  <i class={ICONS.github}></i>
                </a>
                <a href={item.teacherLinkedin} target="_blank">
                  <i class={ICONS.linkedin}></i>
                </a>
                <a href={item.teacherInstagram} target="_blank">
                  <i class={ICONS.instagram}></i>
                </a>
              </div>
            </div>
            <div className="content">
              <div className="content_boxes display_grid ">
                <div className="content_box">
                  <label>نـام</label>
                  <p>{item.teacherName}</p>
                </div>
                <div className="content_box">
                  <label>تـخـلـص</label>
                  <p>{item.teacherLastName}</p>
                </div>
                <div className="content_box">
                  <label>شـمـاره تـمـاس</label>
                  <p>{item.teacherCallNum}</p>
                </div>
                <div className="content_box">
                  <label>ایـمـیل</label>
                  <p>{item.teacherEmail}</p>
                </div>
                <div className="content_box">
                  <label>سـال فـراغـت</label>
                  <p>{item.teacherGraduationYear}</p>
                </div>
                <div className="content_box">
                  <label>نمـبـر تـذکـره</label>
                  <p>{item.teacherIDNumber}</p>
                </div>
                <div className="content_box">
                  <label>رشـتـه تـحـصـلـی</label>
                  <p>{item.teacherFieldofStudy}</p>
                </div>
                <div className="content_box">
                  <label>مـدرک تـحـصـلـی</label>
                  <p>{item.teacherDegreeFfEducation}</p>
                </div>
                <div className="content_box">
                  <label>سـمـت</label>
                  <p>{item.teacherDuty}</p>
                </div>
                <div className="content_box">
                  <label>دیـپارتمـنت</label>
                  <p>{item.teacherDepartement}</p>
                </div>
                <div className="content_box">
                  <label>ولایـت</label>
                  <p>{item.teacherProvince}</p>
                </div>
                <div className="content_box">
                  <label>نـاحـیه</label>
                  <p>{item.teacherAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeacherProfile
