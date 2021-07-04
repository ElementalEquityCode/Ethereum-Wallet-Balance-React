import { subHours, subDays } from 'date-fns';

const now = new Date();

class InvoiceApi {
  getInvoices() {
    const invoices = [
      {
        id: '5ecb868d0f437390ef3ac62c',
        currency: '$',
        customer: {
          email: 'contact@anahenisky.io',
          name: 'Ana Henisky'
        },
        issueDate: subHours(now, 1).getTime(),
        status: 'paid',
        totalAmount: 55.50
      },
      {
        id: '5ecb868ada8deedee0638502',
        currency: '$',
        customer: {
          email: 'sales@matt-jason.com',
          name: 'Matt Jason'
        },
        issueDate: subDays(subHours(now, 5), 2).getTime(),
        status: 'pending',
        totalAmount: 253.76
      },
      {
        id: '5ecb868700aba84d0f1c0e48',
        currency: '$',
        customer: {
          email: 'support@terrythomas.io',
          name: 'Terry Thomas'
        },
        issueDate: subDays(subHours(now, 4), 6).getTime(),
        status: 'canceled',
        totalAmount: 781.50
      },
      {
        id: '5ecb8682038e1ddf4e868764',
        currency: '$',
        customer: {
          email: 'contact@triv-shopper.co.uk',
          name: 'Triv Shopper'
        },
        issueDate: subDays(subHours(now, 2), 15).getTime(),
        status: 'paid',
        totalAmount: 96.64
      }
    ];

    return Promise.resolve(invoices);
  }

  getInvoice() {
    const invoice = {
      id: '5ecb86785312dcc69b5799ad',
      currency: '$',
      customer: {
        address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand',
        company: 'Countdown Grey Lynn',
        email: 'contact@anahenisky.io',
        name: 'Ana Henisky',
        taxId: '6934656584231'
      },
      dueDate: now.getTime(),
      issueDate: subHours(now, 1).getTime(),
      items: [
        {
          id: '5ecb8694db1760a701dfbf74',
          currency: '$',
          description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
          unitAmount: 55.50
        }
      ],
      number: 'DEV-9483',
      status: 'paid',
      subtotalAmount: 50.00,
      taxAmount: 5.50,
      totalAmount: 55.50
    };

    return Promise.resolve(invoice);
  }
}

export const invoiceApi = new InvoiceApi();
