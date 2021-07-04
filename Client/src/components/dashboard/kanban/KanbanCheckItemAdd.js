import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Box, Button, TextField } from '@material-ui/core';
import { addCheckItem } from '../../../slices/kanban';
import { useDispatch } from '../../../store';

const KanbanCheckItemAdd = (props) => {
  const { cardId, checklistId, ...other } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAdd = () => {
    setIsExpanded(true);
  };

  const handleCancel = () => {
    setIsExpanded(false);
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = async () => {
    try {
      if (!name) {
        return;
      }

      await dispatch(addCheckItem(cardId, checklistId, name));
      setIsExpanded(false);
      setName('');
      toast.success('Check item added!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div {...other}>
      {isExpanded
        ? (
          <div>
            <TextField
              fullWidth
              onChange={handleChange}
              placeholder="Add an item"
              value={name}
              variant="outlined"
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: 2
              }}
            >
              <Button
                color="primary"
                onClick={handleCancel}
                size="small"
                variant="text"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={handleSave}
                size="small"
                sx={{ ml: 2 }}
                variant="contained"
              >
                Save
              </Button>
            </Box>
          </div>
        )
        : (
          <Button
            color="primary"
            onClick={handleAdd}
            size="small"
            variant="outlined"
          >
            Add Item
          </Button>
        )}
    </div>
  );
};

KanbanCheckItemAdd.propTypes = {
  cardId: PropTypes.string.isRequired,
  checklistId: PropTypes.string.isRequired
};

export default KanbanCheckItemAdd;
