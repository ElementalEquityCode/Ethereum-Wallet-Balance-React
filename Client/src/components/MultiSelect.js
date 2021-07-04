import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, Menu, MenuItem } from '@material-ui/core';
import ChevronDownIcon from '../icons/ChevronDown';

const MultiSelect = (props) => {
  const { label, onChange, options, value, ...other } = props;
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleOptionToggle = (event) => {
    let newValue = [...value];

    if (event.target.checked) {
      newValue.push(event.target.value);
    } else {
      newValue = newValue.filter((item) => item !== event.target.value);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ChevronDownIcon fontSize="small" />}
        onClick={handleMenuOpen}
        ref={anchorRef}
        variant="text"
        {...other}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        elevation={1}
        onClose={handleMenuClose}
        open={openMenu}
        PaperProps={{ style: { width: 250 } }}
      >
        {options.map((option) => (
          <MenuItem key={option}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={value.indexOf(option) > -1}
                  color="primary"
                  onChange={handleOptionToggle}
                  value={option}
                />
              )}
              label={option}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

MultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired
};

export default MultiSelect;
