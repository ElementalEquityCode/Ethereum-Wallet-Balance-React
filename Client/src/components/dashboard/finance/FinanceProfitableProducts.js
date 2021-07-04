import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import CircularProgress from '../../CircularProgress';
import Scrollbar from '../../Scrollbar';
import PropTypes from 'prop-types';
import React from 'react';
import Change24Hours from './Change24Hours/Change24Hours';
import CoinLogo from './CoinLogo/CoinLogo';
import { v4 as uuidv4 } from 'uuid';

class FinanceProfitableProducts extends React.Component {
  getAddressString = (address) => (address !== '' ? `ERC-20 Token(s) for ${address}` : 'ERC-20 Token(s)');

  render() {
    const { address } = this.props;
    const { coins } = this.props;

    return (
      <Card {...this.props}>
        <CardHeader
          sx={{ wordBreak: 'break-all' }}
          title={this.getAddressString(address)}
        />
        <Scrollbar>
          <Box sx={{ minWidth: 700 }}>
            <Table>
              <TableBody>
                {coins.map((coin) => (
                  <TableRow
                    hover
                    key={uuidv4()}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          '& > img': {
                            flexShrink: 0,
                            height: 56,
                            width: 56
                          }
                        }}
                      >
                        <CoinLogo
                          src={coin.logo}
                          ticker={coin.ticker}
                        />
                        <Box sx={{ ml: 2 }}>
                          <Typography
                            color="textPrimary"
                            variant="subtitle2"
                          >
                            Balance
                          </Typography>
                          <Typography
                            color="textSecondary"
                            noWrap
                            variant="body2"
                          >
                            <Typography
                              color="success.main"
                              component="span"
                              variant="subtitle2"
                            >
                              {`${coin.coinBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                            </Typography>
                            {` ${coin.ticker}`}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        color="textPrimary"
                        variant="subtitle2"
                      >
                        Price Per Token
                      </Typography>
                      <Typography
                        color="textSecondary"
                        noWrap
                        variant="body2"
                      >
                        {`$${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        color="textPrimary"
                        variant="subtitle2"
                      >
                        Value
                      </Typography>
                      <Typography
                        color="textSecondary"
                        noWrap
                        variant="body2"
                      >
                        {`$${coin.usdBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        color="textPrimary"
                        variant="subtitle2"
                      >
                        24%
                      </Typography>
                      <Change24Hours
                        ticker={coin.ticker}
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'flex-end'
                        }}
                      >
                        <Box sx={{ mr: 2 }}>
                          <Typography
                            align="right"
                            color="textPrimary"
                            variant="subtitle2"
                          >
                            {`${coin.percentOfTotalPortfolio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`}
                          </Typography>
                          <Typography
                            sx={{ textAlign: 'right' }}
                            color="textSecondary"
                            variant="body2"
                          >
                            % of Wallet
                          </Typography>
                        </Box>
                        <CircularProgress value={coin.percentOfTotalPortfolio} />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
      </Card>
    );
  }
}

FinanceProfitableProducts.propTypes = {
  address: PropTypes.string,
  coins: PropTypes.array
};

export default FinanceProfitableProducts;
