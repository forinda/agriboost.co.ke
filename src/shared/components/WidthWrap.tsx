import React from 'react'

type WidthWrapProps = {
    width?: number
    children: React.ReactNode
}

const WidthWrap: React.FunctionComponent<WidthWrapProps> = ({ width, children }) => {
    return (
        <div style={{ maxWidth: width || 1280, margin: '0 auto',width:'100%' }}>
            {children}
        </div>
    )
}

export default WidthWrap