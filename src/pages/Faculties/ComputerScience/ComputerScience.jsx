import React, { useState } from "react"
import "./ComputerScience.css"
import IntroductionOfFaculty from "../../../components/FacultiesSections/IntroductionOfFaculty"
import IntroOfDeanOfFaculty from "../../../components/FacultiesSections/IntroOfDeanOfFaculty"
import ViewPoint from "../../../components/FacultiesSections/ViewPoint"
import Goals from "../../../components/FacultiesSections/Goals"
import OrganizationChart from "../../../components/FacultiesSections/OrganizationChart"
import {
  goalsOf_CS,
  semester_tabHeader,
  valuesOf_CS,
  cs_software_intro,
  cs_software_goals,
  cs_network_intro,
  cs_network_goals,
} from "../../../constants/Data"

import deanImg from "../../../assets/img/deans/Omid-Khairandish.jpeg"
import chartImg from "../../../assets/img/organization_charts/Organizational-Structure-CS.jpg"

const ComputerScience = () => {
  const [showTab, setShowTab] = useState(1)
  const [showTabِDep, setShowTabDep] = useState(1)
  const [showTabSemester, setShowTabSemester] = useState(1)

  const handleTabs = (index) => setShowTab(index)
  const handleTabsDep = (index) => setShowTabDep(index)
  const handleTabsSemester = (index) => setShowTabSemester(index)

  return (
    <div className="computerScience">
      {/* introduction of faculty */}
      <IntroductionOfFaculty
        facultyText1="پوهنحی کمپیوترساینس مؤسسه تحصیلات عالی هریوا در سال 1393 هجری شمسی به هدف تربیه کدر ها و اشخاص متخصص و مسلکی و ارائه آموزش های کمپیوتری معیاری و با کیفیت مطابق نیاز جامعه در بخش تولید نرم افزارهای کامپیوتر، مدیریت و امنیت شبکه های کامپیوتری، مدیریت سیستمهای معلوماتی و دیتابیس تأسیس گردیده است. در پوهنحی کمپیوترساینس تدریس تمام دروس عملی و نظری با استفاده از تکنالوژی عصری ارائه میگردد و نصاب درسی این پوهنحَی مطابق با نصاب تعیین شده وزارت تحصیلات عالی کشور می باشد."
        facultyText2="در رأس پوهنحی کمپیوتر ساینس رئیس آن پوهنحی قرار دارد که به ریاست مؤسسه گزارش ده می باشد. تحت ریاست پوهنحی کمپیوترساینس بخش های مدیریت تدریس، مدیریت اجرائی، آمریت دیپارتمنت انجینری نرم افزار و آمریت دیپارتمنت دیتابیس قرار دارد. در حال حاضر پوهنحی کمپیوتر ساینس مؤسسه تحصیلات عالی هریوا 16 تن استاد دارد که از جمله یک تن آنها دوکتورا، 8 تن آنها ماستر و 7 تن آنها لیسانس می باشند. تعداد محصلین پوهنحی کمپیوترساینس مؤسسه در حال حاضر (1397 ه. ش) به 150 محصل میرسد."
      />
      {/* introduction of the Dean of the faculty */}
      <IntroOfDeanOfFaculty
        deanImg={deanImg}
        deanName="محمد امید خیر اندیش"
        FieldofStudy="کامپیوتر ساینس"
        deanDegree="ماستر"
        deanDuty="رئیس پوهنـځی کامپیوترساینس"
        deanCallNum="0728847442"
        deanEmail="M.omid.Khairandish@gmail.com"
        deanTxt1="خوشحالم که ریاست دانشکده کامیپوتر ساینس در موسسه تحصیلات عالی هریوا را
          بر عهده دارم. این دانشکده دارای تیمی متشکل از کادر علمی بسیار با تجربه
          و با انگیزه است که در حال آموزش و ارتقای ظرفیت علمی دانشجویان در حوزه
          فناوری اطلاعات در سطح محلی، ملی و بین المللی هستند. نقطه قوت این
          دیپارتمنت دانشجویان با انگیزه بالایی است که پویایی صنعت را درک می کنند
          و مهارت های خود را بر این اساس ارتقا می دهند. حوزه علم کامپیوتر بی
          پایان است. دانشجویان دانشکده کامپیوتر ساینس به شدت مورد تقاضای
          کارفرمایان شرکت ها و سازمان دولتی و خصوصی هستند. نطربه به علاقه
          دانشجو، او ممکن است برای تحصیلات عالی برود یا در صورت اشتغال می تواند
          تحقیق، توسعه، طراحی، تولید، تست و مدیریت در صنعت فناوری اطلاعات را
          انتخاب کند."
        deanTxt2="در این بخش نه تنها تأکید بر مطالعه، بلکه بکارگیری دانش در درک اینکه
          کامپیوتر چیست، معماری آن چگونه است، چگونه آنها را به طور مؤثر برنامه
          ریزی کنیم، ابزارهای مختلف برای نوشتن یک الگوریتم مؤثر، رابط بین
          کامپیوتر و کاربر، محیط گرافیک کاربری کامپیوتری، شبکه های کامپیوتری،
          مدیریت پایگاه داده نرم افزار، مهندسی نرم افزار و تست کارآمد آنها و
          موارد دیگر مورد بحث است. همچنان از طریق فرآیند یاددهی-یادگیری
          نوآورانه، رویکرد کار گروهی و تجربه ایجاد رهبری، دانش آموزان ما مهارت
          های ارتباطی و تفکر انتقادی حیاتی را به دست می آورند. موسسه تحصیلات
          عالی هریوا بستری را برای دانش آموزان فراهم می کند تا مهارت های خویش را
          نظر به نیاز بازار کار افزایش دهند."
      />

      {/* این بخش شامل تمامی دیپارتمنت های پوهنحی مربوطه می شود */}
      <div className="departements">
        <div className="faculties_sections_title">
          <h2>دیپارتمنت ها</h2>
        </div>

        <div className="view_point_tabHeader faculties_tabHeader">
          <ul>
            <li
              className={showTab === 1 ? "active_tab" : ""}
              onClick={() => handleTabs(1)}
            >
              <span>انجینری نرم افزار</span>
            </li>
            <li
              className={showTab === 2 ? "active_tab" : ""}
              onClick={() => handleTabs(2)}
            >
              <span>سیستم‌های عامل و ارتباطات</span>
            </li>
          </ul>
        </div>

        <div className="view_point_contents faculties_tabHeader_contents">
          {/* نرم افزار */}
          <div
            className={
              showTab === 1
                ? "faculties_tabHeader_content active_content box_shadow"
                : "faculties_tabHeader_content"
            }
          >
            <div>{/* <h1>این یک متن تستی از انجینری نرم افزار است</h1> */}</div>
            <div className="view_point_tabHeader faculties_tabHeader">
              <ul>
                <li
                  className={showTabِDep === 1 ? "active_tab" : ""}
                  onClick={() => handleTabsDep(1)}
                >
                  <span>معرفی</span>
                </li>
                <li
                  className={showTabِDep === 2 ? "active_tab" : ""}
                  onClick={() => handleTabsDep(2)}
                >
                  <span>اهداف</span>
                </li>
                <li
                  className={showTabِDep === 3 ? "active_tab" : ""}
                  onClick={() => handleTabsDep(3)}
                >
                  <span>مفردات درسی</span>
                </li>
              </ul>
            </div>

            <div
              className={
                showTabِDep === 1
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>{cs_software_intro}</p>
            </div>

            <div
              className={
                showTabِDep === 2
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              {cs_software_goals.map((item) => (
                <ul>
                  <li>
                    <span>{item}</span>
                  </li>
                </ul>
              ))}
            </div>
            <div
              className={
                showTabِDep === 3
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <div className="view_point_tabHeader faculties_tabHeader semester_refs">
                {semester_tabHeader.map((item) => (
                  <ul>
                    <li
                      className={
                        showTabSemester === item.counter ? "active_tab" : ""
                      }
                      onClick={() => handleTabsSemester(item.counter)}
                    >
                      <span>{item.semester}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div
              className={
                showTabSemester === 1
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>semester 1</p>
            </div>

            <div
              className={
                showTabSemester === 2
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>semester 2</p>
            </div>

            <div
              className={
                showTabSemester === 3
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>semester 3</p>
            </div>

            <div
              className={
                showTabSemester === 4
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>semester 4</p>
            </div>

            <div
              className={
                showTabSemester === 5
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>semester 5</p>
            </div>

            <div
              className={
                showTabSemester === 6
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>semester 6</p>
            </div>

            <div
              className={
                showTabSemester === 7
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>semester 7</p>
            </div>

            <div
              className={
                showTabSemester === 8
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>semester 8</p>
            </div>
          </div>

          {/*  سیستم های عامل و ارتباطات */}
          <div
            className={
              showTab === 2
                ? "faculties_tabHeader_content active_content box_shadow"
                : "faculties_tabHeader_content"
            }
          >
            <div>
              <h1>این یک متن تستی از انجینری نرم افزار است</h1>
            </div>
            <div className="view_point_tabHeader faculties_tabHeader">
              <ul>
                <li
                  className={showTabِDep === 1 ? "active_tab" : ""}
                  onClick={() => handleTabsDep(1)}
                >
                  <span>معرفی</span>
                </li>
                <li
                  className={showTabِDep === 2 ? "active_tab" : ""}
                  onClick={() => handleTabsDep(2)}
                >
                  <span>اهداف</span>
                </li>
                <li
                  className={showTabِDep === 3 ? "active_tab" : ""}
                  onClick={() => handleTabsDep(3)}
                >
                  <span>مفردات درسی</span>
                </li>
              </ul>
            </div>

            <div
              className={
                showTabِDep === 1
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              <p>{cs_network_intro}</p>
            </div>
            <div
              className={
                showTabِDep === 2
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              {cs_network_goals.map((item) => (
                <ul>
                  <li>
                    <span>{item}</span>
                  </li>
                </ul>
              ))}
            </div>
            <div
              className={
                showTabِDep === 3
                  ? "faculties_tabHeader_content active_content box_shadow"
                  : "faculties_tabHeader_content"
              }
            >
              {semester_tabHeader.map((item) => (
                <ul>
                  <li
                    className={showTabِDep === item.counter ? "active_tab" : ""}
                    onClick={() => handleTabsDep(item.counter)}
                  >
                    <span>{item.semester}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View Point */}
      <ViewPoint
        viewPoint="پوهنحی کامپیوتر ساینس مؤسسه تحصیلات عالی هریوا تلاش دارد تا با
            پاسخگوئی به نیازهای اکادمیک جامعه ، متناسب با معیارهای پذیرفته شدۀ
            وزارت تحصیلات عالی به گزینۀ نخست داوطلبان ورود به مؤسسات تحصیلات
            عالی در رشتۀ کامپیوترساینس در سطح کشور تبدیل گردد."
        mission="پوهنحی کامپیوتر ساینس مؤسسه تحصیلات عالی هریوا مأموریت دارد تا زمینۀ
            آموزش علوم و مهارت‌های تکنولوژی معلوماتی را به منظور انکشاف اقتصادی،
            اجتماعی و به روز ساختن جامعه با استفاده از روش‌های نوین آموزشی،
            فعالیت‌های تحقیقاتی و تدویر سمینارهای علمی فراهم نماید."
      />
      {/* Goals */}
      <Goals goals={goalsOf_CS} values={valuesOf_CS} />
      {/* origanization charts */}
      <OrganizationChart chartImg={chartImg} />
    </div>
  )
}

export default ComputerScience
