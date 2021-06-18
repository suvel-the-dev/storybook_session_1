import React from 'react'
import './style.css'

const Modal = ({
    children,
    color
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
