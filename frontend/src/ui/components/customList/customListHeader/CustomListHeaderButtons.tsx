"use client";
import {CustomInput} from "@/ui/components/customInput/CustomInput";
import {CustomButton} from "@/ui/components/customButton/CustomButton";
import React, {useCallback, useEffect} from "react";
import {useRouter} from "next/navigation";

export const CustomListHeaderButtons = () => {

    const router = useRouter();
    const [savedInputValue, setSavedInputValue] = React.useState('')
    const [isValidProductInput, setIsValidProductInput] = React.useState(true)

    const handleSearch = useCallback(
        (event: { preventDefault: () => void; }) => {
            event.preventDefault()

            if (savedInputValue){
                router.push(`/prices/product/${savedInputValue}`)
            } else {
                router.push('/')
            }

        }, [savedInputValue] )

    const handleGoBack = useCallback(() => {
        router.push('/')
    }, [router])

    useEffect(() => {
        if (savedInputValue.split('_')[0] === 'pro') {
            setIsValidProductInput(true)
        } else {
            setIsValidProductInput(false)
        }

    }, [savedInputValue])


    return (
        <div className={'flex w-full items-center self-end justify-between'}>

            <CustomButton
                className={'self-start flex gap-5 justify-between p-4 text-md rounded-md font-semibold whitespace-nowrap hover:bg-[#03A982] text-white bg-[#004C3A]'}
                onClick={handleGoBack}>
                <p>Go back</p>
            </CustomButton>

            <div className={'flex gap-x-2 '}>
                <div className="flex gap-2 p-2 items-center rounded-xl bg-slate-100">
                    <CustomInput savedInputValue={savedInputValue} setSavedInputValue={setSavedInputValue}
                                 inputPlaceHolder={'Type the product ID...'}
                                 className="flex gap-2 p-2 text-gray-400 bg-slate-100 placeholder:text-gray-600 min-w-96"/>
                </div>
                <CustomButton
                    disabled={!isValidProductInput}
                    className={`${isValidProductInput ? 'hover:bg-[#03A982] text-white bg-[#004C3A] cursor-pointer': 'bg-zinc-400 text-black cursor-not-allowed'} flex gap-5 justify-between p-4 text-md rounded-md font-semibold whitespace-nowrap `}
                    onClick={handleSearch}>
                    <p>Search</p>

                </CustomButton></div>

        </div>
    )
}