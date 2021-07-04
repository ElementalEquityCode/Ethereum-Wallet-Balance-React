import { useCallback, useEffect, useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';
import { blogApi } from '../../__fakeApi__/blogApi';
import { BlogPostCard, BlogNewsletter } from '../../components/blog';
import PlusIcon from '../../icons/Plus';
import SortAscendingIcon from '../../icons/SortAscending';
import SortDescendingIcon from '../../icons/SortDescending';
import SearchIcon from '../../icons/Search';
import useMounted from '../../hooks/useMounted';
import gtm from '../../lib/gtm';

const sortOptions = [
  {
    label: 'Newest',
    value: 'desc',
    icon: SortDescendingIcon
  },
  {
    label: 'Older',
    value: 'asc',
    icon: SortAscendingIcon
  }
];

const BlogPostList = () => {
  const mounted = useMounted();
  const sortRef = useRef(null);
  const [openSort, setOpenSort] = useState(false);
  const [posts, setPosts] = useState([]);
  const [sortOption, setSortOption] = useState(sortOptions[0]);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getPosts = useCallback(async () => {
    try {
      const data = await blogApi.getPosts();

      if (mounted.current) {
        setPosts(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleSortOpen = () => {
    setOpenSort(true);
  };

  const handleSortClose = () => {
    setOpenSort(false);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setOpenSort(false);
  };

  const { icon: SortOptionIcon } = sortOption;

  return (
    <>
      <Helmet>
        <title>Blog: Post List | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%'
        }}
      >
        <div>
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{ py: 2 }}
            >
              <Grid
                alignItems="center"
                container
                justifyContent="space-between"
                spacing={3}
              >
                <Grid item>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                  >
                    Hello, Jane Rotanson
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    color="primary"
                    component={RouterLink}
                    size="large"
                    startIcon={<PlusIcon fontSize="small" />}
                    to="/blog/new"
                    variant="outlined"
                  >
                    Add new post
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </div>
        <Divider />
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ width: 500 }}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    )
                  }}
                  size="small"
                  placeholder="Search posts"
                  variant="outlined"
                />
              </Box>
              <Button
                color="primary"
                onClick={handleSortOpen}
                ref={sortRef}
                size="small"
                startIcon={<SortOptionIcon fontSize="small" />}
                variant="text"
              >
                {sortOption.label}
              </Button>
              <Menu
                anchorEl={sortRef.current}
                keepMounted
                onClose={handleSortClose}
                open={openSort}
                PaperProps={{
                  sx: { width: 200 }
                }}
              >
                {sortOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    onClick={() => handleSortChange(option)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ mt: 6 }}>
              <Grid
                container
                spacing={6}
              >
                {posts.map((post) => (
                  <Grid
                    item
                    key={post.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <BlogPostCard
                      authorAvatar={post.author.avatar}
                      authorName={post.author.name}
                      category={post.category}
                      cover={post.cover}
                      publishedAt={post.publishedAt}
                      readTime={post.readTime}
                      shortDescription={post.shortDescription}
                      title={post.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
        <BlogNewsletter />
      </Box>
    </>
  );
};

export default BlogPostList;
