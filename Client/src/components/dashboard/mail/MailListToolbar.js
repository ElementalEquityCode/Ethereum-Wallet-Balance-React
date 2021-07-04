import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography
} from '@material-ui/core';
import ChevronLeftIcon from '../../../icons/ChevronLeft';
import ChevronRightIcon from '../../../icons/ChevronRight';
import DotsHorizontalIcon from '../../../icons/DotsHorizontal';
import MenuIcon from '../../../icons/Menu';
import RefreshIcon from '../../../icons/Refresh';
import SearchIcon from '../../../icons/Search';
import { openSidebar } from '../../../slices/mail';
import { useDispatch } from '../../../store';

const MailListToolbar = (props) => {
  const { emails, onDeselectAll, onSelectAll, selectedEmails, ...other } = props;
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;

    if (checked && onSelectAll) {
      onSelectAll();
    }

    if (!checked && onDeselectAll) {
      onDeselectAll();
    }
  };

  const selectedAllMails = selectedEmails === emails && emails > 0;
  const selectedSomeMails = selectedEmails > 0 && selectedEmails < emails;

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.paper',
        display: 'flex',
        height: '68px',
        p: 2
      }}
      {...other}
    >
      <IconButton
        onClick={handleOpenSidebar}
        sx={{
          display: {
            md: 'none'
          }
        }}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
      <Box
        sx={{
          alignItems: 'center',
          display: {
            xs: 'none',
            md: 'flex'
          }
        }}
      >
        <Checkbox
          checked={selectedAllMails}
          color="primary"
          indeterminate={selectedSomeMails}
          onChange={handleCheckboxChange}
        />
        <Typography
          color="textPrimary"
          variant="subtitle2"
        >
          Select all
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          alignItems: 'center',
          display: {
            sm: 'flex',
            xs: 'none'
          }
        }}
      >
        <Box sx={{ width: 200 }}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              )
            }}
            placeholder="Search email"
            size="small"
            variant="outlined"
          />
        </Box>
        <Tooltip title="Refresh">
          <IconButton>
            <RefreshIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="More options">
          <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next page">
          <IconButton>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        {emails > 0 && (
          <>
            <Typography
              color="textSecondary"
              noWrap
              variant="body2"
            >
              1 -
              {' '}
              {emails}
              {' '}
              of
              {' '}
              {emails}
            </Typography>
            <Tooltip title="Previous page">
              <IconButton>
                <ChevronRightIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Box>
    </Box>
  );
};

MailListToolbar.propTypes = {
  emails: PropTypes.number.isRequired,
  onDeselectAll: PropTypes.func,
  onSelectAll: PropTypes.func,
  selectedEmails: PropTypes.number.isRequired
};

export default MailListToolbar;
