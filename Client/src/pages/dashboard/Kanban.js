import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DragDropContext } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import { Box, Breadcrumbs, Link, Typography } from '@material-ui/core';
import { KanbanColumn, KanbanColumnAdd } from '../../components/dashboard/kanban';
import ChevronRightIcon from '../../icons/ChevronRight';
import gtm from '../../lib/gtm';
import { getBoard, moveCard } from '../../slices/kanban';
import { useDispatch, useSelector } from '../../store';

const Kanban = () => {
  const dispatch = useDispatch();
  const { columns } = useSelector((state) => state.kanban);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
    dispatch(getBoard());
  }, []);

  const handleDragEnd = async ({ source, destination, draggableId }) => {
    try {
      // Dropped outside the column
      if (!destination) {
        return;
      }

      // Card has not been moved
      if (source.droppableId === destination.droppableId
        && source.index === destination.index) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        // Moved to the same column on different position
        await dispatch(moveCard(draggableId, destination.index));
      } else {
        // Moved to another column
        await dispatch(moveCard(draggableId, destination.index, destination.droppableId));
      }

      toast.success('Card moved!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard: Kanban | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            Kanban
          </Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<ChevronRightIcon fontSize="small" />}
            sx={{ mt: 1 }}
          >
            <Link
              color="textPrimary"
              component={RouterLink}
              to="/dashboard"
              variant="subtitle2"
            >
              Dashboard
            </Link>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              Kanban
            </Typography>
          </Breadcrumbs>
        </Box>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexShrink: 1,
              overflowX: 'auto',
              overflowY: 'hidden'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                px: 1,
                py: 3
              }}
            >
              {columns.allIds.map((columnId) => (
                <KanbanColumn
                  columnId={columnId}
                  key={columnId}
                />
              ))}
              <KanbanColumnAdd />
            </Box>
          </Box>
        </DragDropContext>
      </Box>
    </>
  );
};

export default Kanban;
