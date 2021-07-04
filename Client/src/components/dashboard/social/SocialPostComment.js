import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import { Avatar, Box, Link, Typography } from '@material-ui/core';

const SocialPostComment = (props) => {
  const { authorAvatar, authorName, createdAt, message, ...other } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        mb: 2
      }}
      {...other}
    >
      <Avatar
        component={RouterLink}
        src={authorAvatar}
        to="#"
      />
      <Box
        sx={{
          backgroundColor: 'background.default',
          borderRadius: 1,
          flexGrow: 1,
          ml: 2,
          p: 2
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mb: 1
          }}
        >
          <Link
            color="textPrimary"
            component={RouterLink}
            to="#"
            variant="subtitle2"
          >
            {authorName}
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {formatDistanceToNowStrict(createdAt)}
            {' '}
            ago
          </Typography>
        </Box>
        <Typography
          color="textPrimary"
          variant="body2"
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

SocialPostComment.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired
};

export default SocialPostComment;
