import React from 'react'
import Button from '.'

const NegativeButton = ({ children, ...props }) => {
    return (
        <Button
            rounded={true}
            borderRadius={10}
            background={"#ED232A"}
            width={'150px'}
            height={'40px'}
            {...props}
        >
            {children}
        </Button >
    )
}

export default NegativeButton
