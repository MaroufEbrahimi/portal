import React, { useState } from "react"
import "./DeleteStudent.css"
import ModalDelete from "../../components/UI/ModalDelete/ModalDelete"
import Update from "../../components/Update/Update"

const DeleteStudent = (props) => {
  const [showModal, setShowModal] = useState(false)
  const showModalHandler = () => {
    setShowModal(true)
  }
  const modalCloseHandler = () => {
    setShowModal(false)
  }
  return (
    <div className="delete_student fade_in">
      <div className="delete_lock_buttons">
        <button className="btn" onClick={showModalHandler}>
          پاک کردن
        </button>
        <button className="btn">قفل کردن</button>
        <ModalDelete show={showModal} modalClose={modalCloseHandler}>
          <div className="delete_cancel_modal">
            <i className="bi bi-exclamation-diamond"></i>
            <h3>مطمین هستید؟</h3>
            <p>بصورت دایمی پاک خواهد شد</p>
            <div className="del_cancel_btn">
              <button className="btn delete_btn">پاک کردن</button>
              <button className="btn" onClick={modalCloseHandler}>
                نخیر
              </button>
            </div>
          </div>
        </ModalDelete>
      </div>

      {/* info */}
      <Update />
    </div>
  )
}

export default DeleteStudent
