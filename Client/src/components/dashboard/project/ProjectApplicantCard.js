import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  Typography
} from '@material-ui/core';

const ProjectApplicantCard = (props) => {
  const { avatar, cover, name, skills, ...other } = props;

  return (
    <Card {...other}>
      <CardMedia
        image={cover}
        sx={{ height: 200 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            mt: '-50px'
          }}
        >
          <Avatar
            alt="Applicant"
            component={RouterLink}
            src={avatar}
            sx={{
              border: '3px solid #FFFFFF',
              height: 100,
              width: 100
            }}
            to="#"
          />
        </Box>
        <Link
          align="center"
          color="textPrimary"
          component={RouterLink}
          display="block"
          to="#"
          underline="none"
          variant="h6"
        >
          {name}
        </Link>
        <Typography
          align="center"
          variant="body2"
          color="textSecondary"
        >
          {6}
          {' '}
          contacts in common
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ m: -0.5 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{ m: 0.5 }}
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

ProjectApplicantCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProjectApplicantCard;
