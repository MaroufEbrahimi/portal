import React from "react"
import { useStateValue } from "../../context/StateProvider"
import { actionTypes } from "../../context/reducer";


export const StudentRelatives = () => {
  const [{ studentRelations }, dispatch] = useStateValue();
  const handleInputChangeValue = (e, inputName) => {
    switch (inputName) {
      case "father.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            father: {
              ...studentRelations?.father,
              name: e.target.value
            }
          }
        })
        break;
      }
      case "father.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            father: {
              ...studentRelations?.father,
              job: e.target.value
            }
          }
        })
        break;
      }
      case "father.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            father: {
              ...studentRelations?.father,
              jobLocation: e.target.value
            }
          }
        })
        break;
      }
      case "father.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            father: {
              ...studentRelations?.father,
              phoneNumber: e.target.value
            }

          }
        })
        break;
      }
      case "uncle.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            uncle: {
              ...studentRelations?.uncle,
              name: e.target.value
            }
          }
        })
        break;
      }
      case "uncle.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            uncle: {
              ...studentRelations?.uncle,
              job: e.target.value
            }
          }
        })
        break;
      }
      case "uncle.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            uncle: {
              ...studentRelations?.uncle,
              jobLocation: e.target.value
            }
          }
        })
        break;
      }
      case "uncle.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            uncle: {
              ...studentRelations?.uncle,
              phoneNumber: e.target.value
            }
          }
        })
        break;
      }
      case "aunt.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            aunt: {
              ...studentRelations?.aunt,
              name: e.target.value
            }
          }
        })
        break;
      }
      case "aunt.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            aunt: {
              ...studentRelations?.aunt,
              job: e.target.value
            }
          }
        })
        break;
      }
      case "aunt.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            aunt: {
              ...studentRelations?.aunt,
              jobLocation: e.target.value
            }
          }
        })
        break;
      }
      case "aunt.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            aunt: {
              ...studentRelations?.aunt,
              phoneNumber: e.target.value
            }
          }
        })
        break;
      }
      case "brother.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            brother: {
              ...studentRelations?.brother,
              name: e.target.value
            }
          }
        })
        break;
      }
      case "brother.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            brother: {
              ...studentRelations?.brother,
              job: e.target.value
            }
          }
        })
        break;
      }
      case "brother.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            brother: {
              ...studentRelations?.brother,
              jobLocation: e.target.value
            }
          }
        })
        break;
      }
      case "brother.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...studentRelations,
            brother: {
              ...studentRelations?.brother,
              phoneNumber: e.target.value
            }
          }
        })
        break;
      }
    }
  }
  return (
    <div className="form_details_student student_relatives left-to-right">
      <form>
        <div className="full_width">
          <h3>پدر محصل</h3>
        </div>
        <div className="build_box">
          <label>نام</label>
          <input type="text" value={studentRelations?.father?.name} onChange={(e) => handleInputChangeValue(e, "father.name")} />
        </div>
        <div className="build_box">
          <label>وظیفه</label>
          <input type="text" value={studentRelations?.father?.job} onChange={(e) => handleInputChangeValue(e, "father.job")} />
        </div>
        <div className="build_box">
          <label>محل وظیفه</label>
          <input type="text" value={studentRelations?.father?.jobLocation} onChange={(e) => handleInputChangeValue(e, "father.jobLocation")} />
        </div>
        <div className="build_box">
          <label>شماره تماس</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={studentRelations?.father?.phoneNumber} onChange={(e) => handleInputChangeValue(e, "father.phoneNumber")}
          />
        </div>

        <div className="full_width">
          <h3>کاکای محصل</h3>
        </div>

        <div className="build_box">
          <label>نام</label>
          <input type="text" value={studentRelations?.uncle?.name} onChange={(e) => handleInputChangeValue(e, "uncle.name")} />
        </div>
        <div className="build_box">
          <label>وظیفه</label>
          <input type="text" value={studentRelations?.uncle?.job} onChange={(e) => handleInputChangeValue(e, "uncle.job")} />
        </div>
        <div className="build_box">
          <label>محل وظیفه</label>
          <input type="text" value={studentRelations?.uncle?.jobLocation} onChange={(e) => handleInputChangeValue(e, "uncle.jobLocation")} />
        </div>
        <div className="build_box">
          <label>شماره تماس</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={studentRelations?.uncle?.phoneNumber} onChange={(e) => handleInputChangeValue(e, "uncle.phoneNumber")}
          />
        </div>

        <div className="full_width">
          <h3>مامای محصل</h3>
        </div>
        <div className="build_box">
          <label>نام</label>
          <input type="text" value={studentRelations?.aunt?.name} onChange={(e) => handleInputChangeValue(e, "aunt.name")} />
        </div>
        <div className="build_box">
          <label>وظیفه</label>
          <input type="text" value={studentRelations?.aunt?.job} onChange={(e) => handleInputChangeValue(e, "aunt.job")} />
        </div>
        <div className="build_box">
          <label>محل وظیفه</label>
          <input type="text" value={studentRelations?.aunt?.jobLocation} onChange={(e) => handleInputChangeValue(e, "aunt.jobLocation")} />
        </div>
        <div className="build_box">
          <label>شماره تماس</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={studentRelations?.aunt?.pageNumber} onChange={(e) => handleInputChangeValue(e, "aunt.pageNumber")}
          />
        </div>

        <div className="full_width">
          <h3>برادر محصل / شوهر(خانم ها)</h3>
        </div>
        <div className="build_box">
          <label>نام</label>
          <input type="text" value={studentRelations?.brother?.name} onChange={(e) => handleInputChangeValue(e, "brother.name")} />
        </div>
        <div className="build_box">
          <label>وظیفه</label>
          <input type="text" value={studentRelations?.brother?.job} onChange={(e) => handleInputChangeValue(e, "brother.job")} />
        </div>
        <div className="build_box">
          <label>محل وظیفه</label>
          <input type="text" value={studentRelations?.brother?.jobLocation} onChange={(e) => handleInputChangeValue(e, "brother.jobLocation")} />
        </div>
        <div className="build_box">
          <label>شماره تماس</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={studentRelations?.brother?.phoneNumber} onChange={(e) => handleInputChangeValue(e, "brother.phoneNumber")}
          />
        </div>
      </form>
    </div>
  )
}
