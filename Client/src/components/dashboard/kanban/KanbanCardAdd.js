import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Box, Button, TextField } from '@material-ui/core';
import { createCard } from '../../../slices/kanban';
import { useDispatch } from '../../../store';

const KanbanCardAdd = (props) => {
  const { columnId, ...other } = props;
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAddInit = () => {
    setIsExpanded(true);
  };

  const handleAddCancel = () => {
    setIsExpanded(false);
    setName('');
  };

  const handleAddConfirm = async () => {
    try {
      await dispatch(createCard(columnId, name || 'Untitled Card'));
      setIsExpanded(false);
      setName('');
      toast.success('Card created!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div {...other}>
      {isExpanded
        ? (
          <>
            <TextField
              fullWidth
              label="Title"
              name="cardName"
              onChange={handleChange}
              value={name}
              variant="outlined"
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2
              }}
            >
              <Button
                color="primary"
                onClick={handleAddCancel}
                variant="text"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={handleAddConfirm}
                variant="contained"
              >
                Add
              </Button>
            </Box>
          </>
        )
        : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button
              color="primary"
              onClick={handleAddInit}
              variant="text"
            >
              Add Card
            </Button>
          </Box>
        )}
    </div>
  );
};

KanbanCardAdd.propTypes = {
  columnId: PropTypes.string.isRequired
};

export default KanbanCardAdd;
