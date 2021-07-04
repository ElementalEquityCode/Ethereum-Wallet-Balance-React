import { Link as RouterLink, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Avatar, Box, Checkbox, IconButton, Tooltip, Typography } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useSelector } from '../../../store';
import getInitials from '../../../utils/getInitials';

const Label = experimentalStyled('span')(({ theme }) => ({
  borderRadius: 2,
  color: theme.palette.common.white,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(12),
  marginLeft: theme.spacing(1),
  paddingBottom: 2,
  paddingLeft: 4,
  paddingRight: 4,
  paddingTop: 2
}));

const getTo = (params, emailId) => {
  const { systemLabel, customLabel } = params;
  const baseUrl = '/dashboard/mail';

  if (systemLabel) {
    return `${baseUrl}/${systemLabel}/${emailId}`;
  }

  if (customLabel) {
    return `${baseUrl}/label/${customLabel}/${emailId}`;
  }

  return baseUrl;
};

const MailItem = (props) => {
  const { email, onDeselect, onSelect, selected, ...other } = props;
  const params = useParams();
  const { labels } = useSelector((state) => state.mail);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;

    if (checked && onSelect) {
      onSelect();
    }

    if (!checked && onDeselect) {
      onDeselect();
    }
  };

  const handleStarToggle = () => {
    // dispatch action
  };

  const handleImportantToggle = () => {
    // dispatch action
  };

  const to = getTo(params, email.id);

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.paper',
        borderBottom: (theme) => ` 1px solid ${theme.palette.divider}`,
        display: 'flex',
        p: 2,
        ...(!email.isUnread && {
          position: 'relative',
          '&:before': {
            backgroundColor: 'error.main',
            content: '" "',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 4
          },
          '& $name, & $subject': {
            fontWeight: 600
          }
        }),
        ...(selected && {
          backgroundColor: 'action.selected'
        }),
        '&:hover': {
          backgroundColor: 'action.hover'
        }
      }}
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: {
            md: 'flex',
            xs: 'none'
          },
          mr: 1
        }}
      >
        <Checkbox
          checked={selected}
          color="primary"
          onChange={handleCheckboxChange}
        />
        <Tooltip title="Starred">
          <IconButton onClick={handleStarToggle}>
            {email.isStarred
              ? (
                <StarIcon
                  fontSize="small"
                  sx={{ color: amber[400] }}
                />
              )
              : (
                <StarBorderIcon fontSize="small" />
              )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Important">
          <IconButton onClick={handleImportantToggle}>
            {email.isImportant
              ? (
                <LabelImportantIcon
                  fontSize="small"
                  sx={{ color: amber[400] }}
                />
              )
              : <LabelImportantIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        component={RouterLink}
        to={to}
        sx={{
          cursor: 'pointer',
          display: 'flex',
          flexGrow: 1,
          minWidth: '1px',
          textDecoration: 'none'
        }}
      >
        <Avatar src={email.from.avatar}>
          {getInitials(email.from.name)}
        </Avatar>
        <Box
          sx={{
            alignItems: {
              md: 'center'
            },
            display: {
              md: 'flex'
            },
            flexGrow: {
              md: 1
            },
            minWidth: '1px',
            ml: 1
          }}
        >
          <Typography
            color="textPrimary"
            sx={{
              flexBasis: {
                md: 180
              },
              minWidth: {
                md: 180
              },
              ...(!email.isUnread && {
                fontWeight: 600
              })
            }}
            variant="body2"
          >
            {email.from.name}
          </Typography>
          <Typography
            color="textSecondary"
            sx={{
              maxWidth: 400,
              mr: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              ...(!email.isUnread && {
                fontWeight: 600
              })
            }}
            variant="body2"
          >
            {email.subject}
          </Typography>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block'
              }
            }}
          >
            <Typography
              color="textSecondary"
              sx={{
                flexGrow: 1,
                marginRight: 'auto',
                maxWidth: 800,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
              variant="body2"
            >
              -
              {email.message}
            </Typography>
            {email.labelIds.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  mx: 2
                }}
              >
                {email.labelIds.map((labelId) => {
                  const label = labels.find((_label) => _label.id === labelId);

                  if (!label) {
                    return null;
                  }

                  return (
                    <Label
                      key={label.id}
                      sx={{ backgroundColor: label.color }}
                    >
                      {label.name}
                    </Label>
                  );
                })}
              </Box>
            )}
          </Box>
          <Typography
            color="textSecondary"
            noWrap
            variant="caption"
          >
            {format(email.createdAt, 'dd MMM yyyy')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

MailItem.propTypes = {
  email: PropTypes.object.isRequired,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool.isRequired
};

export default MailItem;
