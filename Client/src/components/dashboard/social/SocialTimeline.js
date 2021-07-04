import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { socialApi } from '../../../__fakeApi__/socialApi';
import useMounted from '../../../hooks/useMounted';
import SocialPostAdd from './SocialPostAdd';
import SocialPostCard from './SocialPostCard';
import SocialProfileAbout from './SocialProfileAbout';

const SocialTimeline = (props) => {
  const mounted = useMounted();
  const { profile, ...other } = props;
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    try {
      const data = await socialApi.getPosts();

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
    <div {...other}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
        >
          <SocialProfileAbout
            currentCity={profile.currentCity}
            currentJobCompany={profile.currentJobCompany}
            currentJobTitle={profile.currentJobTitle}
            email={profile.email}
            originCity={profile.originCity}
            previousJobCompany={profile.previousJobCompany}
            previousJobTitle={profile.previousJobTitle}
            profileProgress={profile.profileProgress}
            quote={profile.quote}
          />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
        >
          <SocialPostAdd />
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
        </Grid>
      </Grid>
    </div>
  );
};

SocialTimeline.propTypes = {
  profile: PropTypes.object.isRequired
};

export default SocialTimeline;
