import { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';

const statusOptions = ['Canceled', 'Completed', 'Rejected'];

const OrderSummary = (props) => {
  const { order, ...other } = props;
  const [status, setStatus] = useState(statusOptions[0]);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Card {...other}>
      <CardHeader title="Order info" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Customer
              </Typography>
            </TableCell>
            <TableCell>
              <div>
                {order.customer.name}
              </div>
              <div>
                {order.customer.address1}
              </div>
              <div>
                {order.customer.city}
              </div>
              <div>
                {order.customer.country}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                ID
              </Typography>
            </TableCell>
            <TableCell>
              #
              {order.id}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Number
              </Typography>
            </TableCell>
            <TableCell>
              {order.number}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Date
              </Typography>
            </TableCell>
            <TableCell>
              {format(order.createdAt, 'dd/MM/yyyy HH:mm')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Promotion Code
              </Typography>
            </TableCell>
            <TableCell>
              {order.coupon ? order.coupon : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Total Amount
              </Typography>
            </TableCell>
            <TableCell>
              {numeral(order.totalAmount)
                .format(`${order.currency}0,0.00`)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                name="option"
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                value={status}
                variant="outlined"
              >
                {statusOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </TextField>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CardActions>
        <Button
          color="primary"
          startIcon={<ReceiptIcon fontSize="small" />}
          variant="text"
        >
          Resend Invoice
        </Button>
      </CardActions>
    </Card>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderSummary;
