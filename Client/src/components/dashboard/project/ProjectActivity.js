import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import { Avatar, Card, Link, Typography } from '@material-ui/core';
import CurrencyDollarIcon from '../../../icons/CurrencyDollar';
import DownloadIcon from '../../../icons/Download';
import TemplateIcon from '../../../icons/Template';
import UserAddIcon from '../../../icons/UserAdd';

const avatarsMap = {
  upload_file: DownloadIcon,
  join_team: UserAddIcon,
  price_change: CurrencyDollarIcon,
  contest_created: TemplateIcon
};

const ProjectActivity = (props) => {
  const { createdAt, description, subject, type, ...other } = props;

  const Icon = avatarsMap[type];

  return (
    <Card
      sx={{
        alignItems: 'center',
        display: 'flex',
        p: 2,
        '& + &': {
          mt: 2
        }
      }}
      {...other}
    >
      <Avatar
        sx={{
          backgroundColor: 'primary.main',
          color: 'common.white'
        }}
      >
        <Icon fontSize="small" />
      </Avatar>
      <Typography
        color="textPrimary"
        sx={{ ml: 2 }}
        variant="body2"
      >
        <Link
          color="textPrimary"
          component={RouterLink}
          to="#"
          variant="subtitle2"
        >
          {subject}
        </Link>
        {' '}
        {description}
      </Typography>
      <Typography
        color="textPrimary"
        sx={{ ml: 'auto' }}
        variant="caption"
      >
        {formatDistanceToNowStrict(createdAt)}
        {' '}
        ago
      </Typography>
    </Card>
  );
};

ProjectActivity.propTypes = {
  createdAt: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default ProjectActivity;
