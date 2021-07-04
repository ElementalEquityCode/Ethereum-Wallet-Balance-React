import { subDays, subHours } from 'date-fns';

const now = new Date();

class ProductsApi {
  getProducts() {
    const products = [
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 1).getTime(),
        image: '/static/mock-images/products/product_1.jpeg',
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Charlie Tulip Dress',
        price: 23.99,
        quantity: 85,
        updatedAt: subHours(now, 6).getTime(),
        variants: 2
      },
      {
        id: '5ece2c0d16f70bff2cf86cd8',
        attributes: ['Cotton'],
        category: 'dress',
        currency: '$',
        createdAt: subDays(now, 3).getTime(),
        image: '/static/mock-images/products/product_2.jpeg',
        inventoryType: 'out_of_stock',
        isAvailable: false,
        isShippable: true,
        name: 'Kate Leopard Dress',
        price: 95.00,
        quantity: 0,
        updatedAt: subDays(subHours(now, 8), 2).getTime(),
        variants: 1
      },
      {
        id: '5ece2c123fad30cbbff8d060',
        attributes: ['Variety of styles'],
        category: 'jewelry',
        currency: '$',
        createdAt: subDays(now, 6).getTime(),
        image: null,
        inventoryType: 'in_stock',
        isAvailable: true,
        isShippable: false,
        name: 'Layering Bracelets Collection',
        price: 155.00,
        quantity: 48,
        updatedAt: subDays(subHours(now, 2), 1).getTime(),
        variants: 5
      },
      {
        id: '5ece2c1be7996d1549d94e34',
        attributes: ['Polyester and Spandex'],
        category: 'blouse',
        currency: '$',
        createdAt: subDays(now, 12).getTime(),
        image: '/static/mock-images/products/product_4.jpeg',
        inventoryType: 'limited',
        isAvailable: false,
        isShippable: true,
        name: 'Flared Sleeve Floral Blouse',
        price: 17.99,
        quantity: 5,
        updatedAt: subDays(subHours(now, 7), 1).getTime(),
        variants: 1
      }
    ];

    return Promise.resolve(products);
  }
}

export const productApi = new ProductsApi();
