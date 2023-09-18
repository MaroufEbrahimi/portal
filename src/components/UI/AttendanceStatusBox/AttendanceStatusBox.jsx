import React, { useState } from 'react'
import "./AttendanceStatusBox.css"
import ICONS from '../../../constants/Icons'
import AttendanceStatusName from '../../../constants/AttendanceStatusName'

function AttendanceStatusBox({ attendanceStatus = AttendanceStatusName.UNKNOWN, sendDataToTheAPI, hidden, studentId, dayNumber }) {
    const [attendanceStatusName, setAttendanceStatusName] = useState(attendanceStatus)
    const [icon, setIcon] = useState(getIcon(attendanceStatus))

    function getIcon(attendanceStatus) {
        if (attendanceStatus == AttendanceStatusName.UNKNOWN) {
            return false
        } else if (attendanceStatus == AttendanceStatusName.PRESENT) {
            return ICONS.thick;
        } else if (attendanceStatus == AttendanceStatusName.ABSENT) {
            return ICONS.cross;
        }
    }

    const handleOnClick = () => {
        let temp = ''
        if (attendanceStatusName == AttendanceStatusName.UNKNOWN) {
            temp = AttendanceStatusName.PRESENT
            setIcon(ICONS.thick)
        } else if (attendanceStatusName == AttendanceStatusName.PRESENT) {
            temp = AttendanceStatusName.ABSENT
            setIcon(ICONS.cross)
        } else if (attendanceStatusName == AttendanceStatusName.ABSENT) {
            temp = AttendanceStatusName.UNKNOWN
            setIcon(false)
        }
        setAttendanceStatusName(temp)
        console.log(temp)
        sendDataToTheAPI(temp, studentId, dayNumber)
    }
    return (
        !hidden &&
        <div onClick={handleOnClick} className='attendance_status_box' hidden={hidden}>
            {icon && <i className={icon}></i>}
        </div>
    )
}

export default AttendanceStatusBox