import { useState } from 'react';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import { Avatar, Box, Button, Chip, IconButton, TextField, Typography } from '@material-ui/core';
import PlusIcon from '../../../icons/Plus';

const Form8 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        minHeight: '100%',
        p: 3
      }}
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <Box>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            Please select one option
          </Typography>
          <Typography
            color="textSecondary"
            sx={{ py: 2 }}
            variant="body1"
          >
            Proin tincidunt lacus sed ante efficitur efficitur. Quisque
            aliquam fringilla velit sit amet euismod.
          </Typography>
          <TextField
            fullWidth
            label="Project Name"
            name="projectName"
            variant="outlined"
          />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mt: 3
            }}
          >
            <TextField
              fullWidth
              label="Tags"
              name="tags"
              variant="outlined"
            />
            <IconButton sx={{ ml: 2 }}>
              <PlusIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ mt: 2 }}>
            {['Full-Time'].map((tag) => (
              <Chip
                avatar={<Avatar>F</Avatar>}
                key={tag}
                label={tag}
                onDelete={() => {
                }}
                sx={{
                  '& + &': {
                    ml: 1
                  }
                }}
                variant="outlined"
              />
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              mt: 4
            }}
          >
            <Box sx={{ mr: 2 }}>
              <MobileDatePicker
                label="Start Date"
                onChange={(newDate) => setStartDate(newDate)}
                renderInput={(inputProps) => (
                  <TextField
                    variant="outlined"
                    {...inputProps}
                  />
                )}
                value={startDate}
              />
            </Box>
            <MobileDatePicker
              label="End Date"
              onChange={(newDate) => setEndDate(newDate)}
              renderInput={(inputProps) => (
                <TextField
                  variant="outlined"
                  {...inputProps}
                />
              )}
              value={endDate}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mt: 6
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="primary"
            type="submit"
            variant="contained"
          >
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form8;
