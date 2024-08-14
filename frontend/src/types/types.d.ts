declare module 'uuid'

export type ProductType = {
    id: string;
    name: string;
    type: string;
    description:  string;
    imageUrl: string;
    status: string;
}
export type ProductPriceType = {
    productId: string,
    priceName?: string,
    priceDescription: string,
    priceType: string,
    priceAmount: string,
}

export type ProductPriceFromAPIType = {
    productId: string,
    name?: string,
    description: string,
    type: string,
    unitPrice: { amount: string, currencyCode: string }
}

export type ProductDataType = {
    data: array<any>,
}