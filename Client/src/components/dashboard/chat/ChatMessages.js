import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import Scrollbar from '../../Scrollbar';
import ChatMessage from './ChatMessage';

const ChatMessages = (props) => {
  const { messages, participants, ...other } = props;
  const rootRef = useRef(null);
  const { user } = useAuth();

  const scrollToBottom = () => {
    // eslint-disable-next-line no-underscore-dangle
    if (rootRef?.current?._container) {
      // eslint-disable-next-line no-underscore-dangle
      rootRef.current._container.scrollTop = rootRef.current._container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <Scrollbar
      options={{ suppressScrollX: true }}
      ref={rootRef}
      {...other}
    >
      <Box sx={{ p: 2 }}>
        {messages.map((message) => {
          const participant = participants
            .find((_participant) => _participant.id === message.senderId);
          let senderAvatar;
          let senderName;
          let senderType;

          // Since chat mock db is not synced with external auth providers
          // we set the user details from user auth state instead of thread participants
          if (message.senderId === '5e86809283e28b96d2d38537') {
            senderAvatar = user.avatar;
            senderName = 'Me';
            senderType = 'user';
          } else {
            senderAvatar = participant.avatar;
            senderName = participant.name;
            senderType = 'contact';
          }

          return (
            <ChatMessage
              body={message.body}
              contentType={message.contentType}
              createdAt={message.createdAt}
              key={message.id}
              senderAvatar={senderAvatar}
              senderName={senderName}
              senderType={senderType}
            />
          );
        })}
      </Box>
    </Scrollbar>
  );
};

ChatMessages.propTypes = {
  messages: PropTypes.array,
  participants: PropTypes.array
};

export default ChatMessages;
