import React from 'react'
import Button from '../UI/Button/Button'
import "./MessageBox.css"

function MessageBox({ messageType, message, firstBtn, secondBtn, iconType, btnText }) {
    return (
        messageType == "info" ?
            <div className="message_box box_shadow">
                <i className={iconType + " message_icon"}></i>
                <p className='message'>{message}</p>
                <Button text={firstBtn?.btnText} type={firstBtn.btnType} onClick={firstBtn?.onClick} />
            </div> :
            <div className="message_box box_shadow">
                <i className={iconType + " message_icon"}></i>
                <p className='message'>{message}</p>
                <div className='btn_conatainer'>
                    <Button text={firstBtn?.btnText} onClick={firstBtn?.onClick} />
                    <Button text={secondBtn?.btnText} onClick={secondBtn?.onClick} />
                </div>
            </div>

    )
}

export default MessageBox