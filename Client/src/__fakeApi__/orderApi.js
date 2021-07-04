import { subHours, subMinutes, subSeconds } from 'date-fns';

const now = new Date();

class OrderApi {
  getOrders() {
    const orders = [
      {
        id: '5ecb8a6d9f53bfae09e16115',
        createdAt: subMinutes(subSeconds(now, 23), 32).getTime(),
        currency: '$',
        customer: {
          email: 'carson.darrin@devias.io',
          name: 'Carson Darrin'
        },
        number: 'DEV-102',
        paymentMethod: 'CreditCard',
        status: 'pending',
        totalAmount: 500.00
      },
      {
        id: '5ecb8a738aa6f3e577c2b3ec',
        createdAt: subMinutes(subSeconds(now, 51), 36).getTime(),
        currency: '$',
        customer: {
          email: 'fran.perez@devias.io',
          name: 'Fran Perez'
        },
        number: 'DEV-101',
        paymentMethod: 'PayPal',
        status: 'completed',
        totalAmount: 500.00
      },
      {
        id: '5ecb8a795e53f134013eba3b',
        createdAt: subMinutes(subSeconds(now, 55), 38).getTime(),
        currency: '$',
        customer: {
          email: 'jie.yan.song@devias.io',
          name: 'Jie Yan Song'
        },
        number: 'DEV-100',
        paymentMethod: 'CreditCard',
        status: 'pending',
        totalAmount: 500.00
      },
      {
        id: '5ecb8a7f738cc572a9ce0277',
        createdAt: subMinutes(subSeconds(now, 3), 40).getTime(),
        currency: '$',
        customer: {
          email: 'clarke.gillebert@devias.io',
          name: 'Clarke Gillebert'
        },
        number: 'DEV-99',
        paymentMethod: 'PayPal',
        status: 'completed',
        totalAmount: 500.00
      },
      {
        id: '5e86805e2bafd54f66cc95c3',
        createdAt: subMinutes(subSeconds(now, 32), 45).getTime(),
        currency: '$',
        customer: {
          email: 'miron.vitold@devias.io',
          name: 'Miron Vitold'
        },
        number: 'DEV-98',
        paymentMethod: 'PayPal',
        status: 'completed',
        totalAmount: 500.00
      },
      {
        id: '5ecb8a85a850c16fa413849c',
        createdAt: subMinutes(subSeconds(now, 57), 48).getTime(),
        currency: '$',
        customer: {
          name: 'Penjani Inyene',
          email: 'penjani.inyene@devias.io'
        },
        status: 'pending',
        number: 'DEV-97',
        paymentMethod: 'CreditCard',
        totalAmount: 500.00
      },
      {
        id: '5ecb8a8e69ba2e409ea0168f',
        createdAt: subMinutes(subSeconds(now, 4), 49).getTime(),
        currency: '$',
        customer: {
          email: 'omar.darobe@devias.io',
          name: 'Omar Darobe'
        },
        number: 'DEV-96',
        paymentMethod: 'CreditCard',
        status: 'completed',
        totalAmount: 500.00
      },
      {
        id: '5ecb8a9341c68839d387e1c4',
        createdAt: subMinutes(subSeconds(now, 43), 57).getTime(),
        currency: '$',
        customer: {
          email: 'siegbert.gottfried@devias.io',
          name: 'Siegbert Gottfried'
        },
        number: 'DEV-95',
        paymentMethod: 'PayPal',
        status: 'rejected',
        totalAmount: 500.00
      },
      {
        id: '5ecb8a984bfbb97c9ae458e8',
        createdAt: subMinutes(subSeconds(now, 6), 59).getTime(),
        currency: '$',
        customer: {
          email: 'iulia.albu@devias.io',
          name: 'Iulia Albu'
        },
        number: 'DEV-94',
        paymentMethod: 'CreditCard',
        status: 'canceled',
        totalAmount: 500.00
      },
      {
        id: '5ecb8aa08d9127dba654ce7a',
        createdAt: subHours(subMinutes(subSeconds(now, 43), 15), 1).getTime(),
        currency: '$',
        customer: {
          email: 'nasimiyu.danai@devias.io',
          name: 'Nasimiyu Danai'
        },
        number: 'DEV-93',
        paymentMethod: 'PayPal',
        status: 'canceled',
        totalAmount: 500.00
      }
    ];

    return Promise.resolve(orders);
  }

  getOrder() {
    const order = {
      id: '5ecb8a6879877087d4aa2690',
      coupon: null,
      createdAt: now.getTime(),
      currency: '$',
      customer: {
        address1: 'Street John Wick, no. 7',
        address2: 'House #25',
        city: 'San Diego',
        country: 'USA',
        email: 'miron.vitold@devias.io',
        name: 'Miron Vitold'
      },
      items: [
        {
          id: '5ecb8abbdd6dfb1f9d6bf98b',
          billingCycle: 'monthly',
          currency: '$',
          name: 'Project Points',
          quantity: 25,
          unitAmount: 50.25
        },
        {
          id: '5ecb8ac10f116d04bed990eb',
          billingCycle: 'monthly',
          currency: '$',
          name: 'Freelancer Subscription',
          quantity: 1,
          unitAmount: 5.00
        }
      ],
      number: 'DEV-103',
      paymentMethod: 'CreditCard',
      status: 'pending',
      totalAmount: 500.00
    };

    return Promise.resolve(order);
  }
}

export const orderApi = new OrderApi();
