import { Box, Button, TextField, Typography } from '@material-ui/core';
import QuillEditor from '../../QuillEditor';

const Form10 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <TextField
        fullWidth
        label="Product Name"
        name="name"
        variant="outlined"
      />
      <Typography
        color="textSecondary"
        sx={{
          mt: 3,
          mb: 2
        }}
        variant="subtitle2"
      >
        Description
      </Typography>
      <QuillEditor
        placeholder="Write something"
        sx={{ height: 400 }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 3
        }}
      >
        <Button
          color="primary"
          type="submit"
          variant="contained"
        >
          Update
        </Button>
      </Box>
    </form>
  </Box>
);

export default Form10;
