import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Box, Button, Divider, Drawer, List } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useDispatch, useSelector } from '../../../store';
import { closeSidebar, openCompose } from '../../../slices/mail';
import MailLabel from './MailLabel';

const MailSidebarDesktop = experimentalStyled(Drawer)({
  width: 280,
  '& .MuiDrawer-paper': {
    position: 'relative'
  }
});

const MailSidebarMobile = experimentalStyled(Drawer)({
  '& .MuiBackdrop-root': {
    position: 'absolute'
  },
  '& .MuiDrawer-paper': {
    position: 'relative',
    width: 280
  }
});

const MailSidebar = ({ containerRef }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { labels, isSidebarOpen } = useSelector((state) => state.mail);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  useEffect(() => {
    if (isSidebarOpen) {
      dispatch(closeSidebar());
    }
  }, [location.pathname]);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const handleComposeClick = () => {
    dispatch(openCompose());
  };

  const content = (
    <div>
      <Box
        sx={{
          px: 3,
          py: 2
        }}
      >
        <Button
          color="primary"
          fullWidth
          onClick={handleComposeClick}
          variant="contained"
        >
          Compose
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          py: 2,
          pr: 2
        }}
      >
        <List>
          {labels.map((label) => (
            <MailLabel
              key={label.id}
              label={label}
            />
          ))}
        </List>
      </Box>
    </div>
  );

  if (mdUp) {
    return (
      <MailSidebarDesktop variant="permanent">
        {content}
      </MailSidebarDesktop>
    );
  }

  return (
    <MailSidebarMobile
      ModalProps={{ container: () => containerRef.current }}
      onClose={handleCloseSidebar}
      open={isSidebarOpen}
      variant="temporary"
    >
      {content}
    </MailSidebarMobile>
  );
};

MailSidebar.propTypes = {
  containerRef: PropTypes.any.isRequired
};

export default MailSidebar;
