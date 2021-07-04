import { Box, Button, Grid, Link, TextField, Typography } from '@material-ui/core';

const Form7 = () => (
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
          xs={12}
          lg={6}
        >
          <Typography
            color="textPrimary"
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Name
          </Typography>
          <TextField
            fullWidth
            name="name"
            required
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
        >
          <Typography
            color="textPrimary"
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Company
          </Typography>
          <TextField
            fullWidth
            name="company"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
        >
          <Typography
            color="textPrimary"
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Email
          </Typography>
          <TextField
            fullWidth
            name="email"
            type="email"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
        >
          <Typography
            color="textPrimary"
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Phone
          </Typography>
          <TextField
            fullWidth
            name="phone"
            required
            type="tel"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            color="textPrimary"
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Message
          </Typography>
          <TextField
            fullWidth
            name="message"
            required
            multiline
            rows={6}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3
        }}
      >
        <Button
          color="primary"
          fullWidth
          size="large"
          variant="contained"
        >
          Let&apos;s Talk
        </Button>
      </Box>
      <Typography
        align="center"
        color="textSecondary"
        sx={{ mt: 2 }}
        variant="body2"
      >
        By submitting this, you agree to the
        {' '}
        <Link
          color="textPrimary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Privacy Policy
        </Link>
        {' '}
        and
        {' '}
        <Link
          color="textPrimary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Cookie Policy
        </Link>
        .
      </Typography>
    </form>
  </Box>
);

export default Form7;
