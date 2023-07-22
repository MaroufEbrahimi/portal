import React from "react"
import "./UpdateStudent.css"
import Button from "../UI/Button/Button"

const UpdateStudent = () => {
  return (
    <div className="updateStudent">
      <div className="update_detail">
        {/* Personal Information */}
        <div className="form_details_student personal_info right-to-left">
          <div className="add_student_stepper_title">
            <h3>مـعـلـومـات شـخصـی</h3>
          </div>

          <section className="build_boxes">
            <div className="build_box">
              <label>نــام</label>
              <input type="text" name="username" required />
            </div>

            <div className="build_box">
              <label>تــخلــص</label>
              <input type="text" name="lastname" required />
            </div>

            <div className="build_box">
              <label>نــام پــدر</label>
              <input type="text" name="fathername" required />
            </div>

            <div className="build_box">
              <label>نــام پــدرکــلان</label>
              <input type="text" name="grandfathername" required />
            </div>

            <div className="build_box">
              <label>شــمــاره تــمــاس</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>

            <div className="build_box email">
              <label>ایــمـیـل</label>
              <input
                type="email"
                required
                placeholder="e.g famous@gmail.com"
                inputMode="email"
              />
            </div>

            <div className="build_box">
              <label>ســال تــولــد</label>
              <input type="text" name="dateofbirth" required />
            </div>

            <div className="build_box">
              <label>زبـان مــادری</label>
              <select id="type">
                <option>زبـان مــادری</option>
                <option>دری</option>
                <option>پـشـتو</option>
              </select>
            </div>

            <div className="build_box">
              <label>جـنسیت</label>
              <select>
                <option disabled selected>
                  جـنسیت
                </option>
                <option>مـرد</option>
                <option>زن</option>
              </select>
            </div>

            <div className="build_box">
              <label>حـالـت مـدنـی</label>
              <select id="type">
                <option disabled selected>
                  حـالـت مـدنـی
                </option>
                <option>مـجرد</option>
                <option>متـاهل</option>
              </select>
            </div>

            <div className="build_box">
              <label>مکـتب / دارالـعـلوم</label>
              <input type="text" required />
            </div>

            <div className="build_box">
              <label>سـال فـراغـت</label>
              <input type="date" required inputMode="url" />
            </div>

            <div className="build_box">
              <label>رشـتـه تحـصیـلی</label>
              <select id="type">
                <option disabled selected>
                  رشـتـه تحـصیـلی
                </option>
              </select>
            </div>

            <div className="build_box">
              <label>دیـپـارتـمـنت</label>
              <select id="type">
                <option selected disabled>
                  دیـپـارتـمـنت
                </option>
              </select>
            </div>

            <div className="post_box">
              <label>سـمسـتر</label>
              <select id="type">
                <option selected disabled>
                  سـمسـتر
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>

            <div className="build_box">
              <label>رمـز حسـاب کـاربـری</label>
              <input type="" required />
            </div>
          </section>
        </div>

        {/* Student Habitation */}
        <div className="form_details_student student_habitation left-to-right">
          <div className="add_student_stepper_title">
            <h3>مـعـلـومـات تـذکـره</h3>
          </div>
          <section className="build_boxes">
            <div className="build_box">
              <label>جـلـد</label>
              <input type="number" inputMode="numeric" />
            </div>

            <div className="build_box">
              <label>صـفـحـه</label>
              <input type="number" inputMode="numeric" />
            </div>

            <div className="build_box">
              <label>شـمـاره ثـبـت</label>
              <input type="number" inputMode="numeric" />
            </div>

            <div className="build_box">
              <label>نـمـبر عـمـومـی</label>
              <input type="number" inputMode="numeric" />
            </div>
          </section>

          <div className="add_student_stepper_title">
            <h3>سـکـونـت اصـلـی</h3>
          </div>

          <section className="build_boxes build_boxes_three_boxes">
            <div className="build_box median_width">
              <label>قـریـه / گـذر</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>ولـسـوالـی / ناحیـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>ولایـت</label>
              <input type="text" required />
            </div>
          </section>

          <div className="add_student_stepper_title">
            <h3>سـکـونـت فعلی</h3>
          </div>

          <section className="build_boxes build_boxes_three_boxes">
            <div className="build_box">
              <label>قـریـه / گـذر</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>ولـسـوالـی / ناحیـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>ولایـت</label>
              <input type="text" required />
            </div>
          </section>
        </div>

        {/* Student Relatives */}
        <div className="add_student_relatives">
          <h2>اقــارب محـصل</h2>
        </div>
        <div className="form_details_student student_relatives left-to-right">
          <div className="add_student_stepper_title">
            <h3>پـدر محـصل</h3>
          </div>

          <section className="build_boxes">
            <div className="build_box">
              <label>نـام</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>وظیـفـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>مـحل وظیـفـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>شـمـاره تـمـاس</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
          </section>

          <div className="add_student_stepper_title">
            <h3>کـاکـای محـصل</h3>
          </div>

          <section className="build_boxes">
            <div className="build_box">
              <label>نـام</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>وظیـفـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>مـحل وظیـفـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>شـمـاره تـمـاس</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
          </section>

          <div className="add_student_stepper_title">
            <h3>مـامـای محـصل</h3>
          </div>

          <section className="build_boxes">
            <div className="build_box">
              <label>نـام</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>وظیـفـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>مـحل وظیـفـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>شـمـاره تـمـاس</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
          </section>

          <div className="add_student_stepper_title">
            <h3>برادر محصل / شوهر(خانم ها)</h3>
          </div>

          <section className="build_boxes">
            <div className="build_box">
              <label>نـام</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>وظیـفـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>مـحل وظیـفـه</label>
              <input type="text" required />
            </div>
            <div className="build_box">
              <label>شـمـاره تـمـاس</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
          </section>
        </div>
      </div>

      <div className="update_btn">
        <Button text={"بروز رسانی اطلاعات"} />
      </div>
    </div>
  )
}

export default UpdateStudent
