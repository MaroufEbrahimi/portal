import React, { useState } from "react"
import "./UpdateStudentPage.css"
import UpdateStudent from "../../components/UpdateStudent/UpdateStudent"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import MessageBox from "../../components/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"
import { useNavigate } from "react-router-dom"

const UpdateStudentPage = () => {
  const navigate = useNavigate()
  const [apiResponse, setapiResponse] = useState({})

  return (
    <div className="update_student_page fade_in ">
      {/* Student Information */}
      <UpdateStudent setApiResponse={setapiResponse} />

      {/* Message box For Confirmation */}
      <BackDrop show={apiResponse.show}>
        {
          <MessageBox
            messageType="info"
            firstBtn={{
              btnText: "تایید",
              onClick: () => navigate("/admin/students"),
            }}
            message={apiResponse.message}
            iconType={ICONS.info}
          />
        }
      </BackDrop>
    </div>
  )
}

export default UpdateStudentPage
