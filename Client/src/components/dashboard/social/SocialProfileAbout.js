import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import AcademicCapIcon from '../../../icons/AcademicCap';
import BriefcaseIcon from '../../../icons/Briefcase';
import HomeIcon from '../../../icons/Home';
import MailIcon from '../../../icons/Mail';

const SocialProfileAbout = (props) => {
  const {
    currentCity,
    currentJobCompany,
    currentJobTitle,
    email,
    originCity,
    previousJobCompany,
    previousJobTitle,
    profileProgress,
    quote,
    ...other
  } = props;

  return (
    <div {...other}>
      <Card>
        <CardHeader title="Profile Progress" />
        <Divider />
        <CardContent>
          <LinearProgress
            value={profileProgress}
            variant="determinate"
          />
          <Box sx={{ mt: 2 }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              50% Set Up Complete
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardHeader title="About" />
          <Divider />
          <CardContent>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              &quot;
              {quote}
              &quot;
            </Typography>
            <List>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar>
                  <BriefcaseIcon fontFamily="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      {currentJobTitle}
                      {' '}
                      at
                      {' '}
                      <Link
                        color="textPrimary"
                        href="#"
                        variant="subtitle2"
                      >
                        {currentJobCompany}
                      </Link>
                    </Typography>
                  )}
                  secondary={(
                    <Typography
                      color="textSecondary"
                      variant="caption"
                    >
                      Past:
                      {previousJobTitle}
                      {' '}
                      <Link
                        color="textSecondary"
                        href="#"
                        variant="caption"
                      >
                        {previousJobCompany}
                      </Link>
                    </Typography>
                  )}
                />
              </ListItem>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar>
                  <AcademicCapIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={(
                    <Link
                      color="textSecondary"
                      sx={{ cursor: 'pointer' }}
                      variant="body2"
                    >
                      Add school or collage
                    </Link>
                  )}
                />
              </ListItem>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar>
                  <HomeIcon fontFamily="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      Lives in
                      {' '}
                      <Link
                        color="textPrimary"
                        href="#"
                        variant="subtitle2"
                      >
                        {currentCity}
                      </Link>
                    </Typography>
                  )}
                  secondary={(
                    <Typography
                      color="textSecondary"
                      variant="caption"
                    >
                      Originally from
                      {' '}
                      <Link
                        color="textSecondary"
                        href="#"
                        variant="caption"
                      >
                        {originCity}
                      </Link>
                    </Typography>
                  )}
                />
              </ListItem>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar>
                  <MailIcon fontFamily="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={(
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      {email}
                    </Typography>
                  )}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

SocialProfileAbout.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentJobCompany: PropTypes.string.isRequired,
  currentJobTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  originCity: PropTypes.string.isRequired,
  previousJobCompany: PropTypes.string.isRequired,
  previousJobTitle: PropTypes.string.isRequired,
  profileProgress: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired
};

export default SocialProfileAbout;
