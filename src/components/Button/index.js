import React from 'react'
import './style.css'

const Button = ({
    children,
    disabled = false,
    background = "#d8d8d8",
    color = '#000000',
    rounded = true,
    borderRadius = 10,
    width = "auto",
    height = "auto",
    fontWeight = '600',
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
                color,
                borderRadius: borderRadiusValue,
                width,
                height,
                fontWeight
            }}
            {...props}>
            {children}
        </button >
    )
}

export default Button
