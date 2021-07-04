import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import numeral from 'numeral';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Link,
  Rating,
  Tooltip,
  Typography
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import UsersIcon from '../../../icons/Users';
import getInitials from '../../../utils/getInitials';

const ProjectCard = (props) => {
  const { project, ...other } = props;
  const [isLiked, setIsLiked] = useState(project.isLiked);
  const [likes, setLikes] = useState(project.likes);

  const handleLike = () => {
    setIsLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = () => {
    setIsLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  };

  return (
    <Card {...other}>
      <Box sx={{ p: 3 }}>
        <CardMedia
          image={project.image}
          sx={{
            backgroundColor: 'background.default',
            height: 200
          }}
        />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mt: 2
          }}
        >
          <Avatar
            alt="Author"
            src={project.author.avatar}
          >
            {getInitials(project.author.name)}
          </Avatar>
          <Box sx={{ ml: 2 }}>
            <Link
              color="textPrimary"
              component={RouterLink}
              to="#"
              variant="h6"
            >
              {project.title}
            </Link>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              by
              {' '}
              <Link
                color="textPrimary"
                component={RouterLink}
                to="#"
                variant="subtitle2"
              >
                {project.author.name}
              </Link>
              {' '}
              | Updated
              {' '}
              {formatDistanceToNowStrict(project.updatedAt)}
              {' '}
              ago
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          pb: 2,
          px: 3
        }}
      >
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {project.caption}
        </Typography>
      </Box>
      <Box
        sx={{
          px: 3,
          py: 2
        }}
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
              variant="subtitle2"
            >
              {numeral(project.budget)
                .format(`${project.currency}0,0.00`)}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Budget
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              {project.location}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Location
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              {project.type}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Type
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pl: 2,
          pr: 3,
          py: 2
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {isLiked
            ? (
              <Tooltip title="Unlike">
                <IconButton
                  onClick={handleUnlike}
                  sx={{ color: red['600'] }}
                >
                  <FavoriteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )
            : (
              <Tooltip title="Like">
                <IconButton onClick={handleLike}>
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          <Typography
            color="textSecondary"
            variant="subtitle2"
          >
            {likes}
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            ml: 2
          }}
        >
          <UsersIcon fontSize="small" />
          <Typography
            color="textSecondary"
            sx={{ ml: 1 }}
            variant="subtitle2"
          >
            {project.membersCount}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Rating
          readOnly
          size="small"
          value={project.rating}
        />
      </Box>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCard;
