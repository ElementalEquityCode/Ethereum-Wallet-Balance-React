import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Avatar, Box, TextField } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import { addComment } from '../../../slices/kanban';
import { useDispatch } from '../../../store';

const KanbanCommentAdd = (props) => {
  const { cardId, ...other } = props;
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyUp = async (event) => {
    try {
      if (event.code === 'ENTER' && message) {
        await dispatch(addComment(cardId, message));
        setMessage('');
        toast.success('Comment added!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex'
      }}
      {...other}
    >
      <Avatar
        src={user.avatar}
        sx={{ mr: 2 }}
      />
      <TextField
        fullWidth
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Write a comment..."
        size="small"
        value={message}
        variant="outlined"
      />
    </Box>
  );
};

KanbanCommentAdd.propTypes = {
  cardId: PropTypes.string.isRequired
};

export default KanbanCommentAdd;
