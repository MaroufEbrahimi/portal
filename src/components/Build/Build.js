import React from "react"

import "./Build.css"

const Build = () => {
  return (
    <div className="build">
      <div className="build_boxes">
        <div className="build_box">
          <label>نام</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>تخلص</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>نام پدر</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>نام پدرکلان</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>سال تولد</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>زبان مادری</label>
          <input type="text" />
        </div>

        <div className="build_box full_width">
          <h1>تذکره</h1>
        </div>
        <div className="build_box">
          <label>جلد تذکره</label>
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

        <div className="build_box">
          <label>حالت مدنی</label>
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

        <div className="build_box">
          <label>ایمیل</label>
          <input type="email" />
        </div>

        <div className="build_box">
          <label>لیسه / دارالعلوم</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>سال فراغت</label>
          <input type="text" />
        </div>

        <div className="build_box full_width">
          <h1>سکونت محصل</h1>
          <h3>سکونت اصلی</h3>
        </div>
        <div className="build_box">
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

        <div className="build_box full_width">
          <h3>سکونت فعلی</h3>
        </div>
        <div className="build_box">
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

        <div className="build_box full_width">
          <h1>اقارب محصل و وظایف آنها</h1>
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

        <div className="build_box full_width">
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

        <div className="build_box full_width">
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

        <div className="build_box full_width">
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
      </div>
    </div>
  )
}

export default Build
