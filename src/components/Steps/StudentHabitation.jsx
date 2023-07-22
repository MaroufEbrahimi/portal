import React from "react"
import { useStateValue } from "../../context/StateProvider"
import "./Steps.css"
import { actionTypes } from "../../context/reducer"

export const StudentHabitation = () => {
  const [
    { studentIdenfication, studentLocations, studentRelations },
    dispatch,
  ] = useStateValue()

  const handleInputChangeValue = (e, inputName) => {
    switch (inputName) {
      case "caseNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_IDENTIFICATION,
          payload: {
            ...studentIdenfication,
            caseNumber: e.target.value,
          },
        })
        break
      }
      case "pageNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_IDENTIFICATION,
          payload: {
            ...studentIdenfication,
            pageNumber: e.target.value,
          },
        })
        break
      }
      case "registrationNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_IDENTIFICATION,
          payload: {
            ...studentIdenfication,
            registrationNumber: e.target.value,
          },
        })
        break
      }
      case "nationalId": {
        dispatch({
          type: actionTypes.ADD_STUDENT_IDENTIFICATION,
          payload: {
            ...studentIdenfication,
            nationalId: e.target.value,
          },
        })
        break
      }
      case "previous.villageOrQuarter": {
        dispatch({
          type: actionTypes.ADD_STIUDENT_LOCATIONS,
          payload: {
            ...studentLocations,
            previous: {
              ...studentLocations?.previous,
              villageOrQuarter: e.target.value,
              current: false,
            },
          },
        })
        break
      }
      case "previous.district": {
        dispatch({
          type: actionTypes.ADD_STIUDENT_LOCATIONS,
          payload: {
            ...studentLocations,
            previous: {
              ...studentLocations?.previous,
              district: e.target.value,
            },
          },
        })
        break
      }
      case "previous.city": {
        dispatch({
          type: actionTypes.ADD_STIUDENT_LOCATIONS,
          payload: {
            ...studentLocations,
            previous: {
              ...studentLocations?.previous,
              city: e.target.value,
            },
          },
        })
        break
      }
      case "current.villageOrQuarter": {
        dispatch({
          type: actionTypes.ADD_STIUDENT_LOCATIONS,
          payload: {
            ...studentLocations,
            current: {
              ...studentLocations?.current,
              villageOrQuarter: e.target.value,
              current: true,
            },
          },
        })
        break
      }
      case "current.district": {
        dispatch({
          type: actionTypes.ADD_STIUDENT_LOCATIONS,
          payload: {
            ...studentLocations,
            current: {
              ...studentLocations?.current,
              district: e.target.value,
              current: true,
            },
          },
        })
        break
      }
      case "current.city": {
        dispatch({
          type: actionTypes.ADD_STIUDENT_LOCATIONS,
          payload: {
            ...studentLocations,
            current: {
              ...studentLocations?.current,
              city: e.target.value,
              current: true,
            },
          },
        })
        break
      }
    }
  }
  return (
    <div className="form_details_student student_habitation left-to-right">
      <div className="add_student_stepper_title">
        <h3>مـعـلـومـات تـذکـره</h3>
      </div>
      <section className="build_boxes">
        <div className="build_box">
          <label>جـلـد</label>
          <input
            type="number"
            value={studentIdenfication?.caseNumber}
            onChange={(e) => handleInputChangeValue(e, "caseNumber")}
            inputMode="numeric"
          />
        </div>

        <div className="build_box">
          <label>صـفـحـه</label>
          <input
            type="number"
            value={studentIdenfication?.pageNumber}
            onChange={(e) => handleInputChangeValue(e, "pageNumber")}
            inputMode="numeric"
          />
        </div>

        <div className="build_box">
          <label>شـمـاره ثـبـت</label>
          <input
            type="number"
            value={studentIdenfication?.registrationNumber}
            onChange={(e) => handleInputChangeValue(e, "registrationNumber")}
            inputMode="numeric"
          />
        </div>

        <div className="build_box">
          <label>نـمـبر عـمـومـی</label>
          <input
            type="number"
            value={studentIdenfication?.nationalId}
            onChange={(e) => handleInputChangeValue(e, "nationalId")}
            inputMode="numeric"
          />
        </div>
      </section>

      <div className="add_student_stepper_title">
        <h3>سـکـونـت اصـلـی</h3>
      </div>

      <section className="build_boxes build_boxes_three_boxes">
        <div className="build_box median_width">
          <label>قـریـه / گـذر</label>
          <input
            type="text"
            value={studentLocations?.previous?.villageOrQuarter}
            onChange={(e) =>
              handleInputChangeValue(e, "previous.villageOrQuarter")
            }
          />
        </div>
        <div className="build_box">
          <label>ولـسـوالـی / ناحیـه</label>
          <input
            type="text"
            value={studentLocations?.previous?.district}
            onChange={(e) => handleInputChangeValue(e, "previous.district")}
          />
        </div>
        <div className="build_box">
          <label>ولایـت</label>
          <input
            type="text"
            value={studentLocations?.previous?.city}
            onChange={(e) => handleInputChangeValue(e, "previous.city")}
          />
        </div>
      </section>

      <div className="add_student_stepper_title">
        <h3>سـکـونـت فعلی</h3>
      </div>

      <section className="build_boxes build_boxes_three_boxes">
        <div className="build_box median_width">
          <label>قـریـه / گـذر</label>
          <input
            type="text"
            value={studentLocations?.current?.villageOrQuarter}
            onChange={(e) =>
              handleInputChangeValue(e, "current.villageOrQuarter")
            }
          />
        </div>
        <div className="build_box">
          <label>ولـسـوالـی / ناحیـه</label>
          <input
            type="text"
            value={studentLocations?.current?.district}
            onChange={(e) => handleInputChangeValue(e, "current.district")}
          />
        </div>
        <div className="build_box">
          <label>ولایـت</label>
          <input
            type="text"
            value={studentLocations?.current?.city}
            onChange={(e) => handleInputChangeValue(e, "current.city")}
          />
        </div>
      </section>
    </div>
  )
}
