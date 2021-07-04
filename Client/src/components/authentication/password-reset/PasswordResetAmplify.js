import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, FormHelperText, TextField, Typography } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import useMounted from '../../../hooks/useMounted';

const PasswordResetAmplify = () => {
  const mounted = useMounted();
  const { passwordReset } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, 6);
  }, []);

  return (
    <Formik
      initialValues={{
        code: ['', '', '', '', '', ''],
        email: location.state?.username || '',
        password: '',
        passwordConfirm: '',
        submit: null
      }}
      validationSchema={
        Yup
          .object()
          .shape({
            code: Yup
              .array()
              .of(Yup.string().required('Code is required')),
            email: Yup
              .string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required'),
            password: Yup
              .string()
              .min(7, 'Must be at least 7 characters')
              .max(255)
              .required('Required'),
            passwordConfirm: Yup
              .string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Required')
          })
      }
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await passwordReset(values.email, values.code.join(''), values.password);

          navigate('/authentication/login');
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
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values
      }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
        >
          {!location.state?.username
            ? (
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
            )
            : (
              <TextField
                disabled
                fullWidth
                margin="normal"
                value={location.state.username}
                variant="outlined"
              />
            )}
          <Typography
            color="textSecondary"
            sx={{
              mb: 2,
              mt: 3
            }}
            variant="subtitle2"
          >
            Verification code
          </Typography>
          <Box
            sx={{
              columnGap: '16px',
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              py: 1
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((ref, i) => (
              <TextField
                error={Boolean(Array.isArray(touched.code)
                  && touched.code.length === 6
                  && errors.code)}
                fullWidth
                inputRef={(el) => itemsRef.current[i] = el}
                // eslint-disable-next-line react/no-array-index-key
                key={`codeNumber-${i}`}
                name={`code[${i}]`}
                onBlur={handleBlur}
                onKeyDown={(event) => {
                  if (event.code === 'ENTER') {
                    if (values.code[i]) {
                      setFieldValue(`code[${i}]`, '');
                      return;
                    }

                    if (i > 0) {
                      setFieldValue(`code[${i}]`, '');
                      itemsRef.current[i - 1].focus();
                      return;
                    }
                  }

                  if (Number.isInteger(parseInt(event.key, 10))) {
                    setFieldValue(`code[${i}]`, event.key);

                    if (i < 5) {
                      itemsRef.current[i + 1].focus();
                    }
                  }
                }}
                onPaste={(event) => {
                  const paste = event.clipboardData.getData('text');
                  const pasteArray = paste.split('');

                  if (pasteArray.length !== 6) {
                    return;
                  }

                  let valid = true;

                  pasteArray.forEach((x) => {
                    if (!Number.isInteger(parseInt(x, 10))) {
                      valid = false;
                    }
                  });

                  if (valid) {
                    setFieldValue('code', pasteArray);
                    itemsRef.current[5].focus();
                  }
                }}
                value={values.code[i]}
                sx={{
                  display: 'inline-block',
                  textAlign: 'center',
                  '& .MuiInputBase-input': {
                    textAlign: 'center'
                  }
                }}
                variant="outlined"
              />
            ))}
          </Box>
          {Boolean(Array.isArray(touched.code) && touched.code.length === 6 && errors.code) && (
            <FormHelperText
              error
              sx={{ mx: '14px' }}
            >
              {Array.isArray(errors.code) && errors.code.find((x) => x !== undefined)}
            </FormHelperText>
          )}
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
          <TextField
            error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
            fullWidth
            helperText={touched.passwordConfirm && errors.passwordConfirm}
            label="Password Confirmation"
            margin="normal"
            name="passwordConfirm"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.passwordConfirm}
            variant="outlined"
          />
          {errors.submit && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>
                {errors.submit}
              </FormHelperText>
            </Box>
          )}
          <Box sx={{ mt: 3 }}>
            <Button
              color="primary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Reset Password
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default PasswordResetAmplify;
