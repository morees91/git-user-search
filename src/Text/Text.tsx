import * as React from 'react';
import './Text.css'
interface Props{
    className:string,
    children:React.ReactNode
}

export default function Text({className,children}:Props){


    return(
        <p className={className}>{children}</p>
    )
}