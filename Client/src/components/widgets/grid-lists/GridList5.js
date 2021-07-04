import { subHours, formatDistanceToNowStrict } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClockIcon from '../../../icons/Clock';
import ShareIcon from '../../../icons/Share';

const now = new Date();

const posts = [
  {
    id: '5e887faca2b7a1ddce01221a',
    author: {
      id: '5e86809283e28b96d2d38537',
      avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
      name: 'Jane Rotanson'
    },
    createdAt: subHours(now, 4).getTime(),
    likes: 24,
    media: '/static/mock-images/posts/post_1.png',
    message: 'Hey guys! What\'s your favorite framework?'
  },
  {
    id: '5e887faf03e78a5359765636',
    author: {
      id: '5e86809283e28b96d2d38537',
      avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
      name: 'Jane Rotanson'
    },
    createdAt: subHours(now, 7).getTime(),
    likes: 65,
    media: '/static/mock-images/posts/post_2.jpg',
    message: 'Just made this overview screen for a project, what-cha thinkin?'
  }
];

const GridList5 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Grid
      container
      spacing={3}
    >
      {posts.map((post) => (
        <Grid
          item
          key={post.id}
          md={6}
          xs={12}
        >
          <Card>
            <CardHeader
              avatar={(
                <Avatar src={post.author.avatar} />
              )}
              disableTypography
              subheader={(
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    mt: 1
                  }}
                >
                  <ClockIcon
                    fontSize="small"
                    sx={{ color: 'text.secondary' }}
                  />
                  <Typography
                    color="textSecondary"
                    sx={{ ml: '6px' }}
                    variant="caption"
                  >
                    {formatDistanceToNowStrict(post.createdAt)}
                    {' '}
                    ago
                  </Typography>
                </Box>
              )}
              title={(
                <Link
                  color="textPrimary"
                  variant="subtitle2"
                >
                  {post.author.name}
                </Link>
              )}
            />
            <Box
              sx={{
                pb: 2,
                px: 3
              }}
            >
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {post.message}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <CardActionArea>
                  <CardMedia
                    image={post.media}
                    sx={{
                      backgroundPosition: 'top',
                      height: 350
                    }}
                  />
                </CardActionArea>
              </Box>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  mt: 2
                }}
              >
                <Tooltip title="Unlike">
                  <IconButton sx={{ color: red['600'] }}>
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  {post.likes}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton>
                  <ShareIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default GridList5;
