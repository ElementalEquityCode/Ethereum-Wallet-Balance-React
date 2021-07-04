import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Card, Grid, Switch, TextField, Typography } from '@material-ui/core';
import wait from '../../../utils/wait';

const CustomerEditForm = (props) => {
  const { customer, ...other } = props;

  return (
    <Formik
      initialValues={{
        address1: customer.address1 || '',
        address2: customer.address2 || '',
        country: customer.country || '',
        email: customer.email || '',
        hasDiscountedPrices: customer.hasDiscountedPrices || false,
        isVerified: customer.isVerified || false,
        name: customer.name || '',
        phone: customer.phone || '',
        state: customer.state || '',
        submit: null
      }}
      validationSchema={Yup
        .object()
        .shape({
          address1: Yup.string().max(255),
          address2: Yup.string().max(255),
          country: Yup.string().max(255),
          email: Yup
            .string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          hasDiscountedPrices: Yup.bool(),
          isVerified: Yup.bool(),
          name: Yup
            .string()
            .max(255)
            .required('Name is required'),
          phone: Yup.string().max(15),
          state: Yup.string().max(255)
        })}
      onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
        try {
          // NOTE: Make API request
          await wait(500);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          toast.success('Customer updated!');
        } catch (err) {
          console.error(err);
          toast.error('Something went wrong!');
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form
          onSubmit={handleSubmit}
          {...other}
        >
          <Card>
            <Box sx={{ p: 3 }}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Full name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.country && errors.country)}
                    fullWidth
                    helperText={touched.country && errors.country}
                    label="Country"
                    name="country"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.country}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.state && errors.state)}
                    fullWidth
                    helperText={touched.state && errors.state}
                    label="State/Region"
                    name="state"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.state}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.address1 && errors.address1)}
                    fullWidth
                    helperText={touched.address1 && errors.address1}
                    label="Address 1"
                    name="address1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.address2 && errors.address2)}
                    fullWidth
                    helperText={touched.address2 && errors.address2}
                    label="Address 2"
                    name="address2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.phone && errors.phone)}
                    fullWidth
                    helperText={touched.phone && errors.phone}
                    label="Phone number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid item />
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Email Verified
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Disabling this will automatically send the user
                    a verification email
                  </Typography>
                  <Switch
                    checked={values.isVerified}
                    color="primary"
                    edge="start"
                    name="isVerified"
                    onChange={handleChange}
                    value={values.isVerified}
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Discounted Prices
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    This will give the user discounted prices for
                    all products
                  </Typography>
                  <Switch
                    checked={values.hasDiscountedPrices}
                    color="primary"
                    edge="start"
                    name="hasDiscountedPrices"
                    onChange={handleChange}
                    value={values.hasDiscountedPrices}
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Update Customer
                </Button>
              </Box>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

CustomerEditForm.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerEditForm;
