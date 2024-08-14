import {getProductPricesById} from "@/app/api/products/products";
import {CustomList} from "@/ui/components/customList/CustomList";
import React, {Suspense} from "react";
import LoadingProductPrices from "@/app/prices/product/[id]/loading"
import { ProductPriceType} from "@/types/types";
import {splitCamelCaseString} from "@/utils/utils";

export default async function PricesListPage ({params: {id = ''}}:{ params: {id: string}}){

    const pricesListsFromApi: ProductPriceType[] | undefined = await getProductPricesById(id, true);

    let pricesListHeaders: string[] = ['Product ID', 'Price Name', 'Price Description', 'Price Type', 'Price Amount'];
    if (pricesListsFromApi) {
        pricesListHeaders= Object.keys(pricesListsFromApi[0])?.map(key => splitCamelCaseString(key).toUpperCase())
    }

    return (
        <main className="min-h-screen flex justify-items-center justify-center py-10 ">
            <Suspense fallback={<LoadingProductPrices/>}>
                <CustomList  listName={'Products prices list:'} isProductsList={false} listItems={pricesListsFromApi?.flat() as any[]} listHeaders={pricesListHeaders}/>
            </Suspense>

        </main>
    );
}