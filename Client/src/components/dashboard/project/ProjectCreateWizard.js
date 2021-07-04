import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ProjectDescriptionForm from './ProjectDescriptionForm';
import ProjectDetailsForm from './ProjectDetailsForm';
import ProjectOwnerForm from './ProjectOwnerForm';

const ProjectCreateWizard = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <div {...props}>
      {!completed
        ? (
          <>
            {activeStep === 0 && (
              <ProjectOwnerForm onNext={handleNext} />
            )}
            {activeStep === 1 && (
              <ProjectDetailsForm
                onBack={handleBack}
                onNext={handleNext}
              />
            )}
            {activeStep === 2 && (
              <ProjectDescriptionForm
                onBack={handleBack}
                onComplete={handleComplete}
              />
            )}
          </>
        )
        : (
          <Card>
            <CardContent>
              <Box
                sx={{
                  maxWidth: 450,
                  mx: 'auto'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText'
                    }}
                  >
                    <StarIcon fontSize="small" />
                  </Avatar>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    align="center"
                    color="textPrimary"
                    variant="h3"
                  >
                    You are all done!
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="subtitle1"
                  >
                    Donec ut augue sed nisi ullamcorper posuere
                    sit amet eu mauris. Ut eget mauris scelerisque.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2
                  }}
                >
                  <Button
                    color="primary"
                    component={RouterLink}
                    to="/dashboard/projects/1"
                    variant="contained"
                  >
                    View project
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}
    </div>
  );
};

export default ProjectCreateWizard;
