import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider } from '@material-ui/core';
import { getEmails } from '../../../slices/mail';
import { useDispatch, useSelector } from '../../../store';
import MailItem from './MailItem';
import MailListToolbar from './MailListToolbar';

const MailList = (props) => {
  const dispatch = useDispatch();
  const { customLabel, systemLabel } = useParams();
  const { emails } = useSelector((state) => state.mail);
  const [selectedEmails, setSelectedEmails] = useState([]);

  useEffect(() => {
    dispatch(getEmails({ customLabel, systemLabel }));
  }, [customLabel, systemLabel]);

  const handleSelectAllEmails = () => {
    setSelectedEmails(emails.allIds.map(((emailId) => emailId)));
  };

  const handleDeselectAllEmails = () => {
    setSelectedEmails([]);
  };

  const handleSelectOneEmail = (emailId) => {
    setSelectedEmails((prevSelectedMails) => {
      if (!prevSelectedMails.includes(emailId)) {
        return [...prevSelectedMails, emailId];
      }

      return prevSelectedMails;
    });
  };

  const handleDeselectOneEmail = (emailId) => {
    setSelectedEmails((prevSelectedMails) => prevSelectedMails.filter((id) => id !== emailId));
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        flexGrow: 1,
        overflow: 'hidden'
      }}
      {...props}
    >
      <MailListToolbar
        emails={emails.allIds.length}
        onDeselectAll={handleDeselectAllEmails}
        onSelectAll={handleSelectAllEmails}
        selectedEmails={selectedEmails.length}
      />
      <Divider />
      {emails.allIds.map((emailId) => (
        <MailItem
          email={emails.byId[emailId]}
          key={emailId}
          onDeselect={() => handleDeselectOneEmail(emailId)}
          onSelect={() => handleSelectOneEmail(emailId)}
          selected={selectedEmails.includes(emailId)}
        />
      ))}
    </Box>
  );
};

export default MailList;
