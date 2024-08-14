import {  describe, it, expect } from "@jest/globals";
import {
    fetchProductsData,
    getProductPricesById,
} from '../../../src/app/api/products/products'
import {productsMock} from "../../__mocks__/products.mock";

describe('Products api tests', () => {

    it('should fetch the products data', async () => {
        const fetchCall = await fetchProductsData();

        expect(fetchCall).toEqual(productsMock)

    });

    it('should catch the error when fetching the products by id when the list is filterable', async () => {

        try {
           await getProductPricesById('pro_01htz88xpr0mm7b3ta2pjkr7w2', true);
            jest.mock('../../../src/app/api/products/products', () => ({
                ...jest.requireActual('../../../src/app/api/products/products'),
                fetchProductsData: jest.fn().mockRejectedValue(new Error('error'))
            }))

        }catch (e) {
            expect(e).not.toBeNull()
            expect(e).toEqual(new Error('error'))
        }
    });
})