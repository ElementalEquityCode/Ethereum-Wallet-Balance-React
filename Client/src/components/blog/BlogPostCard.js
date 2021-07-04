import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Avatar, Box, CardMedia, Chip, Link, Typography } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';

const BlogPostCardMediaWrapper = experimentalStyled('div')({
  paddingTop: 'calc(100% * 4 / 4)',
  position: 'relative'
});

const BlogPostCard = (props) => {
  const {
    authorAvatar,
    authorName,
    category,
    cover,
    publishedAt,
    readTime,
    shortDescription,
    title,
    ...other
  } = props;

  return (
    <div {...other}>
      <BlogPostCardMediaWrapper>
        <CardMedia
          image={cover}
          sx={{
            height: '100%',
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        />
      </BlogPostCardMediaWrapper>
      <Box sx={{ mt: 2 }}>
        <div>
          <Chip
            label={category}
            variant="outlined"
          />
        </div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            my: 2
          }}
        >
          <Avatar src={authorAvatar} />
          <Box sx={{ ml: 2 }}>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              {authorName}
            </Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >
              {`${format(publishedAt, 'dd MMM')} · ${readTime} read`}
            </Typography>
          </Box>
        </Box>
        <Link
          color="textPrimary"
          component={RouterLink}
          to="/blog/1"
          variant="h5"
        >
          {title}
        </Link>
        <Typography
          color="textSecondary"
          sx={{
            height: 72,
            mt: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2
          }}
          variant="body1"
        >
          {shortDescription}
        </Typography>
      </Box>
    </div>
  );
};

BlogPostCard.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  publishedAt: PropTypes.number.isRequired,
  readTime: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BlogPostCard;
