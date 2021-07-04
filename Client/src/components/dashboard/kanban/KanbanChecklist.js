import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Box, Button, LinearProgress, TextField, Typography } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import ClipboardListIcon from '../../../icons/ClipboardList';
import { deleteChecklist, updateChecklist } from '../../../slices/kanban';
import { useDispatch } from '../../../store';
import KanbanCheckItem from './KanbanCheckItem';
import KanbanCheckItemAdd from './KanbanCheckItemAdd';

const KanbanChecklistRoot = experimentalStyled('div')``;

const KanbanChecklist = (props) => {
  const { card, checklist, ...other } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState(checklist.name);
  const [editingName, setEditingName] = useState(false);
  const [editingCheckItem, setEditingCheckItem] = useState(null);

  const handleNameEdit = () => {
    setEditingName(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameSave = async () => {
    try {
      if (!name || name === checklist.name) {
        setEditingName(false);
        setName(checklist.name);
        return;
      }

      setEditingName(false);
      await dispatch(updateChecklist(card.id, checklist.id, { name }));
      toast.success('Checklist updated!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleNameCancel = () => {
    setEditingName(false);
    setName(checklist.name);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteChecklist(card.id, checklist.id));
      toast.success('Checklist deleted!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleCheckItemEditInit = (checkItemId) => {
    setEditingCheckItem(checkItemId);
  };

  const handleCheckItemEditCancel = () => {
    setEditingCheckItem(null);
  };

  const handleCheckItemEditComplete = () => {
    setEditingCheckItem(null);
  };

  const totalCheckItems = checklist.checkItems.length;
  const completedCheckItems = (checklist
    .checkItems
    .filter((checkItem) => checkItem.state === 'complete')).length;
  const completePercentage = totalCheckItems === 0
    ? 100
    : (completedCheckItems / totalCheckItems) * 100;

  return (
    <KanbanChecklistRoot {...other}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <Box sx={{ mr: 3 }}>
          <ClipboardListIcon fontSize="small" />
        </Box>
        {editingName
          ? (
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                onChange={handleNameChange}
                value={name}
                variant="outlined"
              />
              <Box sx={{ mt: 1 }}>
                <Button
                  color="primary"
                  onClick={handleNameSave}
                  size="small"
                  variant="contained"
                >
                  Save
                </Button>
                <Button
                  color="primary"
                  onClick={handleNameCancel}
                  size="small"
                  variant="text"
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          )
          : (
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1
              }}
            >
              <Typography
                color="textPrimary"
                onClick={handleNameEdit}
                variant="h6"
              >
                {checklist.name}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                color="primary"
                onClick={handleDelete}
                size="small"
                variant="text"
              >
                Delete
              </Button>
            </Box>
          )}
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          mt: 1
        }}
      >
        <Typography
          color="textSecondary"
          variant="caption"
        >
          {Math.round(completePercentage)}
          %
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            ml: 2
          }}
        >
          <LinearProgress
            color="primary"
            value={completePercentage}
            variant="determinate"
          />
        </Box>
      </Box>
      {checklist.checkItems.map((checkItem) => (
        <KanbanCheckItem
          cardId={card.id}
          checkItem={checkItem}
          checklistId={checklist.id}
          editing={editingCheckItem === checkItem.id}
          key={checkItem.id}
          onEditCancel={handleCheckItemEditCancel}
          onEditComplete={handleCheckItemEditComplete}
          onEditInit={() => handleCheckItemEditInit(checkItem.id)}
        />
      ))}
      <Box
        sx={{
          ml: 6,
          mt: 1
        }}
      >
        <KanbanCheckItemAdd
          cardId={card.id}
          checklistId={checklist.id}
        />
      </Box>
    </KanbanChecklistRoot>
  );
};

KanbanChecklist.propTypes = {
  card: PropTypes.object.isRequired,
  checklist: PropTypes.object.isRequired,
  sx: PropTypes.object
};

export default KanbanChecklist;
