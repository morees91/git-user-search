import * as React from 'react';
import './Image.css'

interface Props{
img:string,
imageName:string,
className:string
}


export default function Image({ img,imageName,className}:Props){

    return(
        <img className={className} src={img} alt={imageName}/>
    )
}