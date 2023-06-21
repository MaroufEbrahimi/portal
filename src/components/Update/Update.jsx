import React from "react"
import "./Update.css"
import "../Steps/Steps.css"

const Update = () => {
  return (
    <div className="update">
      <div className="update_detail">
        <h1>update this profile</h1>
        {/* Personal Information */}
        <div className="form_details_student personal_info right-to-left">
          <form>
            <div className="build_box median_width">
              <label>نام</label>
              <input type="text" name="username" required />
            </div>

            <div className="build_box">
              <label>تخلص</label>
              <input type="text" name="lastname" required />
            </div>

            <div className="build_box">
              <label>نام پدر</label>
              <input type="text" name="fathername" required />
            </div>

            <div className="build_box median_width">
              <label>نام پدرکلان</label>
              <input type="text" name="grandfathername" required />
            </div>

            <div className="build_box">
              <label>سال تولد</label>
              <input type="text" name="dateofbirth" required />
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
              <input
                type="email"
                name="email"
                required
                placeholder="e.g famous@gmail.com"
              />
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

        {/* Student Habitation */}
        <div className="form_details_student student_habitation left-to-right">
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
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>ولسوالی / ناحیه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>ولایت</label>
              <input type="text" required />
            </div>

            <div className="full_width">
              <h3>سکونت فعلی</h3>
            </div>

            <div className="build_box median_width">
              <label>قریه / گذر</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>ولسوالی / ناحیه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>ولایت</label>
              <input type="text" required />
            </div>
          </form>
        </div>

        {/* Student Relatives */}
        <div className="form_details_student student_relatives left-to-right">
          <form>
            <div className="full_width">
              <h3>پدر محصل</h3>
            </div>
            <div className="build_box">
              <label>نام</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>وظیفه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>محل وظیفه</label>
              <input type="text" required />
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
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>وظیفه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>محل وظیفه</label>
              <input type="text" required />
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
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>وظیفه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>محل وظیفه</label>
              <input type="text" required />
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
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>وظیفه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>محل وظیفه</label>
              <input type="text" required />
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
      </div>
    </div>
  )
}

export default Update
