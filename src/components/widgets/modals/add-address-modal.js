import { useRef, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import { Search as SearchIcon } from "../../../icons/search";
import { useTokens } from "../../../hooks/use-tokens";
import { X as XIcon } from "../../../icons/x";

export const AddAddressModal = (props) => {
  const { close } = props;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const tokensContext = useTokens();
  const containerRef = useRef(null);
  const textFieldRef = useRef(null);

  const verifyInput = (value) => {
    const addresses = tokensContext.addresses;
    let regex = /^0(x|X)([0-9a-fA-F]){40}$/;

    if (regex.test(value.trim())) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddAddress = () => {
    if (verifyInput(textFieldRef.current.value)) {
      const foundValues = tokensContext.addresses.find((address) => {
        return (
          textFieldRef.current.value.toLowerCase() ===
          address.address.toLowerCase()
        );
      });

      if (foundValues) {
        setErrorMessage("This address has already been added");
        setError(true);
      } else {
        setLoading(true);
        tokensContext.addEthereumAddress(
          textFieldRef.current.value,
          (error) => {
            if (error) {
              setErrorMessage("This address was not found");
              setError(true);
              setLoading(false);
            } else {
              setLoading(false);
              close();
            }
          }
        );
      }
    } else {
      setErrorMessage("Address must be an ethereum address");
      setError(true);
    }
  };

  return (
    <Modal open>
      <Box
        ref={containerRef}
        sx={{
          minHeight: "100%",
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={(event) => {
          if (event.target === containerRef.current) {
            close();
          }
        }}
      >
        <Paper sx={{ width: "50%" }} elevation={12}>
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton onClick={close}>
                <XIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <TextField
                autoFocus
                length="42"
                inputRef={textFieldRef}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                inputProps={{
                  maxLength: 42,
                }}
                placeholder="Search..."
                error={error}
                helperText={errorMessage}
                onKeyPress={(event) => {
                  if (event.code.toLowerCase() === "enter") {
                    handleAddAddress();
                  }
                }}
              />
              <Button
                size="large"
                sx={{ ml: 2 }}
                variant="contained"
                onClick={() => {
                  handleAddAddress();
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
          {isLoading ? (
            <Box
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : null}
        </Paper>
      </Box>
    </Modal>
  );
};

AddAddressModal.propTypes = {
  close: PropTypes.func.isRequired,
};
