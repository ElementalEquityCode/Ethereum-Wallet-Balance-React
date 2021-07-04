import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { addMinutes } from 'date-fns';
import * as Yup from 'yup';
import { Formik } from 'formik';
import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker';
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormHelperText,
  IconButton,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';
import TrashIcon from '../../../icons/Trash';
import { createEvent, deleteEvent, updateEvent } from '../../../slices/calendar';
import { useDispatch } from '../../../store';

const getInitialValues = (event, range) => {
  if (event) {
    return {
      allDay: event.allDay || false,
      color: event.color || '',
      description: event.description || '',
      end: event.end ? new Date(event.end) : addMinutes(new Date(), 30),
      start: event.start ? new Date(event.start) : new Date(),
      title: event.title || '',
      submit: null
    };
  }

  if (range) {
    return {
      allDay: false,
      color: '',
      description: '',
      end: new Date(range.end),
      start: new Date(range.start),
      title: '',
      submit: null
    };
  }

  return {
    allDay: false,
    color: '',
    description: '',
    end: addMinutes(new Date(), 30),
    start: new Date(),
    title: '',
    submit: null
  };
};

const CalendarEventForm = (props) => {
  const { event, onAddComplete, onCancel, onDeleteComplete, onEditComplete, range } = props;
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteEvent(event.id));

      onDeleteComplete?.();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={getInitialValues(event, range)}
      validationSchema={Yup
        .object()
        .shape({
          allDay: Yup.bool(),
          description: Yup.string().max(5000),
          end: Yup
            .date()
            .when('start',
              (start, schema) => (start && schema.min(start,
                'End date must be later than start date'))),
          start: Yup.date(),
          title: Yup
            .string()
            .max(255)
            .required('Title is required')
        })}
      onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
        try {
          const data = {
            allDay: values.allDay,
            description: values.description,
            end: values.end.getTime(),
            start: values.start.getTime(),
            title: values.title
          };

          if (event) {
            await dispatch(updateEvent(event.id, data));
          } else {
            await dispatch(createEvent(data));
          }

          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          toast.success('Calendar updated!');

          if (!event && onAddComplete) {
            onAddComplete();
          }

          if (event && onEditComplete) {
            onEditComplete();
          }
        } catch (err) {
          console.error(err);
          toast.error('Something went wrong!');
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {event
                ? 'Add Event'
                : 'Edit Event'}
            </Typography>
          </Box>
          <Box sx={{ p: 3 }}>
            <TextField
              error={Boolean(touched.title && errors.title)}
              fullWidth
              helperText={touched.title && errors.title}
              label="Title"
              name="title"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.title}
              variant="outlined"
            />
            <Box sx={{ mt: 2 }}>
              <TextField
                error={Boolean(touched.description && errors.description)}
                fullWidth
                helperText={touched.description && errors.description}
                label="Description"
                name="description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                variant="outlined"
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <FormControlLabel
                control={(
                  <Switch
                    checked={values.allDay}
                    color="primary"
                    name="allDay"
                    onChange={handleChange}
                  />
                )}
                label="All day"
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <MobileDateTimePicker
                label="Start date"
                onChange={(date) => setFieldValue('start', date)}
                renderInput={(inputProps) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    {...inputProps}
                  />
                )}
                value={values.start}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <MobileDateTimePicker
                label="End date"
                onChange={(date) => setFieldValue('end', date)}
                renderInput={(inputProps) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    {...inputProps}
                  />
                )}
                value={values.end}
              />
            </Box>
            {Boolean(touched.end && errors.end) && (
              <Box sx={{ mt: 2 }}>
                <FormHelperText error>
                  {errors.end}
                </FormHelperText>
              </Box>
            )}
          </Box>
          <Divider />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              p: 2
            }}
          >
            {event && (
              <IconButton onClick={() => handleDelete()}>
                <TrashIcon fontSize="small" />
              </IconButton>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Button
              color="primary"
              onClick={onCancel}
              variant="text"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              disabled={isSubmitting}
              sx={{ ml: 1 }}
              type="submit"
              variant="contained"
            >
              Confirm
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

CalendarEventForm.propTypes = {
  event: PropTypes.object,
  onAddComplete: PropTypes.func,
  onCancel: PropTypes.func,
  onDeleteComplete: PropTypes.func,
  onEditComplete: PropTypes.func,
  range: PropTypes.object
};

export default CalendarEventForm;
