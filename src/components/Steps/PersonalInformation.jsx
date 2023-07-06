import React, { useState } from "react"
import "./Steps.css"
import { useStateValue } from "../../context/StateProvider"
import { actionTypes } from "../../context/reducer"
export const PersonalInformation = () => {
  const [{ studentPersonalInfo }, dispatch] = useStateValue()

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
    }
  }

  return (
    <div className="form_details_student personal_info right-to-left">
      <form>
        <div className="add_img_profile">
          <input
            type="file"
            name="image-upload"
            id="input"
            // onChange={this.imageHandler}
            accept="image/*"
          />
          <label htmlFor="input" className="image-upload">
            <i
              className="bi bi-person-bounding-box"
              title="choose your photo"
            ></i>
            <p>یک دانه عکس 3X4</p>
          </label>
        </div>

        <div className="build_box median_width">
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

        <div className="build_box median_width">
          <label>نام پدرکلان</label>
          <input
            type="text"
            value={studentPersonalInfo?.grandFatherName}
            onChange={(e) => handleInputChangeValue(e, "grandfathername")}
            required
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
            <option disabled>زبان مادری</option>
            <option>دری</option>
            <option>پشتو</option>
          </select>
        </div>
        <div className="build_box email median_width">
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
          <label>حالت مدنی</label>
          <select
            id="type"
            value={studentPersonalInfo?.maritalState}
            onChange={(e) => handleInputChangeValue(e, "maritalState")}
          >
            <option disabled>حالت مدنی</option>
            <option>مجرد</option>
            <option>متاهل</option>
          </select>
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
      </form>
    </div>
  )
}
