import { useState, useEffect } from "react";
import numeral from "numeral";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right";
import { Image as ImageIcon } from "../../../icons/image";
import { CircularProgress } from "../../circular-progress";
import { Scrollbar } from "../../scrollbar";
import { useTokens } from "../../../hooks/use-tokens";

export const AddressTokens = (props) => {
  const [didFetchMarketData, setFetchMarketData] = useState(false);
  const router = useRouter();
  const tokensContext = useTokens();

  let currentlyViewedAddress = null;

  if (tokensContext.addresses.length > 0) {
    for (let index = 0; index < tokensContext.addresses.length; index += 1) {
      if (tokensContext.addresses[index].address === router.query.address) {
        currentlyViewedAddress = tokensContext.addresses[index];
        break;
      }
    }
  }

  return (
    <Card {...props}>
      <CardHeader title="ERC-20 Tokens" />
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Ticker</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>24 Hour Change</TableCell>
              <TableCell align="right">% of Portfolio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentlyViewedAddress?.erc20Tokens.map((token) => (
              <TableRow hover key={token.uuid}>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      "& > img": {
                        flexShrink: 0,
                        height: 56,
                        width: 56,
                      },
                    }}
                  >
                    {token.logo ? (
                      <Box
                        sx={{
                          alignItems: "center",
                          backgroundColor: "background.default",
                          backgroundImage: `url(${token.image})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          borderRadius: 1,
                          display: "flex",
                          height: 80,
                          justifyContent: "center",
                          overflow: "hidden",
                          width: 80,
                        }}
                      >
                        <img src={token.logo} height="30" />
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          alignItems: "center",
                          backgroundColor: "background.default",
                          borderRadius: 1,
                          display: "flex",
                          height: 80,
                          justifyContent: "center",
                          width: 80,
                        }}
                      >
                        <ImageIcon fontSize="small" />
                      </Box>
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" noWrap variant="body2">
                    {token.ticker}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" noWrap variant="body2">
                    {numeral(token.coinBalance).format("0,0.00")}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" noWrap variant="body2">
                    {numeral(token.price).format("$0,0.00")}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" noWrap variant="body2">
                    {numeral(token.price).format("$0,0.00")}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" noWrap variant="body2">
                    <Chip
                      label={`${numeral(token.twentyFourHourChange).format(
                        "0,0.00"
                      )}%`}
                      color={
                        token.twentyFourHourChange > 0
                          ? "success"
                          : token.twentyFourHourChange === 0 ||
                            !token.twentyFourHourChange
                          ? "primary"
                          : "error"
                      }
                    />
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Typography align="right" variant="subtitle2">
                        {(token.percentOfTotalPortfolio * 100).toFixed(2)}%
                      </Typography>
                    </Box>
                    <CircularProgress
                      value={token.percentOfTotalPortfolio * 100}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};
