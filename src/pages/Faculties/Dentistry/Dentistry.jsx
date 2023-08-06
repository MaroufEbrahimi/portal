import React, { useState, useEffect } from "react"
import "./Dentistry.css"
import IntroductionOfFaculty from "../../../components/FacultiesSections/IntroductionOfFaculty"
import IntroOfDeanOfFaculty from "../../../components/FacultiesSections/IntroOfDeanOfFaculty"
import Goals from "../../../components/FacultiesSections/Goals"
import {
  valuesOf_Dentistry,
  dentistry_references_tabHeader,
  goalsOf_Dentistry,
  dentistry_reference1,
  dentistry_reference2,
  dentistry_reference3,
  dentistry_reference4,
  dentistry_reference5,
  dentistry_reference6,
  dentistry_reference7,
  dentistry_reference8,
  dentistry_reference9,
  dentistry_reference10,
} from "../../../constants/Data"
import ViewPoint from "../../../components/FacultiesSections/ViewPoint"
import OrganizationChart from "../../../components/FacultiesSections/OrganizationChart"

import deanImg from "../../../assets/img/deans/Ali-Reza-Shojayee.jpeg"
import chartImg from "../../../assets/img/organization_charts/چارت-تشکیلاتی-پوهنحی-ستوماتالوژی-1024x853.jpg"
import Footer from "../../../components/Footer/Footer"

