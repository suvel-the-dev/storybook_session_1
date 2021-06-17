import React from 'react'
import './style.css'

const Modal = ({
    children,
    color = '#d8d8d8'
}) => {
    return (
        <div
            style={{ background: color }}
            className='modal' >
            {children}
        </div >
    )
}

export default Modal
