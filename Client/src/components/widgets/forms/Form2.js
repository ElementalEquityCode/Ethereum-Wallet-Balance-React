import { Box, Divider, Input, Button } from '@material-ui/core';
import SearchIcon from '../../../icons/Search';
import PropTypes from 'prop-types';
import styles from './Form2.module.css';

const Form2 = (props) => {
  const { onCompleteHandler } = props;
  const { onButtonClickedHandler } = props;
  const { onPasteHandler } = props;

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
            ml: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Input
            disableUnderline
            fullWidth
            placeholder="Enter an Ethereum Address"
            onKeyDown={(event) => {
              onCompleteHandler(event);
            }}
            onPaste={(event) => {
              onPasteHandler(event);
            }}
          />
          <Button
            variant="contained"
            className={styles.button}
            onClick={onButtonClickedHandler}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

Form2.propTypes = {
  onCompleteHandler: PropTypes.func,
  onButtonClickedHandler: PropTypes.func,
  onPasteHandler: PropTypes.func
};

export default Form2;
