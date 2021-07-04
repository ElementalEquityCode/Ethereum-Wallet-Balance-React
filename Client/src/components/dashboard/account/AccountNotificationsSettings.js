import toast from 'react-hot-toast';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@material-ui/core';
import wait from '../../../utils/wait';

const AccountNotificationsSettings = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // NOTE: Make API request
    await wait(500);
    toast.success('Changes saved!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      {...props}
    >
      <Card>
        <CardHeader title="Notifications" />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="subtitle2"
              >
                System
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                You will receive emails in your business email address
              </Typography>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                      defaultChecked
                    />
                  )}
                  label="Email alerts"
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Push Notifications"
                />
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                      defaultChecked
                    />
                  )}
                  label="Text message"
                />
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                      defaultChecked
                    />
                  )}
                  label={(
                    <>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        Phone calls
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="caption"
                      >
                        Short voice phone updating you
                      </Typography>
                    </>
                  )}
                />
              </div>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="subtitle2"
              >
                Chat App
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                You will receive emails in your business email address
              </Typography>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                      defaultChecked
                    />
                  )}
                  label="Email"
                />
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                      defaultChecked
                    />
                  )}
                  label="Push notifications"
                />
              </div>
            </Grid>
          </Grid>
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
            type="submit"
            variant="contained"
          >
            Save Settings
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountNotificationsSettings;
