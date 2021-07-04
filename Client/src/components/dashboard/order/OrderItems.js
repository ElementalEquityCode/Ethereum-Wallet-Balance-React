import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import Scrollbar from '../../Scrollbar';

const OrderItems = (props) => {
  const { orderItems, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader title="Order items" />
      <Divider />
      <Scrollbar>
        <Box sx={{ minWidth: 700 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Billing Cycle
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      {item.quantity}
                      {' '}
                      x
                      {' '}
                      {item.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {item.billingCycle}
                  </TableCell>
                  <TableCell>
                    {numeral(item.unitAmount)
                      .format(`${item.currency}0,0.00`)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={orderItems.length}
        onPageChange={() => { }}
        onRowsPerPageChange={() => { }}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

OrderItems.propTypes = {
  orderItems: PropTypes.array.isRequired
};

export default OrderItems;
