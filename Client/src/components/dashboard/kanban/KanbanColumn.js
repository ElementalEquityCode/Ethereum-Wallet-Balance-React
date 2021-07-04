import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import DotsHorizontalIcon from '../../../icons/DotsHorizontal';
import { clearColumn, deleteColumn, updateColumn } from '../../../slices/kanban';
import { useDispatch, useSelector } from '../../../store';
import KanbanCard from './KanbanCard';
import KanbanCardAdd from './KanbanCardAdd';

const columnSelector = (state, columnId) => {
  const { columns } = state.kanban;

  return columns.byId[columnId];
};

const KanbanColumn = (props) => {
  const { columnId, ...other } = props;
  const dispatch = useDispatch();
  const moreRef = useRef(null);
  const column = useSelector((state) => columnSelector(state, columnId));
  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState(column.name);
  const [isRenaming, setIsRenaming] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleRenameInit = () => {
    setIsRenaming(true);
    setOpenMenu(false);
  };

  const handleRename = async () => {
    try {
      if (!name) {
        setName(column.name);
        setIsRenaming(false);
        return;
      }

      const update = { name };

      setIsRenaming(false);
      await dispatch(updateColumn(column.id, update));
      toast.success('Column updated!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleDelete = async () => {
    try {
      setOpenMenu(false);
      await dispatch(deleteColumn(column.id));
      toast.success('Column deleted!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleClear = async () => {
    try {
      setOpenMenu(false);
      await dispatch(clearColumn(column.id));
      toast.success('Column cleared!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div {...other}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
          mx: 1,
          overflowX: 'hidden',
          overflowY: 'hidden',
          width: {
            xs: 300,
            sm: 380
          }
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            px: 2,
            py: 1
          }}
        >
          {isRenaming
            ? (
              <ClickAwayListener onClickAway={handleRename}>
                <TextField
                  margin="dense"
                  onBlur={handleRename}
                  onChange={handleChange}
                  value={name}
                  variant="outlined"
                />
              </ClickAwayListener>
            )
            : (
              <Typography
                color="inherit"
                onClick={handleRenameInit}
                variant="h6"
              >
                {column.name}
              </Typography>
            )}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleMenuOpen}
            ref={moreRef}
          >
            <DotsHorizontalIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <Droppable
          droppableId={column.id}
          type="card"
        >
          {(provided) => (
            <Box
              ref={provided.innerRef}
              sx={{
                flexGrow: 1,
                minHeight: 80,
                overflowY: 'auto',
                px: 2,
                py: 1
              }}
            >
              {column.cardIds.map((cardId, index) => (
                <Draggable
                  draggableId={cardId}
                  index={index}
                  key={cardId}
                >
                  {(_provided, snapshot) => (
                    <KanbanCard
                      cardId={cardId}
                      dragging={snapshot.isDragging}
                      index={index}
                      key={cardId}
                      column={column}
                      ref={_provided.innerRef}
                      style={{ ..._provided.draggableProps.style }}
                      {..._provided.draggableProps}
                      {..._provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
        <Divider />
        <Box sx={{ p: 2 }}>
          <KanbanCardAdd columnId={column.id} />
        </Box>
        <Menu
          anchorEl={moreRef.current}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom'
          }}
          keepMounted
          onClose={handleMenuClose}
          open={openMenu}
        >
          <MenuItem onClick={handleRenameInit}>
            Rename
          </MenuItem>
          <MenuItem onClick={handleClear}>
            Clear
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            Delete
          </MenuItem>
        </Menu>
      </Paper>
    </div>
  );
};

KanbanColumn.propTypes = {
  columnId: PropTypes.string.isRequired
};

export default KanbanColumn;
