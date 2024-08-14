'use client'

import {useCallback} from 'react'
import {CustomButton} from "@/ui/components/customButton/CustomButton";

export default function Error({error = {digest: '', name: '', message: ''},reset = () => {}}: {
    error: Error & { digest?: string }
    reset: () => void
}): JSX.Element {
    const handleErrorReset = useCallback(() => {
        reset()
    }, [error])

    return (
        <main className={'grid gap-y-2 mt-10 fixed right-0 left-0 z-30 bg-zinc-100 text-black px-4 py-2 rounded-md'} role={'dialog'} aria-label={'Error page'} aria-live={'assertive'} >
            <h2 className={'text-lg '}>Something went wrong!</h2>
            <CustomButton onClick={handleErrorReset} className={'text-center justify-items-center justify-center flex gap-5 p-4 text-md rounded-md font-semibold whitespace-nowrap hover:bg-[#03A982] text-white bg-[#004C3A]'}>
                Try again
            </CustomButton>
        </main>
    )
}