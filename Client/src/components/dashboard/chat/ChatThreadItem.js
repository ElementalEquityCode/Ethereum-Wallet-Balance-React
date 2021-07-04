import PropTypes from 'prop-types';
import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

const getDetails = (thread, currentUserId) => {
  const otherParticipants = thread.participants.filter((participant) => (participant.id
    !== currentUserId));
  const displayNames = otherParticipants
    .reduce((names, participant) => [...names, participant.name], [])
    .join(', ');
  let displayText = '';
  const lastMessage = thread.messages[thread.messages.length - 1];

  if (lastMessage) {
    const sender = lastMessage.senderId === currentUserId ? 'Me: ' : '';
    const message = lastMessage.contentType === 'image'
      ? 'Sent a photo'
      : lastMessage.body;

    displayText = `${sender}${message}`;
  }

  return {
    otherParticipants,
    displayNames,
    displayText
  };
};

const ChatThreadItem = (props) => {
  const { active, thread, onSelect, ...other } = props;

  // We hardcode the current user ID because the mocked that is not in sync with the auth provider.
  // When implementing this app with a real database, replace this ID with the ID from Auth Context.
  const details = getDetails(thread, '5e86809283e28b96d2d38537');

  return (
    <ListItem
      button
      onClick={onSelect}
      sx={{
        backgroundColor: active && 'action.selected',
        boxShadow: (theme) => active && `inset 4px 0px 0px ${theme.palette.primary.main}`
      }}
      {...other}
    >
      <ListItemAvatar
        sx={{
          display: 'flex',
          justifyContent: {
            sm: 'flex-start',
            xs: 'center'
          }
        }}
      >
        <AvatarGroup
          max={2}
          sx={{
            '& .MuiAvatar-root': details.otherParticipants.length > 1
              ? {
                height: 26,
                width: 26,
                '&:nth-of-type(2)': {
                  mt: '10px'
                }
              }
              : {
                height: 36,
                width: 36
              }
          }}
        >
          {details.otherParticipants.map((participant) => (
            <Avatar
              key={participant.id}
              src={participant.avatar}
            />
          ))}
        </AvatarGroup>
      </ListItemAvatar>
      <ListItemText
        primary={details.displayNames}
        primaryTypographyProps={{
          color: 'textPrimary',
          noWrap: true,
          variant: 'subtitle2'
        }}
        secondary={details.displayText}
        secondaryTypographyProps={{
          color: 'textSecondary',
          noWrap: true,
          variant: 'body2'
        }}
        sx={{
          display: {
            sm: 'block',
            xs: 'none'
          }
        }}
      />
      <Box
        sx={{
          alignItems: 'flex-end',
          display: {
            sm: 'flex',
            xs: 'none'
          },
          flexDirection: 'column',
          ml: 2
        }}
      >
        {thread.unreadCount > 0 && (
          <Chip
            color="primary"
            label={thread.unreadCount}
            size="small"
            sx={{
              height: 18,
              mt: '2px',
              minWidth: 18,
              p: '2px'
            }}
          />
        )}
      </Box>
    </ListItem>
  );
};

ChatThreadItem.propTypes = {
  active: PropTypes.bool,
  onSelect: PropTypes.func,
  thread: PropTypes.object.isRequired
};

ChatThreadItem.defaultProps = {
  active: false
};

export default ChatThreadItem;
