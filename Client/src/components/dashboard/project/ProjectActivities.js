import PropTypes from 'prop-types';
import { isSameDay } from 'date-fns';
import { Box, Typography } from '@material-ui/core';
import ProjectActivity from './ProjectActivity';

const ProjectActivities = (props) => {
  const { activities, ...other } = props;
  const todayItems = [];
  const lastWeekItems = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const activity of activities) {
    if (isSameDay(activity.createdAt, new Date())) {
      todayItems.push(activity);
    } else {
      lastWeekItems.push(activity);
    }
  }

  return (
    <div {...other}>
      <Typography
        color="textPrimary"
        variant="h6"
      >
        Today
      </Typography>
      <Box sx={{ mt: 3 }}>
        {todayItems.map((activity) => (
          <ProjectActivity
            createdAt={activity.createdAt}
            description={activity.description}
            key={activity.id}
            subject={activity.subject}
            type={activity.type}
          />
        ))}
      </Box>
      <Typography
        color="textPrimary"
        sx={{ mt: 3 }}
        variant="h6"
      >
        Last week
      </Typography>
      <Box sx={{ mt: 3 }}>
        {lastWeekItems.map((activity) => (
          <ProjectActivity
            createdAt={activity.createdAt}
            description={activity.description}
            key={activity.id}
            subject={activity.subject}
            type={activity.type}
          />
        ))}
      </Box>
    </div>
  );
};

ProjectActivities.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ProjectActivities;
