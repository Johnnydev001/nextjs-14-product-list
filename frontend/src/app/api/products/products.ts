import {
    ProductDataType,
    ProductPriceFromAPIType,
    ProductPriceType,
    ProductType
} from "@/types/types";
import fs from 'fs';
import path from 'path';

const rootPath = process.cwd().split('/')?.filter(element => element !== 'frontend').join('/')
const filePath = path?.join(rootPath, 'db.json');

export const fetchProductsData = async (): Promise<ProductDataType> => {
    return await new Promise((resolve, reject) => {
        fs?.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
}

export const mapProductsFromAPI = (productDataFromAPI: ProductDataType): ProductType[] => {

   return productDataFromAPI?.data?.map((elem: ProductType ) => {
       return {
           productId: elem?.id,
           name: elem?.name,
           type: elem?.type,
           description: elem?.description,
           imageUrl: elem?.imageUrl,
           status: elem?.status,
       }

   } );
}


const mapProductsPricesFromAPIById = (productDataFromAPI: ProductDataType, productId?: string, isListFilterable?: boolean) => {

    const productsById: any[] = isListFilterable ?  productDataFromAPI?.data?.filter((element: { id: string; }) => element.id === productId ) : productDataFromAPI?.data || []

    const productPrices = productsById?.map((item = {}, index: number) => item?.prices) || []

    return productPrices.flat().map((elem: ProductPriceFromAPIType ) : ProductPriceType => {
        return {
            productId: elem?.productId,
            priceName: elem?.name,
            priceDescription: elem?.description,
            priceType: elem?.type,
            priceAmount: elem?.unitPrice?.amount + ' ' + elem?.unitPrice?.currencyCode,
        }

    } )

}

export async function getProductPricesById(productId: string, isListFilterable?: boolean): Promise<ProductPriceType[] | undefined>  {

    try {
        const productDataFromAPI = await fetchProductsData();

        return mapProductsPricesFromAPIById(productDataFromAPI, productId, isListFilterable);
    }
    catch (error) {
        console.error('Error fetching product prices data', error);
    }
}

export async function getProducts() : Promise<ProductType[] | undefined> {

    try {
        const productDataFromAPI = await fetchProductsData();

        return mapProductsFromAPI(productDataFromAPI);
    }
    catch (error) {
        console.error('Error fetching products', error);
    }
}