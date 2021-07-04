import { Avatar, Box, Button, Grid, IconButton, Link, Paper, Typography } from '@material-ui/core';
import DotsHorizontalIcon from '../../../icons/DotsHorizontal';

const connections = [
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
    commonConnections: 10,
    name: 'Carson Darrin',
    status: 'Rejected'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    commonConnections: 8,
    name: 'Fran Perez',
    status: 'pending'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
    commonConnections: 5,
    name: 'Miron Vitold',
    status: 'Not connected'
  }
];

const GridList6 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Grid
      container
      spacing={3}
    >
      {connections.map((connection) => (
        <Grid
          item
          key={connection.id}
          xs={12}
        >
          <Paper variant="outlined">
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                p: 2
              }}
            >
              <Avatar
                src={connection.avatar}
                sx={{
                  height: 60,
                  width: 60
                }}
              />
              <Box
                sx={{
                  flexGrow: 1,
                  mx: 2
                }}
              >
                <Link
                  color="textPrimary"
                  variant="h5"
                >
                  {connection.name}
                </Link>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                  {connection.commonConnections}
                  {' '}
                  connections in common
                </Typography>
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                >
                  {connection.status}
                </Button>
              </Box>
              <IconButton>
                <DotsHorizontalIcon fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default GridList6;
