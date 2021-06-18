import React from 'react'
import './style.css'

const Input = ({
    type = 'text',
    background = '#E8E7E7',
    color = '#000000',
    width = '482px',
    height = '50px',
    ...props
}) => {
    return (
        <input
            className={'ip'}
            type={type}
            style={{
                background,
                color,
                width,
                height
            }}
            {...props} />
    )
}

export default Input
