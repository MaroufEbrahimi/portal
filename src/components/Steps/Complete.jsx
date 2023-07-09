import React from "react"
import { Link } from "react-router-dom"

export const Complete = ({ apiResponse }) => {
  console.log(apiResponse)
  return (
    <div className="complete_step">
      <div className="complete_details">
        <h2>{apiResponse?.message}</h2>
      </div>
    </div>
  )
}
