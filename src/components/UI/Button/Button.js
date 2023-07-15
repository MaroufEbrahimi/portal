import React from 'react'
import "./Button.css"

function Button({ type, icon, onClick, text }) {
    return (
        <button className={'btn ' + type} onClick={onClick} >
            <i class={"bi " + icon}></i>{text}
        </button>
    )
}

export default Button