import * as React from 'react';

interface Props{
    children:React.ReactNode,
    className:string
    onClick:any
}


export default function Button({children,className,onClick}:Props){

return(
    <button className={className} onClick={onClick}>{children}</button>
)

}