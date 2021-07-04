import { useNavigate } from 'react-router-dom';
import { List } from '@material-ui/core';
import { useSelector } from '../../../store';
import ChatThreadItem from './ChatThreadItem';

const ChatThreadList = (props) => {
  const { threads, activeThreadId } = useSelector((state) => state.chat);
  const navigate = useNavigate();

  const handleSelect = (threadId) => {
    const thread = threads.byId[threadId];
    let threadKey;

    if (thread.type === 'GROUP') {
      threadKey = thread.id;
    } else {
      // We hardcode the current user ID because the mocked that is not in sync
      // with the auth provider.
      // When implementing this app with a real database, replace this
      // ID with the ID from Auth Context.
      const otherParticipant = thread.participants.find((participant) => (participant.id
        !== '5e86809283e28b96d2d38537'));

      threadKey = otherParticipant.username;
    }

    navigate(`/dashboard/chat/${threadKey}`);
  };

  return (
    <List {...props}>
      {threads.allIds.map((threadId) => (
        <ChatThreadItem
          active={activeThreadId === threadId}
          key={threadId}
          onSelect={() => handleSelect(threadId)}
          thread={threads.byId[threadId]}
        />
      ))}
    </List>
  );
};

export default ChatThreadList;
