import { useNavigate, useParams } from 'react-router-dom';
import { Box, IconButton, InputAdornment, TextField, Tooltip } from '@material-ui/core';
import ArrowLeftIcon from '../../../icons/ArrowLeft';
import SearchIcon from '../../../icons/Search';
import ChevronLeftIcon from '../../../icons/ChevronLeft';
import ChevronRightIcon from '../../../icons/ChevronRight';

const MailToolbar = (props) => {
  const navigate = useNavigate();
  const { systemLabel, customLabel } = useParams();

  const handleBack = () => {
    if (systemLabel) {
      return navigate(`/dashboard/mail/${systemLabel}`);
    }

    if (customLabel) {
      return navigate(`/dashboard/mail/label/${customLabel}`);
    }

    return navigate('/dashboard/mail/inbox');
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexShrink: 0,
        height: 68,
        p: 2
      }}
      {...props}
    >
      <Tooltip title="Back">
        <IconButton onClick={handleBack}>
          <ArrowLeftIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: {
            md: 'block',
            xs: 'none'
          },
          width: 200
        }}
      >
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            )
          }}
          placeholder="Search message"
          size="small"
          variant="outlined"
        />
      </Box>
      <Tooltip title="Previous email">
        <IconButton>
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Next email">
        <IconButton>
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default MailToolbar;
