import { useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextareaAutosize,
  Tooltip
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import useAuth from '../../../hooks/useAuth';

const MailReplyTextarea = experimentalStyled(TextareaAutosize)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: 'none',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.body1.fontFamily,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  outline: 'none',
  resize: 'none',
  width: '100%',
  '&::placeholder': {
    color: theme.palette.text.secondary
  }
}));

const MailReply = (props) => {
  const { user } = useAuth();
  const fileInputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        p: 3
      }}
      {...props}
    >
      <Avatar src={user.avatar} />
      <Paper
        sx={{
          flexGrow: 1,
          ml: 2,
          p: 2
        }}
        variant="outlined"
      >
        <MailReplyTextarea
          minRows={3}
          onChange={handleChange}
          placeholder="Leave a message"
          value={value}
        />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 2
          }}
        >
          <Button
            color="primary"
            sx={{ mr: 1 }}
            variant="contained"
          >
            Send
          </Button>
          <Tooltip title="Attach image">
            <IconButton
              onClick={handleAttach}
              size="small"
              sx={{ mr: 1 }}
            >
              <AddPhotoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Attach file">
            <IconButton
              onClick={handleAttach}
              size="small"
              sx={{ mr: 1 }}
            >
              <AttachFileIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
      <input
        hidden
        ref={fileInputRef}
        type="file"
      />
    </Box>
  );
};

export default MailReply;
