import * as React from 'react';


interface Props{
    children:React.ReactNode,
    classname:string
}


export default function ListItem({children,classname}:Props){

    return(
        <li className={classname}>{children}</li>
    )
}