import React from "react"

import "./Build.css"

const Build = () => {
  return (
     <div className="build">
        <h1>Let's add new student!</h1>
      <div className="build_boxes">
        <div className="build_box">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>Last Name</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>Father Name</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="build_box">
          <label>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>

        <div className="build_box">
          <label>Phone</label>
          <input type="text" />
        </div>

        <div className="build_box">
          <label>Day</label>
          <input
            type="text"
            id="day"
            name="day"
            min="2010-03"
            placeholder="DD"
          />
        </div>

        <div className="build_box">
          <label>Month</label>
          <input
            type="text"
            id="month"
            name="month"
            min="2010-03"
            placeholder="MM"
          />
        </div>

        <div className="build_box">
          <label>Year</label>
          <input
            type="text"
            id="year"
            name="year"
            min="2010-03"
            placeholder="YY"
          />
        </div>
      </div>
    </div>
  )
}

export default Build
