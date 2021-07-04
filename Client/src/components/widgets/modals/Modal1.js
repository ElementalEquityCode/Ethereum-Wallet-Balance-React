import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Paper,
  Tooltip,
  Typography
} from '@material-ui/core';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import QuillEditor from '../../QuillEditor';
import ArrowsExpandIcon from '../../../icons/ArrowsExpand';
import XIcon from '../../../icons/X';

const Modal1 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Paper
      elevation={12}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 3,
        minHeight: 500,
        mx: 'auto',
        outline: 'none',
        width: 600
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          px: 2,
          py: 1
        }}
      >
        <Typography
          variant="h6"
          color="textPrimary"
        >
          New Message
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <ArrowsExpandIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <XIcon fontSize="small" />
        </IconButton>
      </Box>
      <Input
        disableUnderline
        fullWidth
        placeholder="To"
        sx={{
          p: 1,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      />
      <Input
        disableUnderline
        fullWidth
        placeholder="Subject"
        sx={{
          p: 1,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      />
      <QuillEditor
        placeholder="Leave a message"
        sx={{
          border: 'none',
          flexGrow: 1
        }}
      />
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
        >
          Send
        </Button>
        <Tooltip title="Attach image">
          <IconButton
            size="small"
            sx={{ ml: 1 }}
          >
            <AddPhotoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Attach file">
          <IconButton
            size="small"
            sx={{ ml: 1 }}
          >
            <AttachFileIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  </Box>
);

export default Modal1;
