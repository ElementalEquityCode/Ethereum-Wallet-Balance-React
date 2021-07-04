import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  ClickAwayListener,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import SearchIcon from '../../../icons/Search';

const ChatContactSearch = forwardRef((props, ref) => {
  const { isFocused, onChange, onClickAway, onFocus, onSelect, query, results, ...other } = props;

  const handleSelect = (result) => {
    if (onSelect) {
      onSelect(result);
    }
  };

  const displayResults = query && isFocused;

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Box
        ref={ref}
        sx={{ px: 1 }}
        {...other}
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'background.default',
            borderRadius: 22,
            display: 'flex',
            height: 44,
            px: 2
          }}
        >
          <SearchIcon
            color="action"
            fontSize="small"
          />
          <Box
            sx={{
              flexGrow: 1,
              ml: 2
            }}
          >
            <Input
              fullWidth
              disableUnderline
              onChange={onChange}
              onFocus={onFocus}
              placeholder="Search contacts"
              value={query}
            />
          </Box>
        </Box>
        {displayResults && (
          <Box sx={{ mt: 2 }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              Contacts
            </Typography>
            <List>
              {results.map((result) => (
                <ListItem
                  button
                  key={result.id}
                  onClick={() => handleSelect(result)}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={result.avatar}
                      sx={{
                        height: 32,
                        width: 32
                      }}
                    />
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
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
});

ChatContactSearch.propTypes = {
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  onClickAway: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  query: PropTypes.string,
  results: PropTypes.array
};

ChatContactSearch.defaultProps = {
  isFocused: false,
  query: '',
  results: []
};

export default ChatContactSearch;
