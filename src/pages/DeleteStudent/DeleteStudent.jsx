import React, { useState } from "react"
import "./DeleteStudent.css"
import ModalDelete from "../../components/UI/ModalDelete/ModalDelete"
import UpdateStudent from "../../components/UpdateStudent/UpdateStudent"

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
      <div className="delete_lock_buttons display_flex align_items_center justify_content_space_between">
        <button className="btn" onClick={showModalHandler}>
          حذف کردن
        </button>
        <button className="btn">قفل کردن</button>
        <ModalDelete show={showModal} modalClose={modalCloseHandler}>
          <div className="delete_cancel_modal">
            <i className="bi bi-exclamation-diamond"></i>
            <h3>مطمین هستید؟</h3>
            <p>بصورت دایمی حذف خواهد شد</p>
            <div className="del_cancel_btn display_flex align_items_center justify_content_space_around">
              <button className="btn delete_btn">پاک کردن</button>
              <button className="btn" onClick={modalCloseHandler}>
                نخیر
              </button>
            </div>
          </div>
        </ModalDelete>
      </div>

      {/* info */}
      <UpdateStudent />
    </div>
  )
}

export default DeleteStudent
