// @app
import { GET_ALL_PRODUCTS } from "src/graphql/queries";

export const LIST_OF_PRODUCTS: any[] = [
  {
    request: {
      query: GET_ALL_PRODUCTS,
    },
    result: {
      data: {
        products: {
          items: [
            {
              "description": "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
              "id": "1",
              "name": "Laptop",
              "slug": "laptop",
              "assets": [
                {
                  "source": "https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg",
                }
              ],
              "variants": [
                {
                  "id": "1",
                  "name": "Laptop 13 inch 8GB",
                  "priceWithTax": 155880,
                  "productId": "1",
                },
                {
                  "id": "2",
                  "name": "Laptop 15 inch 8GB",
                  "priceWithTax": 167880,
                  "productId": "1",
                },
                {
                  "id": "3",
                  "name": "Laptop 13 inch 16GB",
                  "priceWithTax": 263880,
                  "productId": "1",
                },
                {
                  "id": "4",
                  "name": "Laptop 15 inch 16GB",
                  "priceWithTax": 275880,
                  "productId": "1",
                }
              ],
            },
          ],
        }
      },
    },
  },
];