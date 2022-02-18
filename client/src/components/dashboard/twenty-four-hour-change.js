import { useState, useEffect } from "react";
import numeral from "numeral";
import { Chip, Typography } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";

export const TwentyFourHourChange = (props) => {
  const [didFetchMarketData, setFetchMarketData] = useState(false);
  const { erc20Token } = props;

  const source = axios.CancelToken.source();

  useEffect(() => {
    erc20Token.fetch24HourChangeData(() => {
      if (!source.token.reason) {
        setFetchMarketData(true);
      }
    }, source);
    return () => {
      source.cancel("Cancelled because unmounting component.");
    };
  }, [didFetchMarketData]);

  return (
    <Chip
      label={`${numeral(erc20Token.twentyFourHourChange).format("0,0.00")}%`}
      color={
        erc20Token.twentyFourHourChange > 0
          ? "success"
          : erc20Token.twentyFourHourChange === 0 ||
            !erc20Token.twentyFourHourChange
          ? "primary"
          : "error"
      }
    />
  );
};

TwentyFourHourChange.propTypes = {
  erc20Token: PropTypes.object.isRequired,
};
