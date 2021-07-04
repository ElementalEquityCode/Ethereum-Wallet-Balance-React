import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Typography } from '@material-ui/core';
import { socialApi } from '../../__fakeApi__/socialApi';
import { SocialPostAdd, SocialPostCard } from '../../components/dashboard/social';
import useMounted from '../../hooks/useMounted';
import gtm from '../../lib/gtm';

const SocialFeed = () => {
  const mounted = useMounted();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getPosts = useCallback(async () => {
    try {
      const data = await socialApi.getFeed();

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

  return (
    <>
      <Helmet>
        <title>Dashboard: Social Feed | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <div>
            <Typography
              color="textSecondary"
              variant="overline"
            >
              Social Feed
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
            >
              Here&apos;s what your connections posted
            </Typography>
          </div>
          <Box sx={{ mt: 3 }}>
            <SocialPostAdd />
          </Box>
          {posts.map((post) => (
            <Box
              key={post.id}
              sx={{ mt: 3 }}
            >
              <SocialPostCard
                authorAvatar={post.author.avatar}
                authorName={post.author.name}
                comments={post.comments}
                createdAt={post.createdAt}
                isLiked={post.isLiked}
                likes={post.likes}
                media={post.media}
                message={post.message}
              />
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default SocialFeed;
