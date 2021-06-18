import React from 'react'
import Button from './'

const buttonVariantColorMap = {
    PRIMARY: { bg: '#ffed00', color: '#000000' },
    SECONDARY: { bg: '#ed232a', color: '#f3f3f3' },
    TERTIARY: { bg: '#f3f3f3', color: '#000000' }
}

const ThemedButton = ({ children, variant = 'PRIMARY', ...props }) => {
    return (
        <Button
            height='40px'
            background={buttonVariantColorMap[variant].bg}
            color={buttonVariantColorMap[variant].color}
            // fontWeight={'500'}
            {...props}> {children}
        </Button >
    )
}

export default ThemedButton
