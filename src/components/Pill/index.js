import React from 'react'
import './style.css'

const Pill = ({ children, height, color = '#d8d8d8' }) => {
    return (
        <div
            style={{
                width: "100%",
                background: color,
                height,
            }}
            className='pill'
        >
            {children}
        </div>
    )
}

export default Pill
