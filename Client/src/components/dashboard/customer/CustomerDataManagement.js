import { Box, Card, CardHeader, CardContent, Button, Divider, Typography } from '@material-ui/core';
import BanIcon from '../../../icons/Ban';
import DownloadIcon from '../../../icons/Download';
import TrashIcon from '../../../icons/Trash';

const CustomerDataManagement = (props) => (
  <Card {...props}>
    <CardHeader title="Data Management" />
    <Divider />
    <CardContent>
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Button
          color="inherit"
          startIcon={<BanIcon fontSize="small" />}
          variant="text"
        >
          Close Account
        </Button>
        <Button
          color="inherit"
          startIcon={<DownloadIcon fontSize="small" />}
          sx={{ mt: 1 }}
          variant="text"
        >
          Export Data
        </Button>
      </Box>
      <Box
        sx={{
          mb: 2,
          mt: 1
        }}
      >
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Remove this customer’s chart if he requested that, if not
          please be aware that what has been deleted can never brought
          back
        </Typography>
      </Box>
      <Button
        startIcon={<TrashIcon fontSize="small" />}
        sx={{
          backgroundColor: 'error.main',
          color: 'error.contrastText',
          '&:hover': {
            backgroundColor: 'error.dark'
          }
        }}
        variant="contained"
      >
        Delete Account
      </Button>
    </CardContent>
  </Card>
);

export default CustomerDataManagement;
