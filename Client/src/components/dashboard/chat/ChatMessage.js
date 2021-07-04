import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import { Lightbox } from 'react-modal-image';
import { Avatar, Box, Link, Typography } from '@material-ui/core';

const ChatMessage = (props) => {
  const { body, contentType, createdAt, senderAvatar, senderName, senderType, ...other } = props;
  const [expandMedia, setExpandMedia] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        mb: 2
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: senderType === 'user'
            ? 'row-reverse'
            : 'row',
          maxWidth: 500,
          ml: senderType === 'user' ? 'auto' : 0
        }}
      >
        <Avatar
          src={senderAvatar}
          sx={{
            height: 32,
            ml: senderType === 'user' ? 2 : 0,
            mr: senderType === 'user' ? 0 : 2,
            width: 32
          }}
        />
        <div>
          <Box
            sx={{
              backgroundColor: senderType === 'user'
                ? 'primary.main'
                : 'background.paper',
              borderRadius: 1,
              boxShadow: 1,
              color: senderType === 'user'
                ? 'primary.contrastText'
                : 'text.primary',
              px: 2,
              py: 1
            }}
          >
            <Link
              color="inherit"
              component={RouterLink}
              to="#"
              variant="subtitle2"
            >
              {senderName}
            </Link>
            <Box sx={{ mt: 1 }}>
              {contentType === 'image'
                ? (
                  <Box
                    onClick={() => setExpandMedia(true)}
                    sx={{
                      mt: 2,
                      '& img': {
                        cursor: 'pointer',
                        height: 'auto',
                        maxWidth: '100%',
                        width: 380
                      }
                    }}
                  >
                    <img
                      alt="Attachment"
                      src={body}
                    />
                  </Box>
                )
                : (
                  <Typography
                    color="inherit"
                    variant="body1"
                  >
                    {body}
                  </Typography>
                )}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: senderType === 'user'
                ? 'flex-end'
                : 'flex-start',
              mt: 1,
              px: 2
            }}
          >
            <Typography
              color="textSecondary"
              noWrap
              variant="caption"
            >
              {formatDistanceToNowStrict(createdAt)}
              {' '}
              ago
            </Typography>
          </Box>
        </div>
      </Box>
      {expandMedia && (
        <Lightbox
          large={body}
          onClose={() => setExpandMedia(true)}
        />
      )}
    </Box>
  );
};

ChatMessage.propTypes = {
  body: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  senderAvatar: PropTypes.string.isRequired,
  senderName: PropTypes.string.isRequired,
  senderType: PropTypes.oneOf(['contact', 'user'])
};

export default ChatMessage;
