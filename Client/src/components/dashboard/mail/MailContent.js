import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Markdown from 'react-markdown/with-html';
import { Avatar, Box, Divider, IconButton, Link, Tooltip, Typography } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import ReplyIcon from '@material-ui/icons/Reply';
import DotsHorizontalIcon from '../../../icons/DotsHorizontal';
import TrashIcon from '../../../icons/Trash';
import { getEmail } from '../../../slices/mail';
import { useDispatch, useSelector } from '../../../store';
import getInitials from '../../../utils/getInitials';
import MailReply from './MailReply';
import MailToolbar from './MailToolbar';

const MarkdownWrapper = experimentalStyled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.body1.fontFamily,
  '& > p': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(2)
  }
}));

const MailContent = () => {
  const dispatch = useDispatch();
  const { emailId } = useParams();
  const email = useSelector((state) => state.mail.emails.byId[emailId]);

  useEffect(() => {
    dispatch(getEmail(emailId));
  }, [emailId]);

  if (!email) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%',
        overflowY: 'auto'
      }}
    >
      <MailToolbar />
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexShrink: 0,
          justifyContent: 'space-between',
          p: 3
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Avatar
            src={email.from.avatar}
            sx={{
              height: 48,
              width: 48
            }}
          >
            {getInitials(email.from.name)}
          </Avatar>
          <Box sx={{ ml: 2 }}>
            <Typography
              color="textPrimary"
              display="inline"
              variant="subtitle2"
            >
              {email.from.name}
            </Typography>
            {' '}
            <Link
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {email.from.email}
            </Link>
            <Typography
              variant="subtitle2"
              color="textSecondary"
            >
              To:
              {' '}
              {email.to.map((person) => (
                <Link
                  color="inherit"
                  key={person.email}
                >
                  {person.email}
                </Link>
              ))}
            </Typography>
            <Typography
              color="textSecondary"
              noWrap
              variant="caption"
            >
              {format(email.createdAt, 'MMMM Do yyyy, h:mm:ss a')}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              xs: 'none',
              sm: 'flex'
            }
          }}
        >
          <Tooltip title="Reply">
            <IconButton>
              <ReplyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reply all">
            <IconButton>
              <ReplyAllIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <TrashIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip title="More options">
          <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <Box
        sx={{
          backgroundColor: 'background.default',
          flexGrow: 1,
          px: 3,
          py: 6
        }}
      >
        <Typography
          variant="h3"
          color="textPrimary"
        >
          {email.subject}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <MarkdownWrapper>
            <Markdown source={email.message} />
          </MarkdownWrapper>
        </Box>
      </Box>
      <Divider />
      <MailReply />
    </Box>
  );
};

export default MailContent;
