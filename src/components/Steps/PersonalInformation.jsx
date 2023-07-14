import React, { useState, useEffect } from "react"
import "./Steps.css"
import { useStateValue } from "../../context/StateProvider"
import { actionTypes } from "../../context/reducer"
import avatar from "../../assets/img/profile_avatar.png"

export const PersonalInformation = () => {
  const [{ studentImage, studentPersonalInfo }, dispatch] = useStateValue()
  const [profileImg, setProfileImg] = useState({
    imgUrl: studentImage ? studentImage.url : null,
    file: "",
    isOk: studentImage ? true : false,
  })
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  useEffect(() => {
    fetch("http://localhost:1000/api/v1/field-of-studies")
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        console.log(data)
        setFields(data.content)
      })
  }, [])

  // handle input change of profile image
  const setProfileImgInput = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    setProfileImg({ imgUrl: url, file: e.target.files[0], isOk: true })
    dispatch({
      type: actionTypes.ADD_STUDENT_IMAGE,
      payload: {
        file: e.target.files[0],
        url: url,
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
        console.log(f)
        fetch(
          "http://localhost:1000/api/v1/field-of-studies/" +
            f.id +
            "/departments"
        )
          .then((res) => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error(res.statusText)
            }
          })
          .then((data) => {
            console.log(data)
            setDepartments(data)
          })
        break
      }
      case "department": {
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
      <form>
        <div className="add_img_profile full_width">
          <img
            src={profileImg.isOk ? profileImg.imgUrl : avatar}
            className="input_profile_img"
            alt="user_image"
          />
          <span className="upload_icon display_flex align_items_center justify_content_center">
            <i className="bi bi-camera"></i>
          </span>
          <input
            type={"file"}
            accept="image/*"
            id="input"
            onChange={(e) => setProfileImgInput(e)}
          />
        </div>

        <div className="build_box">
          <label>نام</label>
          <input
            type="text"
            value={studentPersonalInfo?.name}
            onChange={(e) => handleInputChangeValue(e, "name")}
            required
          />
        </div>

        <div className="build_box">
          <label>تخلص</label>
          <input
            type="text"
            value={studentPersonalInfo?.lastName}
            onChange={(e) => handleInputChangeValue(e, "lastname")}
            required
          />
        </div>

        <div className="build_box">
          <label>نام پدر</label>
          <input
            type="text"
            value={studentPersonalInfo?.fatherName}
            onChange={(e) => handleInputChangeValue(e, "fathername")}
            required
          />
        </div>

        <div className="build_box">
          <label>نام پدرکلان</label>
          <input
            type="text"
            value={studentPersonalInfo?.grandFatherName}
            onChange={(e) => handleInputChangeValue(e, "grandfathername")}
            required
          />
        </div>

        <div className="build_box">
          <label>شماره تماس</label>
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
          <label>ایمیل</label>
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
          <label>سال تولد</label>
          <input
            type=""
            value={studentPersonalInfo?.dob}
            onChange={(e) => handleInputChangeValue(e, "dob")}
            required
            inputMode="url"
          />
        </div>

        <div className="build_box">
          <label>زبان مادری</label>
          <select
            id="type"
            value={studentPersonalInfo?.motherTongue}
            onChange={(e) => handleInputChangeValue(e, "motherTongue")}
          >
            <option disabled selected>
              زبان مادری
            </option>
            <option>دری</option>
            <option>پشتو</option>
          </select>
        </div>

        <div className="build_box">
          <label>جنسیت</label>
          <select
            id="type"
            value={studentPersonalInfo?.gender}
            onChange={(e) => handleInputChangeValue(e, "gender")}
          >
            <option disabled selected>
              جنسیت
            </option>
            <option>مرد</option>
            <option>زن</option>
          </select>
        </div>

        <div className="build_box">
          <label>حالت مدنی</label>
          <select
            id="type"
            value={studentPersonalInfo?.maritalStatus}
            onChange={(e) => handleInputChangeValue(e, "maritalStatus")}
          >
            <option disabled selected>
              حالت مدنی
            </option>
            <option>مجرد</option>
            <option>متاهل</option>
          </select>
        </div>

        <div className="build_box">
          <label>مکتب / دارالعلوم</label>
          <input
            type="text"
            value={studentPersonalInfo?.highSchool}
            onChange={(e) => handleInputChangeValue(e, "highSchool")}
            required
          />
        </div>

        <div className="build_box">
          <label>سال فراغت</label>
          <input
            type=""
            value={studentPersonalInfo?.schoolGraduationDate}
            onChange={(e) => handleInputChangeValue(e, "schoolGraduationDate")}
            required
            inputMode="url"
          />
        </div>

        <div className="build_box">
          <label>رشته تحصیلی</label>
          <select
            id="type"
            value={studentPersonalInfo?.fieldOfStudy}
            onChange={(e) => handleInputChangeValue(e, "fieldOfStudy")}
          >
            <option disabled selected>
              رشته تحصیلی
            </option>
            {fields.map((item) => {
              return <option key={item.id}>{item.fieldName}</option>
            })}
          </select>
        </div>

        <div className="build_box">
          <label>دیپارتمنت</label>
          <select
            id="type"
            value={studentPersonalInfo?.department}
            onChange={(e) => handleInputChangeValue(e, "department")}
          >
            <option selected disabled>
              دیپارتمنت
            </option>
            {departments.map((item) => {
              return <option key={item.id}>{item.departmentName}</option>
            })}
          </select>
        </div>
        <div className="post_box">
          <label>سمستر</label>
          <select
            id="type"
            value={studentPersonalInfo?.semester}
            onChange={(e) => handleInputChangeValue(e, "semester")}
          >
            <option selected disabled>
              سمستر
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
        <div className="build_box">
          <label>رمز حساب کاربری</label>
          <input
            type=""
            value={studentPersonalInfo?.password}
            onChange={(e) => handleInputChangeValue(e, "password")}
            required
          />
        </div>
      </form>
    </div>
  )
}
