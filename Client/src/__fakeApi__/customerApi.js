import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';

const now = new Date();

class CustomerApi {
  getCustomers() {
    const customers = [
      {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
        city: 'Cleveland',
        country: 'USA',
        currency: '$',
        email: 'carson.darrin@devias.io',
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: 'Carson Darrin',
        state: 'Ohio',
        totalAmountSpent: 300.00,
        totalOrders: 3,
        updatedAt: subDays(subHours(now, 7), 1).getTime()
      },
      {
        id: '5e887b209c28ac3dd97f6db5',
        avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
        city: 'Atlanta',
        country: 'USA',
        currency: '$',
        email: 'fran.perez@devias.io',
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: 'Fran Perez',
        state: 'Georgia',
        totalAmountSpent: 0.00,
        totalOrders: 0,
        updatedAt: subDays(subHours(now, 1), 2).getTime()
      },
      {
        id: '5e887b7602bdbc4dbb234b27',
        avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
        city: 'North Canton',
        country: 'USA',
        currency: '$',
        email: 'jie.yan.song@devias.io',
        hasAcceptedMarketing: false,
        isProspect: false,
        isReturning: false,
        name: 'Jie Yan Song',
        state: 'Ohio',
        totalAmountSpent: 5600.00,
        totalOrders: 6,
        updatedAt: subDays(subHours(now, 4), 2).getTime()
      },
      {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
        city: 'Madrid',
        country: 'Spain',
        currency: '$',
        email: 'jane.rotanson@devias.io',
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: 'Jane Rotanson',
        state: 'Madrid',
        totalAmountSpent: 500.00,
        totalOrders: 1,
        updatedAt: subDays(subHours(now, 11), 2).getTime()
      },
      {
        id: '5e86805e2bafd54f66cc95c3',
        avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
        city: 'San Diego',
        country: 'USA',
        currency: '$',
        email: 'miron.vitold@devias.io',
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: 'Miron Vitold',
        totalAmountSpent: 0.00,
        totalOrders: 0,
        state: 'California',
        updatedAt: subDays(subHours(now, 7), 3).getTime()
      },
      {
        id: '5e887a1fbefd7938eea9c981',
        avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
        city: 'Berkeley',
        country: 'USA',
        currency: '$',
        email: 'penjani.inyene@devias.io',
        hasAcceptedMarketing: false,
        isProspect: true,
        isReturning: false,
        name: 'Penjani Inyene',
        state: 'California',
        totalAmountSpent: 0.00,
        totalOrders: 0,
        updatedAt: subDays(subHours(now, 5), 4).getTime()
      },
      {
        id: '5e887d0b3d090c1b8f162003',
        avatar: '/static/mock-images/avatars/avatar-omar_darobe.png',
        currency: '$',
        email: 'omar.darobe@devias.io',
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: false,
        city: 'Carson City',
        country: 'USA',
        name: 'Omar Darobe',
        state: 'Nevada',
        totalAmountSpent: 100.00,
        totalOrders: 4,
        updatedAt: subDays(subHours(now, 15), 4).getTime()
      },
      {
        id: '5e88792be2d4cfb4bf0971d9',
        avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
        city: 'Los Angeles',
        country: 'USA',
        currency: '$',
        email: 'siegbert.gottfried@devias.io',
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: 'Siegbert Gottfried',
        state: 'California',
        totalAmountSpent: 1000.00,
        totalOrders: 2,
        updatedAt: subDays(subHours(now, 2), 5).getTime()
      },
      {
        id: '5e8877da9a65442b11551975',
        avatar: '/static/mock-images/avatars/avatar-iulia_albu.png',
        city: 'Murray',
        country: 'USA',
        email: 'iulia.albu@devias.io',
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: 'Iulia Albu',
        state: 'Utah',
        totalAmountSpent: 0.00,
        totalOrders: 0,
        updatedAt: subDays(subHours(now, 8), 6).getTime()
      },
      {
        id: '5e8680e60cba5019c5ca6fda',
        avatar: '/static/mock-images/avatars/avatar-nasimiyu_danai.png',
        city: 'Salt Lake City',
        country: 'USA',
        currency: '$',
        email: 'nasimiyu.danai@devias.io',
        hasAcceptedMarketing: false,
        isProspect: false,
        isReturning: true,
        name: 'Nasimiyu Danai',
        state: 'Utah',
        totalAmountSpent: 200.00,
        totalOrders: 7,
        updatedAt: subDays(subHours(now, 1), 9).getTime()
      }
    ];

    return Promise.resolve(customers);
  }

