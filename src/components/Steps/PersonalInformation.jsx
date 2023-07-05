import React from "react"
import "./Steps.css"

export const PersonalInformation = () => {
  return (
    <div className="form_details_student personal_info right-to-left">
      <form>
        <div className="build_box median_width">
          <label>نام</label>
          <input type="text" required />
        </div>

        <div className="build_box">
          <label>تخلص</label>
          <input type="text" required />
        </div>

        <div className="build_box">
          <label>نام پدر</label>
          <input type="text" required />
        </div>

        <div className="build_box median_width">
          <label>نام پدرکلان</label>
          <input type="text" required />
        </div>

        <div className="build_box">
          <label>سال تولد</label>
          <input type="text" required />
        </div>

        <div className="build_box">
          <label>زبان مادری</label>
          <select id="type">
            <option>زبان مادری</option>
            <option>دری</option>
            <option>پشتو</option>
          </select>
        </div>
        <div className="build_box email median_width">
          <label>ایمیل</label>
          <input type="email" required placeholder="e.g famous@gmail.com" />
        </div>

        <div className="build_box">
          <label>حالت مدنی</label>
          <select id="type">
            <option>حالت مدنی</option>
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
          />
        </div>
      </form>
    </div>
  )
}
/*
 *
 *
 */
