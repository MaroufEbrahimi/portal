import React from "react"
import "./Teachers.css"
import "../../components/Student/Student.css"
import { Link } from "react-router-dom"
import { teachers } from "../../constants/Data"

const Teachers = () => {
  return (
    <div className="teachers">
      <div className="faculties_sections_title">
        <h2>اسـاتـید</h2>
      </div>
      <p>
        در رأس پوهنحی کمپیوتر ساینس رئیس آن پوهنحی قرار دارد که به ریاست مؤسسه
        گزارش ده می باشد. تحت ریاست پوهنحی کمپیوترساینس بخش های مدیریت تدریس،
        مدیریت اجرائی، آمریت دیپارتمنت انجینری نرم افزار و آمریت دیپارتمنت
        دیتابیس قرار دارد. در حال حاضر پوهنحی کمپیوتر ساینس مؤسسه تحصیلات عالی
        هریوا 16 تن استاد دارد که از جمله یک تن آنها دوکتورا، 8 تن آنها ماستر و
        7 تن آنها لیسانس می باشند. تعداد محصلین پوهنحی کمپیوترساینس مؤسسه در حال
        حاضر (1397 ه. ش) به 150 محصل میرسد.
      </p>

      {/* All Teachers */}
      <div className="teachers_boxes">
        {teachers.map((item, index) => (
          <div className="teachers_box box_shadow">
            <div className="student_title_profile">
              <div className="student_profile_header"></div>
              <div className="student_profile_img display_flex align_items_center justify_content_center">
                <img src={item.teacherImg} />
              </div>
            </div>

            <div className="student_descriptions">
              <div className="student_personal_info display_flex align_items_center flex_direction_column text_align_center">
                <p>{item.teacherName}</p>
                <p>{item.teacherLastName}</p>
              </div>
              <div className="student_university_info display_flex text_align_center border_radius_8">
                <Link to={"/profile-teacher/" + item?.id}>بـیشـتر</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teachers
