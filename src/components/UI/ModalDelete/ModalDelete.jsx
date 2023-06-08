import React from "react"
import Wrapper from "../../HOC/Wrapper"
import "./ModalDelete.css"
import BackDrop from "../BackDrop/BackDrop"

const ModalDelete = (props) => {
  return (
    <Wrapper>
      <BackDrop show={props.show} removeOrder={props.modalClose} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  )
}

export default ModalDelete
