import { useState } from 'react';
import { Box, Button, FormHelperText } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import useMounted from '../../../hooks/useMounted';

const RegisterAuth0 = (props) => {
  const mounted = useMounted();
  const { loginWithPopup } = useAuth();
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      await loginWithPopup();
    } catch (err) {
      console.error(err);
      if (mounted.current) {
        setError(err.message);
      }
    }
  };

  return (
    <div {...props}>
      {error && (
        <Box sx={{ my: 3 }}>
          <FormHelperText error>
            {error}
          </FormHelperText>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          color="primary"
          onClick={handleRegister}
          variant="contained"
        >
          Register
        </Button>
      </Box>
    </div>
  );
};

export default RegisterAuth0;
