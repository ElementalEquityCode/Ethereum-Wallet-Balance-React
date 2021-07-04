import { useState, useCallback, useEffect } from 'react';
import { format } from 'date-fns';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography
} from '@material-ui/core';
import { customerApi } from '../../../__fakeApi__/customerApi';
import useMounted from '../../../hooks/useMounted';
import MailIcon from '../../../icons/Mail';

const emailOptions = [
  'Resend last invoice',
  'Send password reset',
  'Send verification'
];

const CustomerEmailsSummary = (props) => {
  const mounted = useMounted();
  const [emailOption, setEmailOption] = useState(emailOptions[0]);
  const [emails, setEmails] = useState([]);

  const getEmails = useCallback(async () => {
    try {
      const data = await customerApi.getCustomerEmails();

      if (mounted.current) {
        setEmails(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <Card {...props}>
      <CardHeader title="Emails" />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          name="option"
          onChange={(event) => setEmailOption(event.target.value)}
          select
          SelectProps={{ native: true }}
          value={emailOption}
          variant="outlined"
        >
          {emailOptions.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </TextField>
        <Box sx={{ mt: 2 }}>
          <Button
            color="primary"
            startIcon={<MailIcon fontSize="small" />}
            variant="contained"
          >
            Send email
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Table>
            <TableBody>
              {emails.map((email) => (
                <TableRow key={email.id}>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      {email.description}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {format(email.createdAt, 'dd/MM/yyyy | HH:mm')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomerEmailsSummary;
