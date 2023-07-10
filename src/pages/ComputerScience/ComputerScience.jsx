import React from "react"
import "./ComputerScience.css"
import IntroductionOfFaculty from "../../components/FacultiesSections/IntroductionOfFaculty"
import IntroOfDeanOfFaculty from "../../components/FacultiesSections/IntroOfDeanOfFaculty"
import Departements from "../../components/FacultiesSections/Departements"
import ViewPoint from "../../components/FacultiesSections/ViewPoint"
import Goals from "../../components/FacultiesSections/Goals"
import OrganizationChart from "../../components/FacultiesSections/OrganizationChart"
import { CS_Introduction } from "../../constants/Data"

const ComputerScience = () => {
  return (
    <div className="computerScience">
      {/* introduction of faculty */}
      <IntroductionOfFaculty
        facultyText1="پوهنحی کمپیوترساینس مؤسسه تحصیلات عالی هریوا در سال 1393 هجری شمسی به هدف تربیه کدر ها و اشخاص متخصص و مسلکی و ارائه آموزش های کمپیوتری معیاری و با کیفیت مطابق نیاز جامعه در بخش تولید نرم افزارهای کامپیوتر، مدیریت و امنیت شبکه های کامپیوتری، مدیریت سیستمهای معلوماتی و دیتابیس تأسیس گردیده است. در پوهنحی کمپیوترساینس تدریس تمام دروس عملی و نظری با استفاده از تکنالوژی عصری ارائه میگردد و نصاب درسی این پوهنحَی مطابق با نصاب تعیین شده وزارت تحصیلات عالی کشور می باشد."
        facultyText2="در رأس پوهنحی کمپیوتر ساینس رئیس آن پوهنحی قرار دارد که به ریاست مؤسسه گزارش ده می باشد. تحت ریاست پوهنحی کمپیوترساینس بخش های مدیریت تدریس، مدیریت اجرائی، آمریت دیپارتمنت انجینری نرم افزار و آمریت دیپارتمنت دیتابیس قرار دارد. در حال حاضر پوهنحی کمپیوتر ساینس مؤسسه تحصیلات عالی هریوا 16 تن استاد دارد که از جمله یک تن آنها دوکتورا، 8 تن آنها ماستر و 7 تن آنها لیسانس می باشند. تعداد محصلین پوهنحی کمپیوترساینس مؤسسه در حال حاضر (1397 ه. ش) به 150 محصل میرسد."
      />

      {/* introduction of the Dean of the faculty */}
      <IntroOfDeanOfFaculty />

      {/* departements */}
      <Departements />

      {/* View Point */}
      <ViewPoint />

      {/* Goals */}
      <Goals />

      {/* origanization charts */}
      <OrganizationChart />
    </div>
  )
}

export default ComputerScience