  getCustomer() {
    const customer = {
      id: '5e86805e2bafd54f66cc95c3',
      address1: 'Street John Wick, no. 7',
      address2: 'House #25',
      balance: 0,
      city: 'San Diego',
      country: 'USA',
      currency: '$',
      email: 'miron.vitold@devias.io',
      hasDiscountedPrices: false,
      isVerified: true,
      name: 'Miron Vitold',
      phone: '+55 748 327 439',
      state: 'New York',
      vatRate: 19,
      zipCode: '240355'
    };

    return Promise.resolve(customer);
  }

  getCustomerEmails() {
    const emails = [
      {
        id: '5ece2ce3613486d95ffaea58',
        createdAt: subDays(subHours(subMinutes(now, 34), 5), 3).getTime(),
        description: 'Order confirmation'
      },
      {
        id: '5ece2ce8cebf7ad1d100c0cd',
        createdAt: subDays(subHours(subMinutes(now, 49), 11), 4).getTime(),
        description: 'Order confirmation'
      }
    ];

    return Promise.resolve(emails);
  }

  getCustomerInvoices() {
    const invoices = [
      {
        id: '5ece2cef3e562cbd61996259',
        currency: '$',
        description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
        issueDate: now.getTime(),
        paymentMethod: 'Credit Card',
        status: 'paid',
        value: 5.25
      },
      {
        id: '5ece2cf461b9484866f2968c',
        currency: '$',
        description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
        issueDate: now.getTime(),
        paymentMethod: 'Credit Card',
        status: 'paid',
        value: 5.25
      }
    ];

    return Promise.resolve(invoices);
  }

  getCustomerLogs() {
    const logs = [
      {
        id: '5ece2cfeb6e2ac847bba11ce',
        createdAt: subDays(subMinutes(subSeconds(now, 56), 2), 2).getTime(),
        description: 'Purchase',
        ip: '84.234.243.42',
        method: 'POST',
        route: '/__fakeApi__/purchase',
        status: 200
      },
      {
        id: '5ece2d02510484b2952e1e05',
        createdAt: subDays(subMinutes(subSeconds(now, 56), 2), 2).getTime(),
        description: 'Purchase',
        ip: '84.234.243.42',
        method: 'POST',
        route: '/__fakeApi__/purchase',
        status: 522
      },
      {
        id: '5ece2d08e2748e4e9788901a',
        createdAt: subDays(subMinutes(subSeconds(now, 23), 8), 2).getTime(),
        description: 'Cart remove',
        ip: '84.234.243.42',
        method: 'DELETE',
        route: '/__fakeApi__/products/d65654e/remove',
        status: 200
      },
      {
        id: '5ece2d0c47214e342c2d7f28',
        createdAt: subDays(subMinutes(subSeconds(now, 54), 20), 2).getTime(),
        description: 'Cart add',
        ip: '84.234.243.42',
        method: 'GET',
        route: '/__fakeApi__/products/d65654e/add',
        status: 200
      },
      {
        id: '5ece2d11e4060a97b2b57623',
        createdAt: subDays(subMinutes(subSeconds(now, 16), 34), 2).getTime(),
        description: 'Cart add',
        ip: '84.234.243.42',
        method: 'GET',
        route: '/__fakeApi__/products/c85727f/add',
        status: 200
      },
      {
        id: '5ece2d16cf6d53d8e33656af',
        createdAt: subDays(subMinutes(subSeconds(now, 30), 54), 2).getTime(),
        description: 'View product',
        ip: '84.234.243.42',
        method: 'GET',
        route: '/__fakeApi__/products/c85727f',
        status: 200
      },
      {
        id: '5ece2d1b2ec5071be9286a96',
        createdAt: subDays(subMinutes(subSeconds(now, 40), 56), 2).getTime(),
        description: 'Get products',
        ip: '84.234.243.42',
        method: 'GET',
        route: '/__fakeApi__/products',
        status: 200
      },
      {
        id: '5ece2d22e68d5498917e47bc',
        createdAt: subDays(subMinutes(subSeconds(now, 5), 57), 2).getTime(),
        description: 'Login',
        ip: '84.234.243.42',
        method: 'POST',
        route: '/__fakeApi__/authentication/login',
        status: 200
      }
    ];

    return Promise.resolve(logs);
  }
}

export const customerApi = new CustomerApi();
