import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@material-ui/core';

const InputCheckbox = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 2
    }}
  >
    <Typography
      color="textPrimary"
      variant="subtitle2"
    >
      System
    </Typography>
    <Typography
      color="textSecondary"
      sx={{ py: 1 }}
      variant="body2"
    >
      You will receive emails in your business email address
    </Typography>
    <FormGroup sx={{ pl: 1 }}>
      <FormControlLabel
        control={(
          <Checkbox
            color="primary"
            defaultChecked
          />
        )}
        label={(
          <Typography
            color="textPrimary"
            variant="body1"
          >
            Email alerts
          </Typography>
        )}
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label={(
          <Typography
            color="textPrimary"
            variant="body1"
          >
            Push Notifications
          </Typography>
        )}
      />
      <FormControlLabel
        control={(
          <Checkbox
            color="primary"
            defaultChecked
          />
        )}
        label={(
          <Typography
            color="textPrimary"
            variant="body1"
          >
            Text message
          </Typography>
        )}
      />
    </FormGroup>
  </Box>
);

export default InputCheckbox;
