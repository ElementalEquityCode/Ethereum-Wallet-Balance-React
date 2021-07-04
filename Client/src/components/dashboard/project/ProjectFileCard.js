import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import ArchiveIcon from '../../../icons/Archive';
import DocumentTextIcon from '../../../icons/DocumentText';
import DotsHorizontalIcon from '../../../icons/DotsHorizontal';
import DownloadIcon from '../../../icons/Download';
import PencilAltIcon from '../../../icons/PencilAlt';
import TrashIcon from '../../../icons/Trash';
import bytesToSize from '../../../utils/bytesToSize';

const ProjectFileCard = (props) => {
  const { mimeType, name, size, url, ...other } = props;
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <Card {...other}>
      {mimeType.includes('image/')
        ? (
          <CardMedia
            image={url}
            sx={{ height: 140 }}
          />
        )
        : (
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: blueGrey['50'],
              color: '#000000',
              display: 'flex',
              height: 140,
              justifyContent: 'center'
            }}
          >
            <DocumentTextIcon fontSize="large" />
          </Box>
        )}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Typography
            color="textPrimary"
            variant="subtitle2"
          >
            {name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {bytesToSize(size)}
          </Typography>
        </div>
        <div>
          <Tooltip title="More options">
            <IconButton
              edge="end"
              onClick={handleMenuOpen}
              ref={moreRef}
              size="small"
            >
              <DotsHorizontalIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          startIcon={<DownloadIcon fontSize="small" />}
          variant="text"
        >
          Download
        </Button>
      </CardActions>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}
        elevation={1}
        onClose={handleMenuClose}
        open={openMenu}
        PaperProps={{
          sx: {
            maxWidth: '100%',
            width: 250
          }
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}
      >
        <MenuItem divider>
          <ListItemIcon>
            <PencilAltIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Rename" />
        </MenuItem>
        <MenuItem divider>
          <ListItemIcon>
            <TrashIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ArchiveIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </MenuItem>
      </Menu>
    </Card>
  );
};

ProjectFileCard.propTypes = {
  mimeType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default ProjectFileCard;
