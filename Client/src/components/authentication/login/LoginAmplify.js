import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Alert, Box, Button, FormHelperText, TextField } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import useMounted from '../../../hooks/useMounted';

const LoginAmplify = (props) => {
  const mounted = useMounted();
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <Formik
      initialValues={{
        email: 'demo@devias.io',
        password: 'Password123!',
        submit: null
      }}
      validationSchema={Yup
        .object()
        .shape({
          email: Yup
            .string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required')
        })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await login(values.email, values.password);

          if (mounted.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);

          if (err.code === 'UserNotConfirmedException') {
            navigate('/authentication/verify-code', {
              state: {
                username: values.email
              }
            });
            return;
          }

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
            autoFocus
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
              Log In
            </Button>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Alert severity="info">
              <div>
                You can use
                {' '}
                <b>demo@devias.io</b>
                {' '}
                and password
                {' '}
                <b>Password123!</b>
              </div>
            </Alert>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default LoginAmplify;
