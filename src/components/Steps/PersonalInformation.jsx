import React, { useState } from "react"
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

  // handle input change of profile image
  const setProfileImgInput = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    setProfileImg({ imgUrl: url, file: e.target.files[0], isOk: true })
    dispatch({
      type: actionTypes.ADD_STUDENT_IMAGE,
      payload: {
        file: e.target.files[0],
        url: url
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
      case "maritalState": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            maritalState: e.target.value,
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
      case "school": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            school: e.target.value,
          },
        })
        break
      }
      case "graduation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: {
            ...studentPersonalInfo,
            graduation: e.target.value,
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
          />
        </div>

        <div className="build_box">
          <label>سال تولد</label>
          <input
            type=""
            value={studentPersonalInfo?.dob}
            onChange={(e) => handleInputChangeValue(e, "dob")}
            required
          />
        </div>

        <div className="build_box">
          <label>زبان مادری</label>
          <select
            id="type"
            value={studentPersonalInfo?.motherTongue}
            onChange={(e) => handleInputChangeValue(e, "motherTongue")}
          >
            <option disabled selected>زبان مادری</option>
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
            <option disabled>جنسیت</option>
            <option>مرد</option>
            <option>زن</option>
          </select>
        </div>

        <div className="build_box">
          <label>حالت مدنی</label>
          <select
            id="type"
            value={studentPersonalInfo?.maritalState}
            onChange={(e) => handleInputChangeValue(e, "maritalState")}
          >
            <option disabled selected>حالت مدنی</option>
            <option>مجرد</option>
            <option>متاهل</option>
          </select>
        </div>

        <div className="build_box">
          <label>مکتب / دارالعلوم</label>
          <input
            type="text"
            value={studentPersonalInfo?.school}
            onChange={(e) => handleInputChangeValue(e, "school")}
            required
          />
        </div>

        <div className="build_box">
          <label>سال فراغت</label>
          <input
            type=""
            value={studentPersonalInfo?.graduation}
            onChange={(e) => handleInputChangeValue(e, "graduation")}
            required
          />
        </div>

        <div className="build_box">
          <label>رشته تحصیلی</label>
          <select
            id="type"
            value={studentPersonalInfo?.fieldOfStudy}
            onChange={(e) => handleInputChangeValue(e, "fieldOfStudy")}
          >
            <option>کامپیوتر ساینس</option>
            <option>حقوق</option>
            <option>ستوماتالوژی</option>
          </select>
        </div>

        <div className="build_box">
          <label>دیپارتمنت</label>
          <input
            type="text"
            value={studentPersonalInfo?.department}
            onChange={(e) => handleInputChangeValue(e, "department")}
            required
          />
        </div>
      </form>
    </div>
  )
}
