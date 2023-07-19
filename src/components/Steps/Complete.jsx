import React from "react"

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
