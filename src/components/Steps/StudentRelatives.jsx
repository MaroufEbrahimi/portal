import React from "react"

export const StudentRelatives = () => {
  return (
    <div className="form_details_student student_relatives left-to-right">
      <form>
        <div className="full_width">
          <h3>پدر محصل</h3>
        </div>
        <div className="build_box">
          <label>نام</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>وظیفه</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>محل وظیفه</label>
          <input type="text" />
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

        <div className="full_width">
          <h3>کاکای محصل</h3>
        </div>

        <div className="build_box">
          <label>نام</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>وظیفه</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>محل وظیفه</label>
          <input type="text" />
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

        <div className="full_width">
          <h3>مامای محصل</h3>
        </div>
        <div className="build_box">
          <label>نام</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>وظیفه</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>محل وظیفه</label>
          <input type="text" />
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

        <div className="full_width">
          <h3>برادر محصل / شوهر(خانم ها)</h3>
        </div>
        <div className="build_box">
          <label>نام</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>وظیفه</label>
          <input type="text" />
        </div>
        <div className="build_box">
          <label>محل وظیفه</label>
          <input type="text" />
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
