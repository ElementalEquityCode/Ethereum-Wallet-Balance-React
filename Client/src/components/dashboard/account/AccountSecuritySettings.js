import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField
} from '@material-ui/core';
import wait from '../../../utils/wait';

const AccountSecuritySettings = (props) => (
  <Formik
    initialValues={{
      password: '',
      passwordConfirm: '',
      submit: null
    }}
    validationSchema={Yup
      .object()
      .shape({
        password: Yup
          .string()
          .min(7, 'Must be at least 7 characters')
          .max(255)
          .required('Required'),
        passwordConfirm: Yup
          .string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required')
      })}
    onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
      try {
        // NOTE: Make API request
        await wait(500);
        resetForm();
        setStatus({ success: true });
        setSubmitting(false);
        toast.success('Password updated!');
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
        {...props}
      >
        <Card>
          <CardHeader title="Change Password" />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
              >
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
              >
                <TextField
                  error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
                  fullWidth
                  helperText={touched.passwordConfirm && errors.passwordConfirm}
                  label="Password Confirmation"
                  name="passwordConfirm"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.passwordConfirm}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button
              color="primary"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
            >
              Change Password
            </Button>
          </Box>
        </Card>
      </form>
    )}
  </Formik>
);

export default AccountSecuritySettings;
