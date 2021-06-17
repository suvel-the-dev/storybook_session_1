import React from 'react'
import './style.css'

const Typography = ({
    variant,
    children,
    color = '#000000',
    ...props
}) => {
    const typoProp = { color, ...props }
    switch (variant) {
        case "big-header":
            return <h1 style={{ ...typoProp }}>
                {children}
            </h1>;
        case "medium-header":
            return <h3 style={{ ...typoProp }}>
                {children}
            </h3>;
        case "small-header":
            return <h5 style={{ ...typoProp }}>{children}</h5>;
        case "label":
            return <label style={{ ...typoProp }}>
                {children}
            </label>;
        case "paragraph":
            return <p style={{ ...typoProp }}>
                {children}
            </p>
        default: return;
    }

}

export default Typography
