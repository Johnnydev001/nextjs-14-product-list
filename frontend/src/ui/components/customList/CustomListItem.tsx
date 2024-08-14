import React, {useCallback, useEffect, useState} from "react";
import Image from "next/image";

export const CustomListItem = ({ item = {}, itemKey = '' }: {item: any, itemKey: string}) => {

    const [copiedText, setCopiedText] = useState({
        wasCopied: false, text: ''
    });

    const copyItemToClipboard = useCallback (
        async (event: MouseEvent, item: string) => {
            event.preventDefault();

            try {
                await navigator?.clipboard?.writeText(item);
                setCopiedText({
                    wasCopied: true,
                    text: item
                });

            } catch (err) {
                console.error('Failed to copy to clipboard: ', err);
            }
        },[copiedText.wasCopied])

    useEffect(() => {
        setTimeout(() => {
            setCopiedText({
                wasCopied: false,
                text: ''
            });
        }, 1000)
    }, [])

    const mapItemAttributes = (item: any) => {

        const itemAttributes = Object?.values(item);

        if (itemAttributes?.length) {
            return (
                itemAttributes?.map((value, index) => {

                    const elemValue = value ? String(value) :  'N/A';

                    const elemIsImage = elemValue.includes('.png') || elemValue.includes('.jpg') || elemValue.includes('.jpeg') || elemValue.includes('.gif') || elemValue.includes('.svg') || elemValue.includes('https') || elemValue.includes('http');

                    return (
                        <li className={`self-center flex text-center text-sm text-black  hover:cursor-pointer relative max-w-[15em] truncate overflow-x-scroll`}
                            title={`List item: ${elemValue}`} key={itemKey} role={'listitem'}
                            onClick={async (event: any) => await copyItemToClipboard(event, elemValue)}>
                            {copiedText.wasCopied && copiedText.text === elemValue && <span className={'fixed top-0 right-0  left-0 z-30 bg-zinc-100 text-black px-4 py-2 rounded-md text-md'}>Copied to clipboard!</span>}

                            <div className={'capitalize self-center justify-self-center'}>
                                {elemIsImage ? (
                                        <Image src={elemValue} width={100} height={100} alt={'List item image'} className={'aspect-square '} />

                                    ) :
                                    <data title={`List item: ${elemValue}`} value={elemValue}>
                                        {elemValue}
                                    </data>}

                            </div>


                        </li>
                    )
                    }
                )
            )
        }
    }

    return (
        mapItemAttributes(item)
    )
}