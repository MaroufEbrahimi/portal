import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import ICONS from "../../constants/Icons"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_boxes">
        <div className="footer_box first_footer_box">
          <h1 className="text_color">موسسسه تحصیلات عالی هریوا</h1>
          <p className="text_color text_align_justify">
            مؤسسه تحصیلات عالی هریوا در سال 1393 در حوزه غرب کشور در ولایت هرات
            شروع به فعالیت نموده و تا کنون تمام تلاش خویش برای ارایه آموزش های
            معیاری و اکادمیک مینماید.
          </p>
          <div className="footer_social_media">
            <ul className="display_flex">
              <li title="انستاگرام">
                <a href="https://instagram.com/hariwa_edu" target="_blank">
                  <i className={ICONS.instagram}></i>
                </a>
              </li>
              <li title="تلگرام">
                <a href="https://t.me/Hariwa_edu" target="_blank">
                  <i className={ICONS.telegram}></i>
                </a>
              </li>
              <li title="فیسبوک">
                <a
                  href="https://www.facebook.com/HariwaHigherEducationInstitute"
                  target="_blank"
                >
                  <i className={ICONS.facebook}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_box second_footer_box display_flex justify_content_center flex_direction_column">
          <div className="box_info">
            <i className={`${ICONS.geoAlt} text_color`}></i>
            <div>
              <h1 className="text_color">مکان</h1>
              <p className="text_color">
                آب بخش بادمرغان، فردوسی 15، جاده شرقی بادمرغان
              </p>
            </div>
          </div>
          <div className="box_info">
            <i className={`${ICONS.envelope} text_color`}></i>
            <div>
              <h1 className="text_color">ایمیل</h1>
              <p className="text_color">info@hariwa.edu.af</p>
            </div>
          </div>
          <div className="box_info">
            <i className={`${ICONS.phone} text_color`}></i>
            <div>
              <h1 className="text_color">تماس</h1>
              <p className="call_number text_color">0799 600 344</p>
            </div>
          </div>
        </div>
        <div className="footer_box third_footer_box display_flex flex_direction_column">
          <Link to="/">خانه</Link>
          <Link to="faculties/0">کامپیوتر ساینس</Link>
          <Link to="faculties/1">طب دندان</Link>
          <Link to="faculties/2">حقوق و علوم سیاسی</Link>
          <Link to="/about">درباره</Link>
        </div>
      </div>
      {/* !CopyRight */}
      <div className="copyright">
        <div className="credits">
          <p className="text_color text_align_center">
            حق کاپی محفوظ است &copy; 2023 هریوا
          </p>
          <p className="text_color text_align_center">
            ارایه شده توسط
            <a
              className="text_color"
              href="https://github.com/maroufebrahimi"
              target="_blank"
            >
              <span> </span>MaroufEbrahimi
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
