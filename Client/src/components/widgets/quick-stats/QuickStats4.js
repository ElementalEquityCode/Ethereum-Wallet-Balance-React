import { Box, Card, Grid, Typography } from '@material-ui/core';
import Label from '../../Label';

const QuickStats4 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Card>
      <Grid
        alignItems="center"
        container
        justifyContent="space-between"
      >
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              md: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }),
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            color="textSecondary"
            component="h2"
            gutterBottom
            variant="overline"
          >
            Total Income
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography
              color="textPrimary"
              sx={{ mr: 1 }}
              variant="h5"
            >
              $854,355.00
            </Typography>
            <Label color="success">
              +25%
            </Label>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              md: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }),
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            color="textSecondary"
            component="h5"
            gutterBottom
            variant="overline"
          >
            Total Expanses
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography
              color="textPrimary"
              sx={{ mr: 1 }}
              variant="h5"
            >
              $373,250.50
            </Typography>
            <Label color="success">
              +12%
            </Label>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              sm: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }),
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            color="textSecondary"
            component="h2"
            gutterBottom
            variant="overline"
          >
            Net Profit
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography
              color="textPrimary"
              sx={{ mr: 1 }}
              variant="h5"
            >
              $123,532.00
            </Typography>
            <Label color="error">
              -20%
            </Label>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            color="textSecondary"
            component="h2"
            gutterBottom
            variant="overline"
          >
            Active Subscriptions
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            26,000
          </Typography>
        </Grid>
      </Grid>
    </Card>
  </Box>
);

export default QuickStats4;
