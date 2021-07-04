import { Box, Button } from '@material-ui/core';

const Buttons1 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 3
    }}
  >
    <div>
      <Button
        color="primary"
        size="large"
        sx={{ mr: 3 }}
        variant="contained"
      >
        Default
      </Button>
      <Button
        color="primary"
        disabled
        size="large"
        variant="contained"
      >
        Disabled
      </Button>
    </div>
    <Box sx={{ py: 3 }}>
      <Button
        color="primary"
        size="large"
        sx={{ mr: 3 }}
        variant="outlined"
      >
        Default
      </Button>
      <Button
        color="primary"
        disabled
        size="large"
        variant="outlined"
      >
        Disabled
      </Button>
    </Box>
    <Box>
      <Button
        color="primary"
        size="large"
        sx={{ mr: 3 }}
        variant="text"
      >
        Default
      </Button>
      <Button
        color="primary"
        disabled
        size="large"
        variant="text"
      >
        Disabled
      </Button>
    </Box>
  </Box>
);

export default Buttons1;
