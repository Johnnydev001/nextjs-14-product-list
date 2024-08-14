import {CustomList} from "@/ui/components/customList/CustomList";
import React, {Suspense} from 'react';
import {getProducts} from "@/app/api/products/products";
import LoadingProductPrices from "@/app/prices/product/[id]/loading";
import {ProductType} from "@/types/types";
import {splitCamelCaseString} from "@/utils/utils";

export default async function ProductsPage() {

    const productsListsFromApi: ProductType[] | undefined = await getProducts();

    let productsListHeaders =  ['Product ID', 'Name', "Type", 'Description', 'Image', 'Status'];

    if (productsListsFromApi) {
         productsListHeaders = Object.keys(productsListsFromApi[0])?.map(key => splitCamelCaseString(key).toUpperCase())
    }

    return (
        <main className="min-h-screen flex justify-items-center justify-center py-10 ">
            <Suspense fallback={<LoadingProductPrices/>}>
                <CustomList listName={'Products list:'} isProductsList={true} listItems={productsListsFromApi?.flat() as any[]} listHeaders={productsListHeaders}/>
            </Suspense>

        </main>
    );
}

