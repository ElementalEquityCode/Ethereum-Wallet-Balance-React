import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, FormHelperText, Paper, Radio, Typography } from '@material-ui/core';

const typeOptions = [
  {
    description: 'I\'m looking for teammates to join in a personal project',
    title: 'I\'m a freelancer',
    value: 'freelancer'
  },
  {
    description: 'I\'m looking for freelancer or contractors to take care of my project',
    title: 'I’m a project owner',
    value: 'projectOwner'
  },
  {
    description: 'I\'m looking for freelancer or contractors to take care of my project',
    title: 'I want to join affiliate',
    value: 'affiliate'
  }
];

const ProjectOwnerForm = (props) => {
  const { onBack, onNext, ...other } = props;
  const [type, setType] = useState(typeOptions[1].value);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (newType) => {
    setType(newType);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      // NOTE: Make API request

      if (onNext) {
        onNext();
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
          Select profession
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          Proin tincidunt lacus sed ante efficitur efficitur.
          Quisque aliquam fringilla velit sit amet euismod.
        </Typography>
        <Box sx={{ mt: 2 }}>
          {typeOptions.map((typeOption) => (
            <Paper
              key={typeOption.value}
              sx={{
                alignItems: 'flex-start',
                display: 'flex',
                mb: 2,
                padding: 2
              }}
              variant="outlined"
            >
              <Radio
                checked={type === typeOption.value}
                color="primary"
                onClick={() => handleChange(typeOption.value)}
              />
              <Box sx={{ ml: 2 }}>
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                >
                  {typeOption.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  {typeOption.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
        {error && (
          <Box sx={{ mt: 2 }}>
            <FormHelperText error>
              {error}
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
            Next
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProjectOwnerForm.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};

export default ProjectOwnerForm;
