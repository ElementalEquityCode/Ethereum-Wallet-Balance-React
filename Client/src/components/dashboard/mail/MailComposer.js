import { useState } from 'react';
import {
  Backdrop,
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Paper,
  Portal,
  Tooltip,
  Typography
} from '@material-ui/core';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MinimizeIcon from '@material-ui/icons/Minimize';
import ArrowsExpandIcon from '../../../icons/ArrowsExpand';
import XIcon from '../../../icons/X';
import { closeCompose } from '../../../slices/mail';
import { useDispatch, useSelector } from '../../../store';
import QuillEditor from '../../QuillEditor';

const MailComposer = () => {
  const dispatch = useDispatch();
  const { isComposeOpen } = useSelector((state) => state.mail);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [messageBody, setMessageBody] = useState('');

  const handleChange = (value) => {
    setMessageBody(value);
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleEnterFullScreen = () => {
    setIsFullScreen(true);
  };

  const handleClose = () => {
    dispatch(closeCompose());
  };

  if (!isComposeOpen) {
    return null;
  }

  return (
    <Portal>
      <Backdrop open={isFullScreen} />
      <Paper
        sx={{
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          margin: 3,
          maxHeight: (theme) => `calc(100% - ${theme.spacing(6)})`,
          maxWidth: (theme) => `calc(100% - ${theme.spacing(6)})`,
          minHeight: 500,
          outline: 'none',
          position: 'fixed',
          right: 0,
          width: 600,
          zIndex: 2000,
          ...(isFullScreen && {
            height: '100%',
            width: '100%'
          })
        }}
        elevation={12}
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
          {isFullScreen
            ? (
              <IconButton onClick={handleExitFullScreen}>
                <MinimizeIcon fontSize="small" />
              </IconButton>
            )
            : (
              <IconButton onClick={handleEnterFullScreen}>
                <ArrowsExpandIcon fontSize="small" />
              </IconButton>
            )}
          <IconButton onClick={handleClose}>
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
          onChange={handleChange}
          placeholder="Leave a message"
          sx={{
            border: 'none',
            flexGrow: 1
          }}
          value={messageBody}
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
    </Portal>
  );
};

export default MailComposer;
