import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Popper,
  Typography
} from '@material-ui/core';
import { chatApi } from '../../../__fakeApi__/chatApi';

const getFilteredSearchResults = (results, recipients) => {
  const recipientIds = recipients.reduce((acc, recipient) => [
    ...acc,
    recipient.id
  ], []);

  return results.filter((result) => !recipientIds.includes(result.id));
};

const ChatThreadComposer = (props) => {
  const { onAddRecipient, onRemoveRecipient, recipients, ...other } = props;
  const containerRef = useRef(null);
  const [query, setQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const filteredSearchResults = getFilteredSearchResults(searchResults, recipients);
  const displayResults = query && isSearchFocused;

  const handleSearchChange = async (event) => {
    try {
      const { value } = event.target;

      setQuery(value);

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

  const handleSearchBlur = () => {
    if (!displayResults) {
      setIsSearchFocused(false);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchResultsClickAway = () => {
    setIsSearchFocused(false);
  };

  const handleAddRecipient = (contact) => {
    setQuery('');

    if (onAddRecipient) {
      onAddRecipient(contact);
    }
  };

  const handleRemoveRecipient = (recipientId) => {
    if (onRemoveRecipient) {
      onRemoveRecipient(recipientId);
    }
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        p: 2
      }}
      {...other}
    >
      <Typography
        variant="body1"
        color="textSecondary"
      >
        To:
      </Typography>
      <Box
        ref={containerRef}
        sx={{
          ml: 1,
          '& .MuiInputBase-root': {
            backgroundColor: 'background.paper',
            borderRadius: 16,
            height: 32,
            maxWidth: recipients.length > 0 ? 120 : 'auto',
            px: 2
          }
        }}
      >
        {recipients.map((recipient) => (
          <Box
            component="span"
            key={recipient.id}
            sx={{ mr: 2 }}
          >
            <Chip
              color="primary"
              label={recipient.name}
              onDelete={() => handleRemoveRecipient(recipient.id)}
              size="small"
            />
          </Box>
        ))}
        <Input
          disableUnderline
          onBlur={handleSearchBlur}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          placeholder={recipients.length === 0
            ? 'Search contacts'
            : ''}
          value={query}
        />
      </Box>
      {displayResults && (
        <ClickAwayListener onClickAway={handleSearchResultsClickAway}>
          <Popper
            anchorEl={containerRef.current}
            open={isSearchFocused}
            placement="bottom-start"
          >
            <Paper
              sx={{
                mt: 1,
                maxWidth: '100%',
                width: 320
              }}
            >
              {filteredSearchResults.length === 0
                ? (
                  <Box
                    sx={{
                      p: 2,
                      textAlign: 'center'
                    }}
                  >
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h6"
                    >
                      Nothing Found
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      We couldn&apos;t find any matches
                      for &quot;
                      {query}
                      &quot;. Try checking for typos or using
                      complete words.
                    </Typography>
                  </Box>
                )
                : (
                  <>
                    <Box
                      sx={{
                        px: 2,
                        pt: 2
                      }}
                    >
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                      >
                        Contacts
                      </Typography>
                    </Box>
                    <List>
                      {filteredSearchResults.map((result) => (
                        <ListItem
                          button
                          key={result.id}
                          onClick={() => handleAddRecipient(result)}
                        >
                          <ListItemAvatar>
                            <Avatar src={result.avatar} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={result.name}
                            primaryTypographyProps={{
                              color: 'textPrimary',
                              noWrap: true,
                              variant: 'subtitle2'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
            </Paper>
          </Popper>
        </ClickAwayListener>
      )}
    </Box>
  );
};

ChatThreadComposer.propTypes = {
  onAddRecipient: PropTypes.func,
  onRemoveRecipient: PropTypes.func,
  recipients: PropTypes.array
};

ChatThreadComposer.defaultProps = {
  recipients: []
};

export default ChatThreadComposer;
