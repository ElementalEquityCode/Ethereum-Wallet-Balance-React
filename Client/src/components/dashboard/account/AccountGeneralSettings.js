import { Link as RouterLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  Link,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import wait from '../../../utils/wait';
import countries from './countries';

const AccountGeneralSettings = (props) => {
  const { user } = useAuth();

  return (
    <Grid
      container
      spacing={3}
      {...props}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Card>
          <CardContent>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
              <Box
                sx={{
                  p: 1,
                  border: (theme) => `1px dashed ${theme.palette.divider}`,
                  borderRadius: '50%'
                }}
              >
                <Avatar
                  src={user.avatar}
                  sx={{
                    height: 100,
                    width: 100
                  }}
                />
              </Box>
              <Typography
                color="textPrimary"
                sx={{ mt: 1 }}
                variant="subtitle2"
              >
                {user.name}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Your plan:
                {' '}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/dashboard/account"
                >
                  {user.plan}
                </Link>
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              fullWidth
              variant="text"
            >
              Remove Picture
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        xl={9}
        xs={12}
      >
        <Formik
          enableReinitialize
          initialValues={{
            canHire: user.canHire || false,
            city: user.city || '',
            country: user.country || '',
            email: user.email || '',
            isPublic: user.isPublic || false,
            name: user.name || '',
            phone: user.phone || '',
            state: user.state || '',
            submit: null
          }}
          validationSchema={Yup
            .object()
            .shape({
              canHire: Yup.bool(),
              city: Yup.string().max(255),
              country: Yup.string().max(255),
              email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              isPublic: Yup.bool(),
              name: Yup
                .string()
                .max(255)
                .required('Name is required'),
              phone: Yup.string(),
              state: Yup.string()
            })}
          onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
            try {
              // NOTE: Make API request
              await wait(200);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              toast.success('Profile updated!');
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
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader title="Profile" />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    spacing={4}
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
                        label="Name"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        helperText={touched.email && errors.email
                          ? errors.email
                          : 'We will use this email to contact you'}
                        label="Email Address"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                        type="email"
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
                        error={Boolean(touched.phone && errors.phone)}
                        fullWidth
                        helperText={touched.phone && errors.phone}
                        label="Phone Number"
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <Autocomplete
                        getOptionLabel={(option) => option.text}
                        options={countries}
                        renderInput={(params) => (
                          <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            onChange={handleChange}
                            variant="outlined"
                            {...params}
                          />
                        )}
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
                        error={Boolean(touched.city && errors.city)}
                        fullWidth
                        helperText={touched.city && errors.city}
                        label="City"
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.city}
                        variant="outlined"
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
                        Public Profile
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        Means that anyone viewing your profile will
                        be able to see your contacts details
                      </Typography>
                      <Switch
                        checked={values.isPublic}
                        color="primary"
                        edge="start"
                        name="isPublic"
                        onChange={handleChange}
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
                        Available to hire
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        Toggling this will let your teammates know
                        that you are available for acquiring new
                        projects
                      </Typography>
                      <Switch
                        checked={values.canHire}
                        color="primary"
                        edge="start"
                        name="canHire"
                        onChange={handleChange}
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
                    Save Changes
                  </Button>
                </Box>
              </Card>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default AccountGeneralSettings;