const Dentistry = () => {
  const [showTabSemester, setShowTabSemester] = useState(1)

  const handleTabsSemester = (index) => setShowTabSemester(index)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="dentistry">
      {/* introduction of faculty */}
      <IntroductionOfFaculty
        facultyText1="پوهنحی ستوماتولوژی مؤسسه تحصیلات عالی هریوا در سال 1393 هجری شمسی تأسیس گردیده و متعهد به ارائه آموزش های علمی و عملی در بخش طب دندان با استفاده از تکنالوژی جدید و تقدیم کدر های متخصص و مسلکی به جامعه می باشد."
        facultyText2="در رأس پوهنحی ستوماتولوژی رئیس آن پوهنحی قرار دارد که به ریاست مؤسسه گزارش ده می باشد. تحت ریاست پوهنحی ستوماتولوژی بخش های معاونیت پوهنحی، مدیریت تدریس، مدیریت اجرائی، آمریت دیپارتمنت پاراکلینیک و آمریت دیپارتمنت کلینیک قرار دارد. در حال حاضر پوهنحی ستوماتولوژی مؤسسه تحصیلات عالی هریوا36 تن استاد دارد که از جمله یک تن آنها دوکتورا، 22 تن آنها ماستر/متخصص و 13 تن آنها لیسانس (پوهاند)می باشند. تعداد محصلین پوهنحی ستوماتولوژی مؤسسه در حال حاضر (1401 ه. ش) به 473تن  محصل میرسد."
      />

      {/* introduction of the Dean of the faculty */}
      <IntroOfDeanOfFaculty
        deanImg={deanImg}
        deanName="دکتور علیرضا شجاعی"
        FieldofStudy="طب دندان (Stomatology)"
        deanDegree="ماستر"
        deanDuty="رئیس پوهنحی ستوماتولوژی"
        deanCallNum="۰۷۹۳۱۳۱۰۰۰"
        deanEmail="Shojaei_1992@yahoo.com"
        deanTxt1="ز دانش بود جان ودل را فروغ ! با آرزوی بهترین تمنیات : از آنجاییکه رشته طب دندان (Stomatology) جزٔ ناب ترین و با ارزش ترین رشته های تحصیلی طبی در سطح جهان مطرح بوده، و نیازاساسی هرجامعه را تشکیل می دهد. محصلان ارجمند ما بعد از سپری نمودن و فارغ التحصیلی ازاین رشته، قادرخواهند بود تا به تداوی امراض مرتبط با این رشته تحصیلی مصدرخدمت برای انسان های نیازمند شوند. من، کدرعلمی واداری با افتخارموظف در دانشکده ستوماتولوژی موسسه تحصیلات عالی هریوا مصمم هستیم تا با به کارگیری از منابع انسانی با ظرفیت و متخصص، به تربیه انسانهای متعهد، مجرب وکاردان در عرصه طب دندان بپردازیم، تا از این رهگذر پاسخگوی نیازهای جامعه دراین رشته باشیم. ریاست این دانشکده با داشتن پلان های استراتژیک، برنامه های منظم ارتقای کیفیت تدریس، افزایش سطح دانش علمی وعملی،کارآفرینی، ….. میکوشد تا بستر مناسبی را برای فراگیری علم محیا نماید."
        deanTxt2="من افتخار دارم که منحیث رئیس دانشکده ستوماتولوژی این موسسه در خدمت جامعه علمی و اکادمیک خویش قراردارم وصادقانه تعهد می سپارم که با استفاده ازامکانات وتسهیلات موجود، وهمچنان با فراهم آوری سایر نیازمندی های مورد ضرورت در زمینه فراگیری دانش بیشتروکسب مهارت های مفید ومدرن چی به شکل تیوری وچی به شکل عملی آن برای محصلان باعزت این دانشکده مهیا سازم تا بتوانیم به توکل خداوند جبار(ج) درآینده دکتوران ورزیده وکاردان را تقدیم جامعه نماییم. ومن الله توفیق"
      />

      {/* این بخش شامل تمامی دیپارتمنت های پوهنحی مربوطه می شود */}
      <div className="departements">
        <div className="faculties_sections_title">
          <h2>مفردات درسی</h2>
        </div>

        <div className="dentistry_tabHeaders tab_header">
          {dentistry_references_tabHeader.map((item) => (
            <ul>
              <li
                className={showTabSemester === item.counter ? "active_tab" : ""}
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
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference1.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 2
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference2.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 3
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference3.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 4
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference4.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 5
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference5.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 6
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference6.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 7
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference7.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 8
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference8.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 9
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference9.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          showTabSemester === 10
            ? "tab_header_display active_content box_shadow"
            : "tab_header_display"
        }
      >
        <div className="dep_reference_table">
          <div className="table_row table_header">
            <div className="table_cell">
              <p>ماژول</p>
            </div>
            <div className="table_cell">
              <p>تعداد کردیت</p>
            </div>
          </div>
          {dentistry_reference10.map((item) => (
            <div className="table_row">
              <div className="table_cell">
                <p>{item.moudle}</p>
              </div>
              <div className="table_cell">
                <p>{item.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Point */}
      <ViewPoint
        viewPoint="پوهنحی طب دندان موسسه تحصیلات عالی هریوا تلاش دارد تا در قسمت آموزش وپرورش کادر علمی و تحقیقات علمی یک پوهنحی مفید وتوانمند دربخش طبابت وسلامت دهان ودندان برای جامعه بوده و با بکار گیری تکنولوژی های پیشرفته معاصر به یک پوهنحی موفق در سطح کشور تبدیل گردد و در رسیدن به اهداف موسسه تحصیلات عالی هریوا که همانا کسب نمودن جایگاه یک پوهنتون معتبر، باکیفیت و معیاری در سطح کشور و منطقه است، یک سهم فعال داشته باشد."
        mission="پوهنحی طب دندان موسسه تحصیلات عالی هریوا متعهد است تا با استفاده از تکنولوژی های جدید معاصر در راستای رشد جامعه در زمینه تدریس، تحقیق و درمان بیماری­های دهان و دندان سهم فعال خویش را ایفأ نموده و با تأکید بر معیارهای آموزشی ومتناسب با فرهنگ جامعه در چارچوب قوانین وزارت محترم تحصیلات عالی، عدالت اجتماعی و ایجاد فرصت­های مساویانه تحصیلی برای تمام اتباع کشور در جهت ارتقای سطح دانش علمی و مسلکی، بهبود فرایند یادگیری محصلان، افزایش سطح کمی وکیفی فعالیت های تحقیقاتی، تولید اندیشه در بازار کار و تداوی امراض دهان و دندان  به یک نام معتبر در جامعه تبدیل گردد."
      />

      {/* Goals */}
      <Goals goals={goalsOf_Dentistry} values={valuesOf_Dentistry} />

      {/* origanization charts */}
      <OrganizationChart chartImg={chartImg} />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Dentistry
