import React from "react"

import axios from "../../constants/instance"

import "./Build.css"

export const GetStarted = () => {
  return (
    <div className="get_started">
      <h1>کار خود را با وارد کردن اطاعات شخصی شروع کنید</h1>
    </div>
  )
}
// personal information
export const PersonalInfo = () => {
  return (
    <div className="personal_information">
      <div className="build_boxes"></div>
    </div>
  )
}

export const Contact = () => {
  return <div className="contact"></div>
}

const items = [GetStarted, PersonalInfo, Contact]

export default items

/*
<div className="build_box">
         

        <div className="build_box full_width">
          <h1>تذکره</h1>
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
*/
