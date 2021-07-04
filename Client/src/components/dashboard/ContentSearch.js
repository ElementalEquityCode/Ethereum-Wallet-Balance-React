/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Drawer,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Tooltip,
  Typography
} from '@material-ui/core';
import SearchIcon from '../../icons/Search';
import XIcon from '../../icons/X';
import Scrollbar from '../Scrollbar';
import wait from '../../utils/wait';

const results = [
  {
    description: 'Algolia broadly consists of two parts: search implementation and search analytics. We provide tools that make it easy for your developers...',
    title: 'What does Algolia do?'
  },
  {
    description: 'To be clear, search doesn’t know the direction that your business should take. However, it can help you gather information on what your customers want...',
    title: 'Search as a feedback loop'
  },
  {
    description: 'Algolia provides your users with a fast and rich search experience. Your Algolia search interface can contain a search bar, filters, infinite scrolling...',
    title: 'What can Algolia do for my users?'
  }
];

const ContentSearch = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const search = async () => {
    setShowResults(false);
    setIsLoading(true);
    // Do search here
    await wait(1500);
    setIsLoading(false);
    setShowResults(true);
  };

  const handleClick = () => {
    search();
  };

  const handleKeyUp = (event) => {
    if (event.code === 'ENTER') {
      search();
    }
  };

  return (
    <>
      <Tooltip title="Search">
        <IconButton
          color="inherit"
          onClick={handleOpen}
        >
          <SearchIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="top"
        ModalProps={{ BackdropProps: { invisible: true } }}
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: '100%' }
        }}
        variant="temporary"
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <IconButton onClick={handleClose}>
              <XIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ p: 3 }}>
          <Container maxWidth="md">
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  )
                }}
                onChange={(event) => setValue(event.target.value)}
                onKeyUp={handleKeyUp}
                placeholder="Search..."
                value={value}
              />
              <Button
                color="primary"
                onClick={handleClick}
                size="large"
                sx={{ ml: 2 }}
                variant="contained"
              >
                Search
              </Button>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Scrollbar options={{ suppressScrollX: true }}>
                {isLoading
                  ? (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  )
                  : (
                    <>
                      {showResults && (
                        <>
                          {results.map((result, i) => (
                            <Box
                              key={i}
                              sx={{ mb: 2 }}
                            >
                              <Link
                                color="textPrimary"
                                component={RouterLink}
                                to="/dashboard"
                                variant="h5"
                              >
                                {result.title}
                              </Link>
                              <Typography
                                color="textPrimary"
                                variant="body2"
                              >
                                {result.description}
                              </Typography>
                            </Box>
                          ))}
                        </>
                      )}
                    </>
                  )}
              </Scrollbar>
            </Box>
          </Container>
        </Box>
      </Drawer>
    </>
  );
};

export default ContentSearch;
