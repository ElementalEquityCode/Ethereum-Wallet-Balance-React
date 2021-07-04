import createSvgIcon from '@material-ui/core/utils/createSvgIcon';

const Dot = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <circle
      cx="10"
      cy="10"
      r="3"
    />
  </svg>, 'Dot'
);

export default Dot;
