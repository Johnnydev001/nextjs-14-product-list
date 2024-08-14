"use client"
import {generateUUID} from "@/utils/utils";
import {CustomListItem} from "@/ui/components/customList/CustomListItem";
import {CustomListHeader} from "@/ui/components/customList/customListHeader/CustomListHeader";
import {useMemo, memo} from "react";

export const CustomList = memo(({listName = '',isProductsList = true,listItems = [], listHeaders = []}: { listName?: string, isProductsList?: boolean,listItems: any[], listHeaders?: string[]}) => {

    const mapListItems =() => {
        return listItems?.map((item = {}, index: number) => {
            const itemUUID = generateUUID() || String(index);

            return (
                <CustomListItem item={item} itemKey={itemUUID} key={itemUUID}/>
            )
        })
    }

    const mappedListItems = useMemo(() => {
        return mapListItems()
    }, [listItems])

    return (
        <article
            className="flex flex-col items-center py-11 bg-white rounded-lg">
            <CustomListHeader isProductsList={isProductsList} listHeaders={listHeaders} listName={listName}/>

            <ul className={` px-10 grid ${isProductsList ? 'grid-cols-6fr': 'grid-cols-[1fr_1fr_1fr_1fr_1fr]'}  justify-items-center justify-center gap-5 items-start mt-5 w-full text-sm font-medium  text-zinc-800  max-md:max-w-full`}>
                {mappedListItems}
            </ul>


        </article>
    )
})
