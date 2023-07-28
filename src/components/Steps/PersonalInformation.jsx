import React, { useState, useEffect } from "react"
import "./Steps.css"
import { useStateValue } from "../../context/StateProvider"
import { actionTypes } from "../../context/reducer"
import avatar from "../../assets/img/profile_avatar.png"
import ICONS from "../../constants/Icons"
import APIEndpoints from "../../constants/APIEndpoints"

export const PersonalInformation = ({ updatedMode = false }) => {
  const [{ studentImage, studentPersonalInfo }, dispatch] = useStateValue()
  const [profileImg, setProfileImg] = useState({
    imgUrl: studentImage ? studentImage.url : null,
    file: "",
    isOk: studentImage ? true : false,
  })
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState(
    new Array(studentPersonalInfo?.department?.semesters)
  )
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
        const f = data.content.find((item) => {
          return item.fieldName == studentPersonalInfo?.fieldOfStudy
        })
        setFields(data.content)
        fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.depratments(f?.id))
          .then((res) => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error(res.statusText)
            }
          })
          .then((data) => {
            setDepartments(data)
            let sem = []
            for (let i = 1; i <= data[0].semesters; i++) sem.push(i)
            setsemesters(sem)
          })
      })
    if (studentPersonalInfo?.department) {
      setsemesters(studentPersonalInfo?.department?.semesters)
    }
  }, [studentPersonalInfo])

  // handle input change of profile image
  const setProfileImgInput = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    setProfileImg({ url: url, file: e.target.files[0], isOk: true })
    dispatch({
      type: actionTypes.ADD_STUDENT_IMAGE,
      payload: {
        file: e.target.files[0],
        url: url,
        isOk: true,
      },
    })
  }

  const handleInputChangeValue = (e, inputName) => {
    switch (inputName) {
      case "name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            name: e.target.value,
          },
        })
        break
      }
      case "lastname": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            lastName: e.target.value,
          },
        })
        break
      }
      case "fathername": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            fatherName: e.target.value,
          },
        })
        break
      }
      case "grandfathername": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            grandFatherName: e.target.value,
          },
        })
        break
      }
      case "dob": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            dob: e.target.value,
          },
        })
        break
      }
      case "motherTongue": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            motherTongue: e.target.value,
          },
        })
        break
      }
      case "maritalStatus": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            maritalStatus: e.target.value,
          },
        })
        break
      }
      case "gender": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            gender: e.target.value,
          },
        })
        break
      }
      case "email": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            email: e.target.value,
          },
        })
        break
      }
      case "phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            phoneNumber: e.target.value,
          },
        })
        break
      }
      case "highSchool": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            highSchool: e.target.value,
          },
        })
        break
      }
      case "schoolGraduationDate": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            schoolGraduationDate: e.target.value,
          },
        })
        break
      }
      case "joinedDate": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            joinedDate: e.target.value,
          },
        })
        break
      }
      case "fieldOfStudy": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            fieldOfStudy: e.target.value,
          },
        })
        const f = fields.find((item) => {
          return item.fieldName == e.target.value
        })
        console.log("filed name", f)
        fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.depratments(f.id))
          .then((res) => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error(res.statusText)
            }
          })
          .then((data) => {
            setDepartments(data)
            let sem = []
            for (let i = 1; i <= data[0].semesters; i++) sem.push(i)
            setsemesters(sem)
          })
        break
      }
      case "department": {
        const department = departments.find((item) => {
          return item.departmentName == e.target.value
        })
        let sem = []
        for (let i = 1; i <= department.semesters; i++) sem.push(i)
        setsemesters(sem)

        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            department: e.target.value,
          },
        })
        break
      }
      case "semester": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            semester: e.target.value,
          },
        })
        break
      }
      case "password": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            password: e.target.value,
          },
        })
        break
      }
    }
  }
  return (
    <div className="form_details_student personal_info right-to-left">
      {/* Here you can select Profile Student img */}
      <div className="add_img_profile">
        <img
          src={studentImage?.isOk ? studentImage.url : avatar}
          className="input_profile_img"
          alt="user_image"
        />
        <span className="upload_icon display_flex align_items_center justify_content_center cursor_pointer">
          <i className={ICONS.camera}></i>
        </span>
        <input
          type={"file"}
          accept="image/*"
          id="input"
          onChange={(e) => setProfileImgInput(e)}
        />
      </div>

      {/* Personal Information */}
      <div className="add_student_stepper_title">
        <h3>مـعـلـومـات شـخصـی</h3>
      </div>
      <div className="personal_info">
        <section className="build_boxes">
          <div className="build_box">
            <label>نــام</label>
            <input
              type="text"
              value={studentPersonalInfo?.name}
              onChange={(e) => handleInputChangeValue(e, "name")}
              required
            />
          </div>

          <div className="build_box">
            <label>تــخلــص</label>
            <input
              type="text"
              value={studentPersonalInfo?.lastName}
              onChange={(e) => handleInputChangeValue(e, "lastname")}
              required
            />
          </div>

          <div className="build_box">
            <label>نــام پــدر</label>
            <input
              type="text"
              value={studentPersonalInfo?.fatherName}
              onChange={(e) => handleInputChangeValue(e, "fathername")}
              required
            />
          </div>

          <div className="build_box">
            <label>نــام پــدرکــلان</label>
            <input
              type="text"
              value={studentPersonalInfo?.grandFatherName}
              onChange={(e) => handleInputChangeValue(e, "grandfathername")}
              required
            />
          </div>
        </section>

        <section
          className={`build_boxes ${
            updatedMode ? "build_boxes" : "build_boxes_three_boxes"
          }`}
        >
          <div className="build_box">
            <label>زبـان مــادری</label>
            <select
              id="type"
              value={studentPersonalInfo?.motherTongue}
              onChange={(e) => handleInputChangeValue(e, "motherTongue")}
            >
              <option disabled selected>
                زبـان مــادری
              </option>
              <option>دری</option>
              <option>پشتو</option>
            </select>
          </div>

          <div className="build_box">
            <label>جـنسیت</label>
            <select
              id="type"
              value={studentPersonalInfo?.gender}
              onChange={(e) => handleInputChangeValue(e, "gender")}
            >
              <option disabled selected>
                جـنسیت
              </option>
              <option>مرد</option>
              <option>زن</option>
            </select>
          </div>

          <div className="build_box">
            <label>حـالـت مـدنـی</label>
            <select
              id="type"
              value={studentPersonalInfo?.maritalStatus}
              onChange={(e) => handleInputChangeValue(e, "maritalStatus")}
            >
              <option disabled selected>
                حـالـت مـدنـی
              </option>
              <option>مجرد</option>
              <option>متاهل</option>
            </select>
          </div>

          {updatedMode && (
            <>
              <div className="build_box">
                <label>شــمــاره تــمــاس</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                  value={studentPersonalInfo?.phoneNumber}
                  onChange={(e) => handleInputChangeValue(e, "phoneNumber")}
                />
              </div>
            </>
          )}
        </section>

        <section className="build_boxes build_boxes_three_boxes">
          <div className="build_box">
            <label>تـاریـخ تــولــد</label>
            <input
              type="date"
              value={studentPersonalInfo?.dob}
              onChange={(e) => handleInputChangeValue(e, "dob")}
              required
              inputMode="url"
            />
          </div>

          <div className="build_box">
            <label>مکـتب / دارالـعـلوم</label>
            <input
              type="text"
              value={studentPersonalInfo?.highSchool}
              onChange={(e) => handleInputChangeValue(e, "highSchool")}
              required
            />
          </div>

          <div className="build_box">
            <label>سـال فـراغـت</label>
            <input
              type="date"
              value={studentPersonalInfo?.schoolGraduationDate}
              onChange={(e) =>
                handleInputChangeValue(e, "schoolGraduationDate")
              }
              required
              inputMode="url"
            />
          </div>
        </section>

        <section className="build_boxes build_boxes_three_boxes">
          {!updatedMode && (
            <>
              <div className="build_box">
                <label>شــمــاره تــمــاس</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                  value={studentPersonalInfo?.phoneNumber}
                  onChange={(e) => handleInputChangeValue(e, "phoneNumber")}
                />
              </div>

              <div className="build_box email">
                <label>ایــمـیـل</label>
                <input
                  type="email"
                  value={studentPersonalInfo?.email}
                  onChange={(e) => handleInputChangeValue(e, "email")}
                  required
                  placeholder="e.g famous@gmail.com"
                  inputMode="email"
                />
              </div>

              <div className="build_box">
                <label>رمـز حسـاب کـاربـری</label>
                <input
                  type=""
                  value={studentPersonalInfo?.password}
                  onChange={(e) => handleInputChangeValue(e, "password")}
                  required
                />
              </div>
            </>
          )}
        </section>

        <section className="build_boxes">
          <div className="build_box">
            <label>رشـتـه تحـصیـلی</label>
            <select
              id="type"
              value={studentPersonalInfo?.fieldOfStudy}
              onChange={(e) => handleInputChangeValue(e, "fieldOfStudy")}
            >
              <option disabled selected>
                رشـتـه تحـصیـلی
              </option>
              {fields.map((item) => {
                return <option key={item.id}>{item.fieldName}</option>
              })}
            </select>
          </div>
          <div className="build_box">
            <label>دیـپـارتـمـنت</label>
            <select
              id="type"
              value={studentPersonalInfo?.department}
              onChange={(e) => handleInputChangeValue(e, "department")}
            >
              <option selected disabled>
                دیـپـارتـمـنت
              </option>
              {departments.map((item) => {
                return <option key={item.id}>{item.departmentName}</option>
              })}
            </select>
          </div>
          <div className="post_box">
            <label>سـمسـتر</label>
            <select
              id="type"
              value={studentPersonalInfo?.semester}
              onChange={(e) => handleInputChangeValue(e, "semester")}
            >
              <option selected disabled>
                سـمسـتر
              </option>
              {semesters?.map((sem) => {
                return <option key={sem}>{sem}</option>
              })}
            </select>
          </div>
          <div className="build_box">
            <label>سـال شـمولـیـت</label>
            <input
              type="date"
              value={studentPersonalInfo?.joinedDate}
              onChange={(e) => handleInputChangeValue(e, "joinedDate")}
              required
              inputMode="url"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
