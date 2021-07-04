import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Divider } from '@material-ui/core';
import {
  addRecipient,
  getParticipants,
  getThread,
  markThreadAsSeen,
  removeRecipient,
  resetActiveThread
} from '../../../slices/chat';
import { useDispatch, useSelector } from '../../../store';
import ChatMessageAdd from './ChatMessageAdd';
import ChatMessages from './ChatMessages';
import ChatThreadComposer from './ChatThreadComposer';
import ChatThreadToolbar from './ChatThreadToolbar';

const threadSelector = (state) => {
  const { threads, activeThreadId } = state.chat;
  const thread = threads.byId[activeThreadId];

  if (thread) {
    return thread;
  }

  return {
    id: null,
    messages: [],
    participants: [],
    unreadMessages: 0
  };
};

const ChatThread = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { threadKey } = useParams();
  const { activeThreadId, participants, recipients } = useSelector((state) => state.chat);
  const thread = useSelector((state) => threadSelector(state));

  const getDetails = async () => {
    dispatch(getParticipants(threadKey));

    try {
      await dispatch(getThread(threadKey));
    } catch (err) {
      dispatch(resetActiveThread());
      // If thread key is not a valid key (thread id or username)
      // the server throws an error, this means that the user tried a shady route
      // and we redirect him on the compose route
      console.error(err);
      navigate('/dashboard/chat/new');
    }
  };

  useEffect(() => {
    if (threadKey) {
      getDetails();
    }
  }, [threadKey]);

  useEffect(() => {
    if (activeThreadId) {
      dispatch(markThreadAsSeen(activeThreadId));
    }
  }, [activeThreadId]);

  // In our case there two possible routes
  // one that contains chat/new and one with a chat/:threadKey
  // if threadKey does not exist, it means that the chat is in compose mode
  const mode = threadKey ? 'DETAIL' : 'COMPOSE';

  const handleAddRecipient = (recipient) => {
    dispatch(addRecipient(recipient));
  };

  const handleRemoveRecipient = (recipientId) => {
    dispatch(removeRecipient(recipientId));
  };

  const handleSendMessage = async () => {
    try {
      // Handle send message
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}
    >
      {mode === 'DETAIL' && (
        <ChatThreadToolbar participants={participants} />
      )}
      {mode === 'COMPOSE' && (
        <ChatThreadComposer
          onAddRecipient={handleAddRecipient}
          onRemoveRecipient={handleRemoveRecipient}
          recipients={recipients}
        />
      )}
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto'
        }}
      >
        <ChatMessages
          messages={thread.messages}
          participants={thread.participants}
        />
      </Box>
      <Divider />
      <ChatMessageAdd
        disabled={false}
        onSend={handleSendMessage}
      />
    </Box>
  );
};

export default ChatThread;
