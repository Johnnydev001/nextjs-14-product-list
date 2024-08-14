'use client';

import React from "react";
import {generateUUID} from "@/utils/utils";
import {CustomListHeaderButtons} from "@/ui/components/customList/customListHeader/CustomListHeaderButtons";

export const CustomListHeader = ({isProductsList = false, listName = '', listHeaders = []}: {  isProductsList: boolean,listName: string, listHeaders?: string[] }) => {

    return (
        <header
            className="flex flex-col gap-y-10 self-start text-sm w-full mx-auto px-10">
            <h1 className="text-[#03A982] text-2xl font-bold text-left">{listName}</h1>
            <CustomListHeaderButtons/>
            <div
                className="pb-4 border-b-[1px] border-b-zinc-200 flex justify-between w-full text-sm font-medium tracking-normal text-gray-400  max-md:mt-10 ">
                <ul className={`grid ${isProductsList ? 'grid-cols-6fr': 'grid-cols-[1fr_1fr_1fr_1fr_1fr]'} justify-items-center justify-center gap-5 items-start mt-5 w-full text-sm font-medium  text-zinc-500  max-md:max-w-full`}>
                    {listHeaders?.map((header: string, index: number) => <li title={`List header: ${header}`}
                                                                             key={generateUUID() || String(index)}>{header} </li>)}
                </ul>

            </div>

        </header>

    )
}

