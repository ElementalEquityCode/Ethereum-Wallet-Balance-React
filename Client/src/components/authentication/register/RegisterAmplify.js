import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import useMounted from '../../../hooks/useMounted';

const RegisterAmplify = (props) => {
  const mounted = useMounted();
  const navigate = useNavigate();
  const { register } = useAuth();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          policy: true,
          submit: null
        }}
        validationSchema={Yup
          .object()
          .shape({
            email: Yup
              .string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required'),
            password: Yup
              .string()
              .min(7)
              .max(255)
              .required('Password is required'),
            policy: Yup
              .boolean()
              .oneOf([true], 'This field must be checked')
          })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await register(values.email, values.password);

            navigate('/authentication/verify-code', {
              state: {
                username: values.email
              }
            });
          } catch (err) {
            console.error(err);
            if (mounted.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
            {...props}
          >
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1,
                mt: 2
              }}
            >
              <Checkbox
                checked={values.policy}
                color="primary"
                name="policy"
                onChange={handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <Link
                  color="primary"
                  component="a"
                  href="#"
                >
                  Terms and Conditions
                </Link>
              </Typography>
            </Box>
            {Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>
                {errors.policy}
              </FormHelperText>
            )}
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegisterAmplify;
