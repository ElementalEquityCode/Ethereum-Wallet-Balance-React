import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker';
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';

const InputMixed = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 3
    }}
  >
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex'
      }}
    >
      <Switch color="primary" />
      <Typography
        color="textPrimary"
        variant="body1"
      >
        Schedule Publish
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <MobileDateTimePicker
        label="Start date"
        onChange={() => {
        }}
        renderInput={(inputProps) => (
          <TextField
            fullWidth
            variant="outlined"
            {...inputProps}
          />
        )}
        value={new Date()}
      />
    </Box>
    <Box sx={{ mt: 3 }}>
      <FormControl
        fullWidth
        variant="outlined"
      >
        <InputLabel>
          Category
        </InputLabel>
        <Select
          defaultValue="programming"
          label="Category"
        >
          <MenuItem value="programming">
            Programming
          </MenuItem>
          <MenuItem value="design">
            Design
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        mt: 3
      }}
    >
      <Checkbox
        color="primary"
        defaultChecked
      />
      <Typography
        color="textPrimary"
        variant="body1"
      >
        Published Globally
      </Typography>
    </Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        mt: 3
      }}
    >
      <Checkbox
        defaultChecked
        color="primary"
      />
      <Typography
        color="textPrimary"
        variant="body1"
      >
        Enable Contents
      </Typography>
    </Box>
  </Box>
);

export default InputMixed;
