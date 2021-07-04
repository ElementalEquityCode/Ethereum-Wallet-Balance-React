import { Box, Button, Grid, Switch, TextField, Typography } from '@material-ui/core';

const Form1 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
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
            fullWidth
            label="Full name"
            name="name"
            required
            value="Miron Vitold"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Email address"
            name="email"
            required
            value="miron.vitold@devias.io"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Country"
            name="country"
            value="USA"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="State/Region"
            name="state"
            value="New York"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Address 1"
            name="address1"
            value="Street John Wick, no. 7"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Address 2"
            name="address2"
            value="House #25"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            value="+55 748 327 439"
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
            Disabling this will automatically send the user a verification
            email
          </Typography>
          <Switch
            color="primary"
            defaultChecked
            edge="start"
            name="isVerified"
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
            This will give the user discounted prices for all products
          </Typography>
          <Switch
            color="primary"
            defaultChecked={false}
            edge="start"
            name="hasDiscountedPrices"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button
          color="primary"
          type="submit"
          variant="contained"
        >
          Update Customer
        </Button>
      </Box>
    </form>
  </Box>
);

export default Form1;
