import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, ButtonBase, ListItem, Typography } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import LabelIcon from '@material-ui/icons/Label';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import ExclamationCircle from '../../../icons/ExclamationCircle';
import InboxIcon from '../../../icons/Inbox';
import MailIcon from '../../../icons/Mail';
import TrashIcon from '../../../icons/Trash';

const systemLabelIcons = {
  all: MailIcon,
  inbox: InboxIcon,
  trash: TrashIcon,
  drafts: DraftsIcon,
  spam: ExclamationCircle,
  sent: SendIcon,
  starred: StarIcon,
  important: LabelImportantIcon
};

const getIcon = (label) => {
  if (label.type === 'system_label') {
    return systemLabelIcons[label.id];
  }

  return LabelIcon;
};

const getTo = (label) => {
  const baseUrl = '/dashboard/mail';

  if (label.type === 'system_label') {
    return `${baseUrl}/${label.id}`;
  }

  if (label.type === 'custom_label') {
    return `${baseUrl}/label/${label.name}`;
  }

  return baseUrl;
};

const getColor = (label) => {
  if (label.type === 'custom_label') {
    return label.color;
  }

  return null;
};

const MailLabel = (props) => {
  const { label, ...other } = props;

  const Icon = getIcon(label);
  const to = getTo(label);
  const color = getColor(label);
  const displayUnreadCount = Boolean(label.unreadCount && label.unreadCount > 0);

  return (
    <ListItem
      disableGutters
      sx={{ py: 1 }}
      {...other}
    >
      <ButtonBase
        activeClassName="exactMatch"
        component={RouterLink}
        sx={{
          borderBottomRightRadius: '18px',
          borderTopRightRadius: '18px',
          color: 'text.secondary',
          flexGrow: 1,
          fontWeight: 'fontWeightRegular',
          height: '36px',
          paddingLeft: '32px',
          paddingRight: '18px',
          '&:hover': {
            backgroundColor: 'action.hover'
          },
          '&.exactMatch': {
            backgroundColor: 'action.selected',
            fontWeight: 'fontWeightMedium'
          }
        }}
        to={to}
      >
        <Box
          sx={{
            display: 'flex',
            mr: 1
          }}
        >
          <Icon
            color="inherit"
            style={{ color }}
          />
        </Box>
        <Typography
          sx={{
            flexGrow: 1,
            fontWeight: 'inherit'
          }}
          variant="body2"
        >
          {label.name}
        </Typography>
        {displayUnreadCount && (
          <Typography
            color="inherit"
            variant="caption"
          >
            {label.unreadCount}
          </Typography>
        )}
      </ButtonBase>
    </ListItem>
  );
};

MailLabel.propTypes = {
  label: PropTypes.object.isRequired
};

export default MailLabel;
