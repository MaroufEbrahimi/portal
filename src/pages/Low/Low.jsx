import React from "react"
import "./Low.css"
import IntroductionOfFaculty from "../../components/FacultiesSections/IntroductionOfFaculty"
import IntroOfDeanOfFaculty from "../../components/FacultiesSections/IntroOfDeanOfFaculty"
import Goals from "../../components/FacultiesSections/Goals"
import { goalsOf_LOW } from "../../constants/Data"
import { valuesOf_LOW } from "../../constants/Data"
import ViewPoint from "../../components/FacultiesSections/ViewPoint"
import OrganizationChart from "../../components/FacultiesSections/OrganizationChart"

import deanImg from "../../assets/img/deans/عبدالمتین-منیب-768x960.jpeg"
import chartImg from "../../assets/img/organization_charts/چارت-تشکیلاتی-پوهنحی-حقوق-1024x853.jpg"

const Low = () => {
  return (
    <div className="low">
      {/* introduction of faculty */}
      <IntroductionOfFaculty
        facultyText1="پوهنحی حقوق و علوم سیاسی مؤسسه تحصیلات عالی هریوا در سال 1394 هجری شمسی تأسیس گردیده و در جهت ترویج فرهنگ حاکمیت قانون و تربیه کدر های مسلکی از جمله حقوقدانان، سیاستمداران، قضات، حارنوالان، و وکلای مدافع فعالیت می کند. این پوهنحی متعهد به ارائه آموزش های حقوقی معیاری و با کیفیت مطابق نیاز های روز جامعه می باشد."
        facultyText2="در رأس پوهنحی حقوق و علوم سیاسی رئیس آن پوهنحی قرار دارد که به ریاست مؤسسه گزارش ده می باشد. تحت ریاست پوهنحی حقوق و علوم سیاسی بخش های مدیریت تدریس، آمریت دیپارتمنت اداری – دیپلوماسی، آمریت دیپارتمنت قضای – خارنوالی و آمریت کلینیک حقوقی قرار دارد. در حال حاضر پوهنحی حقوق و علوم سیاسی مؤسسه تحصیلات عالی هریوا 39 تن استاد دارد که از جمله یک تن آنها دوکتورا، 29 تن آنها ماستر و 9 تن آنها لیسانس می باشند. تعداد محصلین پوهنحی حقوق و علوم سیاسی مؤسسه در حال حاضر (1397 ه. ش) به 212 محصل میرسد."
      />

      {/* introduction of the Dean of the faculty */}
      <IntroOfDeanOfFaculty
        deanImg={deanImg}
        deanName="عبدالمتین منیب"
        FieldofStudy="حقوق جزا و جرم شناسی"
        deanDegree="ماستر"
        deanDuty="رئیس پوهنـځی حقوق و علوم سیاسی"
        deanCallNum="۰۷۸۰۰۶۸۰۶۸"
        deanEmail="matinmonin57@gmail.com"
        deanTxt1="حقوق و علوم سیاسی یکی از کهن ترین رشته های علوم انسانی است که در ادوار مختلف با تناسب نیازهای جامعه بشری رشد و توسعه یافته است. این رشته که بازتاب دهنده عدالت و اجرای حق های بشری می باشد، تأمین کننده نیازهای فردی و جمعی نیز بوده و همزمان با پیشرفت های علمی و فنی تکامل یافته، تا جائیکه هیچ حرکت در جامعه بشری وجود ندارد مگر اینکه تحت امر قواعد حقوق قرار داشته و یا باید مطابق با قواعد و مقررات این رشته علمی قرار گیرد. افغانستان نیز از این قاعده کلی و امری استثناء نیست. از همین رو، از زمان های دور مردم این مرز وبوم با مسائل و موضوعات حقوقی آشنایی داشته و در نظام های مختلف بگونه های متفاوت از آن استفاده شده است. همچنین رشد و توسعه نظام حقوقی کشور نشان از آن دارد که ضرورت جامعه به حفظ و پایداری قواعد حقوقی، تبیین و توضیح آنها امر الزامی بوده است. بنابر این، این ضرورت همچنان در صدر نیازهای هر جامعه بشری به ویژه در کشور عزیزمان افغانستان احساس مبرم پنداشته می شود. از این رو، ریاست دانشکده حقوق و علوم سیاسی مؤسسه تحصیلات عالی هریوا بر خود لازم می داند تا هرچه بیشتر و بهتر در زمینه توسعه و رشد مسائل حقوقی، در قالب تدریس و تحقیق و آن هم مبتنی بر اجرای عدالت همت گماشته و زمینه جلب و جذب بیشتر دانشجویان این رشته را مهیا سازد."
        deanTxt2="و پس از تهیه موارد لازم انتظار دارد کادرهای علمی و فنی را به جامعه تقدیم نماید که توانایی علمی و تخصصی ایشان باعث رشد فکری و علمی و در عین حال سبب حل مشکلات ناشی از کژ فهمی های حقوقی گردد. همچنین ریاست دانشکده حقوق و علوم سیاسی مؤسسه تحصیلات عالی هریوا بر خود می بالد که به عنوان یکی از دانشکده های افتخار آفرین این مؤسسه، میزبان جوانان علم جو و حقیقت خواهی قرار دارد که در آینده حقوق دانان و اندیشمندان این سرزمین اند. سرانجام اینکه دانشکده حقوق و علوم سیاسی همچنان عَلم دار هدایت و تأمین کننده حق ها و حقوق جامعه بشری است و این مسئولیت بزرگ بر عهده این دانشکده قرار داشته، لذا ریاست این دانشکده با درک این مطلب متعهد به تأمین و اجرای کلیه این ضرورت های مبرم جامعه بشری می باشد."
      />

      {/* View Point */}
      <ViewPoint
        viewPoint="پوهنحی حقوق و علوم سیاسی مؤسسه تحصیلات عالی هریوا متعهد است که با ارائه آموزش های حقوقی تئوری و عملی منطبق با معیارات وزارت تحصیلات عالی و نیازهای جامعه، جایگاه خویش را تثبیت نموده و به ارائه خدمات مسلکی و تخصصی در دیپارتمنت های قضایی حارنوالی و اداری دیپلماسی برای رهپویان دانش بپردازد."
        mission="پوهنحی حقوق و علوم سیاسی مأموریت دارد تا زمینه آموزش معیاری و ایجاد ظرفیت ها و تربیت کادرهای علمی و مسلکی ( حقوقدانان، حارنوالان، وکلای مدافع، دیپلمات ها، و تحلیل گران سیاسی) را از طریق تدریس، تحقیق، برگزاری محاکم تمثیلی، مناظره های پارلمانی، شبیه سازی ها و تدویر سیمینارهای علمی و تلاش در جهت کاربردی ساختن دانش حقوق و علوم سیاسی به منظور شناسایی و رفع چالش های موجود جامعه اقدام نماید."
      />

      {/* Goals */}
      <Goals goals={goalsOf_LOW} values={valuesOf_LOW} />

      {/* origanization charts */}
      <OrganizationChart chartImg={chartImg} />
    </div>
  )
}

export default Low
