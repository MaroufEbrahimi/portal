import React from "react"
import "./BackDrop.css"

const BackDrop = (props) => {
  return props.show ? (
    <div className="backdrop fade_in" onClick={props.closeModal}>
      {props.children}
    </div>
  ) : null
}

export default BackDrop
