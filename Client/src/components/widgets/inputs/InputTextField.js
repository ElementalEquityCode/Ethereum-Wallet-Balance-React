import { Box, Grid, TextField } from '@material-ui/core';

const InputTextField = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 2
    }}
  >
    <Grid container>
      <Grid
        item
        md={6}
        xs={12}
      >
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Email Address"
              required
              type="email"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              fullWidth
              label="Phone number"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="State/Region"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="City"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default InputTextField;
