import React from 'react'
import "./Button.css"
import ButtonLoading from '../Loading/ButtonLoading'

function Button({ type, icon, onClick, text, loading }) {
    return (
        <div className='btn_container'>
            <button className={'btn ' + type} onClick={onClick} >
                <i className={"bi " + icon}></i>{text}
            </button>
            {loading && <ButtonLoading />}
        </div>
    )
}

export default Button