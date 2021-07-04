import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import debounce from 'lodash/debounce';
import { Box, Dialog, Divider, Grid, TextField, Typography } from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import ArchiveIcon from '../../../icons/Archive';
import ArrowRightIcon from '../../../icons/ArrowRight';
import CheckIcon from '../../../icons/Check';
import DocumentTextIcon from '../../../icons/DocumentText';
import DuplicateIcon from '../../../icons/Duplicate';
import EyeIcon from '../../../icons/Eye';
import EyeOffIcon from '../../../icons/EyeOff';
import TemplateIcon from '../../../icons/Template';
import UsersIcon from '../../../icons/Users';
import { addChecklist, deleteCard, updateCard } from '../../../slices/kanban';
import { useDispatch } from '../../../store';
import KanbanCardAction from './KanbanCardAction';
import KanbanChecklist from './KanbanChecklist';
import KanbanComment from './KanbanComment';
import KanbanCommentAdd from './KanbanCommentAdd';

const KanbanCardModal = (props) => {
  const { card, column, onClose, open, ...other } = props;
  const dispatch = useDispatch();

  const handleDetailsUpdate = debounce(async (update) => {
    try {
      await dispatch(updateCard(card.id, update));
      toast.success('Card updated!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, 1000);

  const handleSubscribe = async () => {
    try {
      await dispatch(updateCard(card.id, { isSubscribed: true }));
      toast.success('Unsubscribed!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleUnsubscribe = async () => {
    try {
      await dispatch(updateCard(card.id, { isSubscribed: false }));
      toast.success('Subscribed!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteCard(card.id));
      toast.success('Card archived!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleAddChecklist = async () => {
    try {
      await dispatch(addChecklist(card.id, 'Untitled Checklist'));
      toast.success('Checklist added!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onClose={onClose}
      open={open}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        <Grid
          container
          spacing={5}
        >
          <Grid
            item
            sm={8}
            xs={12}
          >
            <TextField
              defaultValue={card.name}
              fullWidth
              label="Title"
              onChange={(event) => handleDetailsUpdate({ name: event.target.value })}
              variant="outlined"
            />
            <Box sx={{ mt: 3 }}>
              <TextField
                defaultValue={card.description}
                fullWidth
                multiline
                onChange={(event) => handleDetailsUpdate({ description: event.target.value })}
                placeholder="Leave a message"
                label="Description"
                rows={6}
                variant="outlined"
              />
            </Box>
            {card.checklists.length > 0 && (
              <Box sx={{ mt: 5 }}>
                {card.checklists.map((checklist) => (
                  <KanbanChecklist
                    card={card}
                    checklist={checklist}
                    key={checklist.id}
                    sx={{ mb: 3 }}
                  />
                ))}
              </Box>
            )}
            <Box sx={{ mt: 3 }}>
              <Typography
                color="textPrimary"
                variant="h6"
              >
                Activity
              </Typography>
              <Box sx={{ mt: 2 }}>
                <KanbanCommentAdd cardId={card.id} />
                {card.comments.length > 0 && (
                  <Box sx={{ mt: 3 }}>
                    {card.comments.map((comment) => (
                      <KanbanComment
                        createdAt={comment.createdAt}
                        key={comment.id}
                        memberId={comment.memberId}
                        message={comment.message}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography
              color="textPrimary"
              component="h4"
              sx={{
                fontWeight: 600,
                mb: 2
              }}
              variant="overline"
            >
              Add to card
            </Typography>
            <KanbanCardAction
              icon={<CheckIcon fontSize="small" />}
              onClick={handleAddChecklist}
            >
              Checklist
            </KanbanCardAction>
            <KanbanCardAction
              disabled
              icon={<UsersIcon fontSize="small" />}
            >
              Members
            </KanbanCardAction>
            <KanbanCardAction
              disabled
              icon={<LabelIcon fontSize="small" />}
            >
              Labels
            </KanbanCardAction>
            <KanbanCardAction
              disabled
              icon={<DocumentTextIcon fontSize="small" />}
            >
              Attachments
            </KanbanCardAction>
            <Box sx={{ mt: 3 }}>
              <Typography
                color="textPrimary"
                component="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2
                }}
                variant="overline"
              >
                Actions
              </Typography>
              <KanbanCardAction
                disabled
                icon={<ArrowRightIcon fontSize="small" />}
              >
                Move
              </KanbanCardAction>
              <KanbanCardAction
                disabled
                icon={<DuplicateIcon fontSize="small" />}
              >
                Copy
              </KanbanCardAction>
              <KanbanCardAction
                disabled
                icon={<TemplateIcon fontSize="small" />}
              >
                Make Template
              </KanbanCardAction>
              <Divider sx={{ my: 2 }} />
              {card.isSubscribed
                ? (
                  <KanbanCardAction
                    icon={<EyeOffIcon fontSize="small" />}
                    onClick={handleUnsubscribe}
                  >
                    Unwatch
                  </KanbanCardAction>
                )
                : (
                  <KanbanCardAction
                    icon={<EyeIcon fontSize="small" />}
                    onClick={handleSubscribe}
                  >
                    Watch
                  </KanbanCardAction>
                )}
              <KanbanCardAction
                icon={<ArchiveIcon fontSize="small" />}
                onClick={handleDelete}
              >
                Archive
              </KanbanCardAction>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

KanbanCardModal.propTypes = {
  card: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

KanbanCardModal.defaultProps = {
  open: false
};

export default KanbanCardModal;
