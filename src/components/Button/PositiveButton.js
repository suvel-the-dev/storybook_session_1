import React from 'react'
import Button from '.'

const PositiveButton = ({ children, ...props }) => {
    return (
        <Button
            rounded={true}
            borderRadius={10}
            background={"#FFED00"}
            width={'150px'}
            height={'40px'}
            {...props}
        >
            {children}
        </Button >
    )
}

export default PositiveButton
