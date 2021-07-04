import { Box, Divider, Input } from '@material-ui/core';
import SearchIcon from '../../../icons/Search';
import PropTypes from 'prop-types';

const Form2 = (props) => {
  const { onCompleteHandler } = props;

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderRadius: '16px',
        p: 3
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 2
        }}
      >
        <SearchIcon fontSize="small" />
        <Box
          sx={{
            flexGrow: 1,
            ml: 3
          }}
        >
          <Input
            disableUnderline
            fullWidth
            placeholder="Enter an Ethereum Address"
            onKeyDown={(event) => {
              onCompleteHandler(event);
            }}
          />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

Form2.propTypes = {
  onCompleteHandler: PropTypes.func
};

export default Form2;
