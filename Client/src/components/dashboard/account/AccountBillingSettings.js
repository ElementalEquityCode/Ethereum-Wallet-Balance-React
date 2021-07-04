import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Paper,
  Typography
} from '@material-ui/core';

const plan = {
  adsLeft: 10,
  currency: '$',
  hasAnalytics: true,
  hasEmailAlerts: true,
  invitesLeft: 24,
  name: 'Premium',
  price: 29,
  proposalsLeft: 12,
  templatesLeft: 5
};

const AccountBillingSettings = (props) => (
  <Card {...props}>
    <CardHeader title="Manage your plan" />
    <Divider />
    <CardContent>
      <Paper variant="outlined">
        <Box
          sx={{
            alignItems: {
              lg: 'center',
              xs: 'flex-start'
            },
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            flexDirection: {
              lf: 'row',
              xs: 'column-reverse'
            },
            p: 3
          }}
        >
          <div>
            <Typography
              color="textPrimary"
              display="inline"
              variant="h4"
            >
              {plan.currency}
              {plan.price}
            </Typography>
            <Typography
              color="textPrimary"
              display="inline"
              variant="subtitle1"
            >
              /mo
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Typography
              color="textSecondary"
              sx={{ ml: 1 }}
              variant="overline"
            >
              {plan.name}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            alignItems: {
              lg: 'center',
              xs: 'flex-start'
            },
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            flexDirection: {
              lg: 'row',
              xs: 'column-reverse'
            },
            p: 3
          }}
        >
          <div>
            <Typography
              color="textPrimary"
              variant="body2"
            >
              {`${plan.proposalsLeft} proposals left`}
            </Typography>
            <Typography
              color="textPrimary"
              variant="body2"
            >
              {`${plan.templatesLeft} templates`}
            </Typography>
          </div>
          <div>
            <Typography
              color="textPrimary"
              variant="body2"
            >
              {`${plan.invitesLeft} invites left`}
            </Typography>
            <Typography
              color="textPrimary"
              variant="body2"
            >
              {`${plan.adsLeft} ads left`}
            </Typography>
          </div>
          <div>
            {plan.hasAnalytics && (
              <Typography
                color="textPrimary"
                variant="body2"
              >
                Analytics dashboard
              </Typography>
            )}
            {plan.hasEmailAlerts && (
              <Typography
                color="textPrimary"
                variant="body2"
              >
                Email alerts
              </Typography>
            )}
          </div>
        </Box>
      </Paper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 2
        }}
      >
        <Button
          color="primary"
          size="small"
          variant="contained"
        >
          Upgrade Plan
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          The refunds don&apos;t work once you have the plan, but you can
          always
          {' '}
          <Link
            color="primary"
            component={RouterLink}
            to="#"
          >
            Cancel your plan
          </Link>
          .
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default AccountBillingSettings;
