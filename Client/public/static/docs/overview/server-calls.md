---
title: Server Calls
---

# Server Calls

You can use any library you like. The app uses [Axios](https://github.com/axios/axios) since it
allows you to create instances. Another good alternative could
be [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Important

If you use `axios` from `src/lib/axios.js`, this instance is being intercepted by the `MockAdapter`.
This means that all your requests made using it will be blocked the by the adapter. In this
situation, for server API requests, and you might get a `404 status code` (or other error codes) in
your console, because the adapter is not able to find the specified URL.

> To be able to use your own server (or any other server for that matter), **please use a new Axios instance**.

## Example

```jsx
const Customers = () => {
  const [customers, setCustomers] = useState(null);

  useEffect(async () => {
    const response = await axios.get('/api/customers');
    setCustomers(response.data.customers);
  }, []);

  return (
    <div>
      {/* render content */}
    </div>
  );
};
```

## Request interceptors

By using Axios you are able to
integrate [Axios Mock Adapter](https://github.com/ctimmerm/axios-mock-adapter) to simulate real
server calls. To archive that, you have to create an Axios instance and use it whenever you make a
request call. Now you can extend your instance and add Axios Mock Adapter to listen for requests and
return custom data.

## Adding request interceptors

It takes ony a few seconds to add a new http request listener. The interceptor has a similar format
to Express JS, for example:

```js
import { mock } from '../lib/axios';

mock.onGet('/__fakeApi__/invoices').reply(200, {
  invoices: [
    { id: 1, total: 32.43 },
    { id: 2, total: 67.00 }
  ]
});
```

## Removing existing request interceptors

There are two ways:

1. Simply use a new axios instance.
2. Remove the `src/__mocks__` folder, remove `mock` export from `src/lib/axios.js` and
   uninstall `axios-mock-adapter`
   dependency.
