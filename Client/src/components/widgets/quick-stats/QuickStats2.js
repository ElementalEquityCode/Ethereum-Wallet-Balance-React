import { Avatar, Box, Card, Grid, LinearProgress, Typography } from '@material-ui/core';
import Label from '../../Label';
import CurrencyDollarIcon from '../../../icons/CurrencyDollar';
import FolderOpenIcon from '../../../icons/FolderOpen';

const QuickStats2 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              Today&apos;s money
            </Typography>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              <Typography
                color="textPrimary"
                sx={{ mr: 1 }}
                variant="h5"
              >
                $24,000
              </Typography>
              <Label color="success">
                4%
              </Label>
            </Box>
          </Box>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              height: 48,
              width: 48
            }}
          >
            <CurrencyDollarIcon fontSize="small" />
          </Avatar>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              New projects
            </Typography>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              <Typography
                color="textPrimary"
                sx={{ mr: 1 }}
                variant="h5"
              >
                12
              </Typography>
              <Label color="error">
                -10%
              </Label>
            </Box>
          </Box>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              height: 48,
              width: 48
            }}
          >
            <FolderOpenIcon fontSize="small" />
          </Avatar>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
      >
        <Card sx={{ p: 3 }}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            System Health
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <Typography
              color="textPrimary"
              sx={{ mr: 1 }}
              variant="h5"
            >
              74%
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <LinearProgress
                color="primary"
                value={74}
                variant="determinate"
              />
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            alignItems: 'center',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              color="inherit"
              gutterBottom
              variant="overline"
            >
              Roi per customer
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <Typography
                color="inherit"
                variant="h5"
              >
                $25.50
              </Typography>
            </Box>
          </Box>
          <Avatar
            sx={{
              backgroundColor: 'primary.contrastText',
              color: 'primary.main',
              height: 48,
              width: 48
            }}
          >
            <CurrencyDollarIcon fontSize="small" />
          </Avatar>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default QuickStats2;
