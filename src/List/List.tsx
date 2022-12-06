import * as React from 'react';

interface Props {
    className: string,
    children: React.ReactNode
}

export default function List({ className, children }: Props) {


    return (

        <ul className={className}>
            {children}
        </ul>
    )
}