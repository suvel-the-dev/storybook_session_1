import React from 'react'
import './style.css'

const Button = ({
    children,
    disabled,
    background = "#d8d8d8",
    rounded,
    borderRadius = 10,
    width = "auto",
    height = "auto",
    ...props }) => {

    //Style Attribute validation
    const borderRadiusValue = rounded ? borderRadius : 0;
    //End

    return (
        <button
            className='btn'
            disabled={disabled}
            style={{
                background,
                borderRadius: borderRadiusValue,
                width,
                height
            }}
            {...props}>
            {children}
        </button >
    )
}

export default Button
