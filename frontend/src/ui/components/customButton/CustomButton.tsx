'use client';
import React from "react";

export const CustomButton = ({disabled= false, onClick = () => {}, className= '', children = null}:  {disabled?: boolean,onClick: React.MouseEventHandler<HTMLButtonElement> , className?: string, children?: any}) => {
    return (<button disabled={disabled} onClick={onClick} role={'button'} aria-label={'Custom generic button to be used everywhere'} className={className}>
        {children}
        </button>)
}