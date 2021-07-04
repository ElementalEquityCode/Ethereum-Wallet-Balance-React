import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { CheckoutBilling, CheckoutOrderSummary } from '../components/checkout';
import ArrowLeftIcon from '../icons/ArrowLeft';
import ArrowRightIcon from '../icons/ArrowRight';
import LockIcon from '../icons/Lock';
import gtm from '../lib/gtm';

const productsData = [
  {
    id: '97375399bf10f57d0f0f7fd9',
    image: '/static/mock-images/products/product_1.jpeg',
    name: 'Charlie Tulip Dress',
    price: 23.99,
    quantity: 1
  },
  {
    id: 'ece4069546ff025047b97735',
    image: '/static/mock-images/products/product_2.jpeg',
    name: 'Kate Leopard Dress',
    price: 95.00,
    quantity: 1
  }
];

const Checkout = () => {
  const [billing, setBilling] = useState({
    address: '',
    cardExpirationDate: '',
    cardNumber: '',
    cardOwner: '',
    cardSecurityCode: '',
    firstName: '',
    lastName: '',
    optionalAddress: '',
    paymentMethod: 'visa',
    state: '',
    zip: ''
  });
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const handleBillingChange = (event) => {
    setBilling((prevBilling) => ({
      ...prevBilling,
      [event.target.name]: event.target.value
    }));
  };

  const handleProductQuantityChange = (event, productId) => {
    setProducts((prevProducts) => prevProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: event.target.value
        };
      }

      return product;
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const subtotal = products
    .reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
  const shippingTax = 12;
  const total = subtotal + shippingTax;

  return (
    <>
      <Helmet>
        <title>Checkout | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <form onSubmit={handleSubmit}>
            <Button
              color="primary"
              component={RouterLink}
              startIcon={<ArrowLeftIcon fontSize="small" />}
              to="/cart"
              variant="text"
            >
              Back to cart
            </Button>
            <Typography
              color="textPrimary"
              variant="h3"
              sx={{
                fontWeight: 'fontWeightBold',
                mt: 3
              }}
            >
              Payment Information
            </Typography>
            <Box mt={6}>
              <Grid
                container
                spacing={6}
              >
                <Grid
                  item
                  lg={8}
                  md={7}
                  xs={12}
                >
                  <CheckoutBilling
                    billing={billing}
                    onChange={handleBillingChange}
                  />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={5}
                  xs={12}
                >
                  <CheckoutOrderSummary
                    onQuantityChange={handleProductQuantityChange}
                    products={products}
                    shippingTax={shippingTax}
                    subtotal={subtotal}
                    total={total}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 6 }}>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <LockIcon
                  fontWeight="small"
                  sx={{ color: 'text.secondary' }}
                />
                <Typography
                  color="textPrimary"
                  sx={{ ml: 2 }}
                  variant="subtitle2"
                >
                  Secure Checkout
                </Typography>
              </Box>
              <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                Your purchases are secured by an industry best encryption
                service – Braintree
              </Typography>
              <Button
                color="primary"
                endIcon={<ArrowRightIcon fontSize="small" />}
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Complete order
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Checkout;
