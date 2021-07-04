import { useRef, useState } from 'react';
import { Box, Card, CardContent, Divider, IconButton, TextField, Tooltip } from '@material-ui/core';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import useAuth from '../../../hooks/useAuth';

const SocialPostAdd = (props) => {
  const fileInputRef = useRef(null);
  const [value, setValue] = useState('');
  const { user } = useAuth();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <TextField
            fullWidth
            onChange={handleChange}
            placeholder={`What's on your mind, ${user.name}`}
            size="small"
            variant="outlined"
          />
          <Tooltip title="Send">
            <IconButton
              color={value ? 'primary' : 'inherit'}
              component={value ? 'button' : 'span'}
              disabled={!value}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ height: 24 }}>
            <Divider orientation="vertical" />
          </Box>
          <Tooltip title="Attach image">
            <IconButton
              edge="end"
              onClick={handleAttach}
            >
              <AddPhotoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Attach file">
            <IconButton
              edge="end"
              onClick={handleAttach}
            >
              <AttachFileIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <input
            hidden
            ref={fileInputRef}
            type="file"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialPostAdd;
