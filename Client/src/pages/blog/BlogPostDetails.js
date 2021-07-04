import { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Markdown from 'react-markdown/with-html';
import { format, subHours } from 'date-fns';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import { blogApi } from '../../__fakeApi__/blogApi';
import { BlogPostComment, BlogNewsletter } from '../../components/blog';
import PencilAltIcon from '../../icons/PencilAlt';
import useMounted from '../../hooks/useMounted';
import gtm from '../../lib/gtm';

const comments = [
  {
    id: 'd0ab3d02ef737fa6b007e35d',
    authorAvatar: '/static/mock-images/avatars/avatar-alcides_antonio.png',
    authorName: 'Alcides Antonio',
    authorRole: 'Product Designer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: subHours(new Date(), 2).getTime(),
    isLiked: true,
    likes: 12
  },
  {
    id: '3ac1e17289e38a84108efdf3',
    authorAvatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
    authorName: 'Jie Yan Song',
    authorRole: 'Web Developer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    createdAt: subHours(new Date(), 8).getTime(),
    isLiked: false,
    likes: 8
  }
];

const MarkdownWrapper = experimentalStyled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '& h2': {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.typography.h2.lineHeight,
    marginBottom: theme.spacing(3)
  },
  '& h3': {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.typography.h3.lineHeight,
    marginBottom: theme.spacing(3)
  },
  '& p': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(2)
  },
  '& li': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(1)
  }
}));

const BlogPostDetails = () => {
  const mounted = useMounted();
  const [post, setPost] = useState(null);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getPost = useCallback(async () => {
    try {
      const data = await blogApi.getPost();

      if (mounted.current) {
        setPost(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (!post) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Blog: Post Details | Material Kit Pro</title>
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
                    startIcon={<PencilAltIcon fontSize="small" />}
                    to="/blog/new"
                    variant="outlined"
                  >
                    Edit this post
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </div>
        <Divider />
        <Box sx={{ py: 3 }}>
          <Container maxWidth="md">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Chip
                label={post.category}
                variant="outlined"
              />
            </Box>
            <Typography
              align="center"
              color="textPrimary"
              sx={{
                fontWeight: 'fontWeightBold',
                mt: 3
              }}
              variant="h2"
            >
              {post.title}
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              sx={{ mt: 3 }}
              variant="subtitle1"
            >
              {post.shortDescription}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 3
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  mt: 2
                }}
              >
                <Avatar src={post.author.avatar} />
                <Box sx={{ ml: 2 }}>
                  <Typography
                    color="textPrimary"
                    variant="subtitle2"
                  >
                    {post.author.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="caption"
                  >
                    {`${format(post.publishedAt, 'dd MMM')} · ${post.readTime} read`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                backgroundImage: `url(${post.cover})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '20px',
                height: 600
              }}
            />
          </Container>
        </Box>
        <Box sx={{ py: 3 }}>
          <Container maxWidth="md">
            <MarkdownWrapper>
              <Markdown source={post.content} />
            </MarkdownWrapper>
          </Container>
        </Box>
        <div>
          <Container maxWidth="lg">
            <Typography
              color="textPrimary"
              variant="h6"
            >
              {`Comments (${comments.length})`}
            </Typography>
            <Box sx={{ mt: 3 }}>
              {comments.map((comment) => (
                <BlogPostComment
                  key={comment.id}
                  {...comment}
                />
              ))}
            </Box>
          </Container>
        </div>
        <BlogNewsletter />
      </Box>
    </>
  );
};

export default BlogPostDetails;
