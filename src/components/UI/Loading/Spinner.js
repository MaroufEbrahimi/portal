import React from "react"
import "./ButtonLoading.css"

const Spinner = () => {
  return (
    <div className="lds-ring gen-loading" >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
