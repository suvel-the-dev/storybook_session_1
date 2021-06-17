import React from 'react'
import './style.css'

const Pill = ({ children, color = '#d8d8d8' }) => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                background: color,
            }}
            className='pill'
        >
            {children}
        </div>
    )
}

export default Pill
