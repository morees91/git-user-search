import * as React from 'react';

interface Props{
name:string,
placeholder:string,
Value:string,
Onchange: any,
className:string


}


export default function Input({name,placeholder,Value,Onchange,className}:Props){


    return(
        <input className={className} name={name} placeholder={placeholder} value={Value} onChange={Onchange}/>
    )
}