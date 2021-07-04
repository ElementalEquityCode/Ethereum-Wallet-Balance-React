import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, FormHelperText, Paper, Typography } from '@material-ui/core';
import QuillEditor from '../../QuillEditor';

const ProjectDescriptionForm = (props) => {
  const { onBack, onComplete, ...other } = props;
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      // NOTE: Make API request

      if (onComplete) {
        onComplete();
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      {...other}
    >
      <Card sx={{ p: 3 }}>
        <Typography
          color="textPrimary"
          variant="h6"
        >
          Please select one option
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          Proin tincidunt lacus sed ante efficitur efficitur.
          Quisque aliquam fringilla velit sit amet euismod.
        </Typography>
        <Paper
          sx={{ mt: 3 }}
          variant="outlined"
        >
          <QuillEditor
            handleChange={handleChange}
            placeholder="Write something"
            sx={{ height: 400 }}
            value={content}
          />
        </Paper>
        {error && (
          <Box sx={{ mt: 2 }}>
            <FormHelperText error>
              {FormHelperText}
            </FormHelperText>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            mt: 6
          }}
        >
          {onBack && (
            <Button
              color="primary"
              onClick={onBack}
              size="large"
              variant="text"
            >
              Previous
            </Button>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="primary"
            disabled={isSubmitting}
            type="submit"
            variant="contained"
          >
            Complete
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProjectDescriptionForm.propTypes = {
  onBack: PropTypes.func,
  onComplete: PropTypes.func
};

export default ProjectDescriptionForm;
