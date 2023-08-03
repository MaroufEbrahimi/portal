import React from "react"

export const Complete = ({ apiResponse }) => {

  console.log(apiResponse)

  return (
    <div className="complete_step">
      <div className="complete_details">
        {apiResponse.message?.split('|').map((item, index) => {
          return <span className="message_holder" key={index}>{item}</span>
        })}

      </div>
    </div>
  )
}
