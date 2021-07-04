import PropTypes from 'prop-types';
import { experimentalStyled } from '@material-ui/core/styles';

const sizes = {
  small: 8,
  medium: 16,
  large: 23
};

const colors = {
  offline: '#fafafa',
  away: '#fb8c00',
  busy: '#e53935',
  online: '#43a047'
};

const StatusIndicatorRoot = experimentalStyled('span')((({ styleProps }) => {
  const size = sizes[styleProps.size];
  const color = colors[styleProps.status];

  return {
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
    flexGrow: 0,
    flexShrink: 0,
    height: size,
    width: size
  };
}));

const StatusIndicator = (props) => {
  const { size, status, ...other } = props;

  const styleProps = { size, status };

  return (
    <StatusIndicatorRoot
      styleProps={styleProps}
      {...other}
    />
  );
};

StatusIndicator.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  status: PropTypes.oneOf(['online', 'offline', 'away', 'busy'])
};

StatusIndicator.defaultProps = {
  size: 'medium',
  status: 'offline'
};

export default StatusIndicator;
