import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography } from '@material-ui/core';
import { chatApi } from '../../../__fakeApi__/chatApi';
import CogIcon from '../../../icons/Cog';
import PencilAltIcon from '../../../icons/PencilAlt';
import Scrollbar from '../../Scrollbar';
import ChatContactSearch from './ChatContactSearch';
import ChatThreadList from './ChatThreadList';

const ChatSidebar = () => {
  const navigate = useNavigate();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClickAway = () => {
    setIsSearchFocused(false);
    setSearchQuery('');
  };

  const handleSearchChange = async (event) => {
    try {
      const { value } = event.target;

      setSearchQuery(value);

      if (value) {
        const data = await chatApi.searchContacts(value);

        setSearchResults(data);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchSelect = (result) => {
    setIsSearchFocused(false);
    setSearchQuery('');
    navigate(`/dashboard/chat/${result.username}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        width: 300
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexShrink: 0,
          height: 64,
          px: 2
        }}
      >
        <Typography
          color="textPrimary"
          variant="h5"
        >
          Chats
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <CogIcon fontSize="small" />
        </IconButton>
        <IconButton
          component={RouterLink}
          to="/dashboard/chat/new"
        >
          <PencilAltIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: {
            sm: 'block',
            xs: 'none'
          }
        }}
      >
        <ChatContactSearch
          isFocused={isSearchFocused}
          onChange={handleSearchChange}
          onClickAway={handleSearchClickAway}
          onFocus={handleSearchFocus}
          onSelect={handleSearchSelect}
          query={searchQuery}
          results={searchResults}
        />
      </Box>
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box sx={{ display: isSearchFocused ? 'none' : undefined }}>
          <ChatThreadList />
        </Box>
      </Scrollbar>
    </Box>
  );
};

export default ChatSidebar;
