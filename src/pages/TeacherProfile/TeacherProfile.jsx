import React from "react"
import "../Profile/Profile.css"
import "./TeacherProfile.css"
import { teachers } from "../../constants/Data"

const TeacherProfile = () => {
  return (
    <div className="teacher_profile">
      {teachers.map((item, index) => (
        <div className="profile_details">
          <div className="content_of_profile border_radius_8">
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
