import React, { useState } from "react"
import "./UpdateStudentPage.css"
import ModalDelete from "../../components/UI/ModalDelete/ModalDelete"
import UpdateStudent from "../../components/UpdateStudent/UpdateStudent"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import MessageBox from "../../components/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"
import { useNavigate } from "react-router-dom"


const UpdateStudentPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const [apiResponse, setapiResponse] = useState({})
  const showModalHandler = () => {
    setShowModal(true)
  }
  const modalCloseHandler = () => {
    setShowModal(false)
  }
  console.log(apiResponse)
  return (
    <div className="delete_student fade_in">


      {/* info */}
      <UpdateStudent
        setApiResponse={setapiResponse}
      />

      <BackDrop show={apiResponse.show}>
        {
          <MessageBox
            messageType="info"
            firstBtn={{
              btnText: "تایید",
              onClick: () => navigate("/students"),
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
