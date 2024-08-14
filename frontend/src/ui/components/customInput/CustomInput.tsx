'use client';
import React from "react";
import {SearchIcon} from "@/ui/icons/SearchIcon";

export const CustomInput = ({savedInputValue = '',setSavedInputValue = () => {},inputPlaceHolder = '', className = ''}: {savedInputValue: string, setSavedInputValue: any, inputPlaceHolder: string , className: string}) => {
    const handleChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        event.preventDefault()
        setSavedInputValue(event.target.value);
    };

    return <div className={'flex gap-x-2 items-center'}>
        <SearchIcon className={'shrink-0 6 aspect-square'}/>
        <input type={'text'} value={savedInputValue} role={'searchbox'} aria-label={'custom generic input field'}
               onChange={handleChange} placeholder={inputPlaceHolder} className={className}/>
    </div>

}