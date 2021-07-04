import { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { format } from 'date-fns';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core';
import { customerApi } from '../../../__fakeApi__/customerApi';
import useMounted from '../../../hooks/useMounted';
import ArrowRightIcon from '../../../icons/ArrowRight';
import Label from '../../Label';
import MoreMenu from '../../MoreMenu';
import Scrollbar from '../../Scrollbar';

const CustomerInvoices = (props) => {
  const mounted = useMounted();
  const [invoices, setInvoices] = useState([]);

  const getInvoices = useCallback(async () => {
    try {
      const data = await customerApi.getCustomerInvoices();

      if (mounted.current) {
        setInvoices(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getInvoices();
  }, []);

  return (
    <Card {...props}>
      <CardHeader
        action={<MoreMenu />}
        title="Invoices"
      />
      <Divider />
      <Scrollbar>
        <Box sx={{ minWidth: 1150 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Payment Method
                </TableCell>
                <TableCell>
                  Total
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>
                    #
                    {invoice.id}
                  </TableCell>
                  <TableCell>
                    {format(invoice.issueDate, 'dd/MM/yyyy | HH:mm')}
                  </TableCell>
                  <TableCell>
                    {invoice.description}
                  </TableCell>
                  <TableCell>
                    {invoice.paymentMethod}
                  </TableCell>
                  <TableCell>
                    {invoice.currency}
                    {invoice.value}
                  </TableCell>
                  <TableCell>
                    <Label color="primary">
                      {invoice.status}
                    </Label>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      component={RouterLink}
                      to="/dashboard/invoices/1"
                    >
                      <ArrowRightIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={invoices.length}
        onPageChange={() => {
        }}
        onRowsPerPageChange={() => {
        }}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default CustomerInvoices;
