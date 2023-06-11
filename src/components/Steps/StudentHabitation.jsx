import { useContext } from "react"
import { StepperContext } from "../../context/StateProvider"
import "./Steps.css"

export const StudentHabitation = () => {
  const { userData, setUserData } = useContext(StepperContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  return (
    <div className="form_details_student student_habitation">
      <form>
        <div className="full_width">
          <h3>معلومات تذکره</h3>
        </div>
        <div className="build_box">
          <label>جلد</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>صفحه</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>شماره ثبت</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>نمبر عمومی</label>
          <input type="text" />
        </div>

        <div className="full_width">
          <h3>سکونت اصلی</h3>
        </div>

        <div className="build_box median_width">
          <label>قریه / گذر</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>ولسوالی / ناحیه</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>ولایت</label>
          <input type="text" />
        </div>

        <div className="full_width">
          <h3>سکونت فعلی</h3>
        </div>

        <div className="build_box median_width">
          <label>قریه / گذر</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>ولسوالی / ناحیه</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>ولایت</label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}
/*
<div className="username">
        <input
          onChange={handleChange}
          value={userData["username"] || ""}
          name="username"
          className=""
          type="text"
        />
      </div>

      <div className="password">
        <input
          onChange={handleChange}
          value={userData["password"] || ""}
          name="password"
          type="password"
          className=""
        />
      </div>
*/
