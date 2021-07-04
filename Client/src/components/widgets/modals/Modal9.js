import { Avatar, Box, Button, Container, Paper, Typography } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/WarningOutlined';
import PropTypes from 'prop-types';

const Modal9 = (props) => {
  const { title } = props;
  const { message } = props;
  const { onButtonClick } = props;

  return (
    <Box
      sx={{
        minHeight: '100%',
        p: 3,
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 2,
        width: '100%',
        margin: '0 auto',
        left: 0,
        right: 0,
        marginTop: '-45px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={12}
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.error.main, 0.08),
              color: 'error.main',
              mb: 2
            }}
          >
            <WarningIcon />
          </Avatar>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            {title}
          </Typography>
          <Typography
            align="center"
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="body2"
          >
            {message}
          </Typography>
          <Button
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 4 }}
            variant="contained"
            onClick={onButtonClick}
          >
            Close
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

Modal9.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default Modal9;
