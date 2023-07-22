import React, { useState } from "react"
import "./UpdateStudentPage.css"
import ModalDelete from "../../components/UI/ModalDelete/ModalDelete"
import UpdateStudent from "../../components/UpdateStudent/UpdateStudent"

const UpdateStudentPage = (props) => {
  const [showModal, setShowModal] = useState(false)
  const showModalHandler = () => {
    setShowModal(true)
  }
  const modalCloseHandler = () => {
    setShowModal(false)
  }
  return (
    <div className="delete_student fade_in">
<<<<<<< HEAD:src/pages/DeleteStudent/DeleteStudent.jsx
      <div className="delete_lock_buttons display_flex align_items_center justify_content_space_between">
        <button className="btn" onClick={showModalHandler}>
          حذف کردن
        </button>
        <button className="btn">قفل کردن</button>
=======
      <div className="delete_lock_buttons">
        <div className="buttons">
          <button onClick={showModalHandler}>
            پـاک کـردن مـحـصـل از سـیـسـتـم <i className="bi bi-trash"></i>
          </button>
          <button>
            قـفـل کـردن مـحـصـل <i className="bi bi-lock"></i>
          </button>
        </div>
>>>>>>> 23163b57c62c2763497e15d9c2c7a42b5de17779:src/pages/UpdateStudentPage/UpdateStudentPage.jsx
        <ModalDelete show={showModal} modalClose={modalCloseHandler}>
          <div className="delete_cancel_modal">
            <i className="bi bi-exclamation-diamond"></i>
            <h3>مطمین هستید؟</h3>
            <p>بصورت دایمی حذف خواهد شد</p>
            <div className="del_cancel_btn display_flex align_items_center justify_content_space_around">
              <button className="btn delete_btn">بـلـی</button>
              <button className="btn" onClick={modalCloseHandler}>
                نـخـیـر
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

export default UpdateStudentPage
