import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const KanbanCardAction = (props) => {
  const { icon, children, ...other } = props;

  return (
    <Button
      color="primary"
      fullWidth
      startIcon={icon}
      sx={{
        justifyContent: 'flex-start',
        '& + &': {
          mt: 2
        }
      }}
      variant="contained"
      {...other}
    >
      {children}
    </Button>
  );
};

KanbanCardAction.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.node
};

export default KanbanCardAction;
