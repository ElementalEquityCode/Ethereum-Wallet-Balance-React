import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ProjectApplicantCard from './ProjectApplicantCard';

const ProjectApplicants = (props) => {
  const { applicants, ...other } = props;

  return (
    <Grid
      container
      spacing={3}
      {...other}
    >
      {applicants.map((applicant) => (
        <Grid
          item
          key={applicant.id}
          lg={4}
          xs={12}
        >
          <ProjectApplicantCard
            avatar={applicant.avatar}
            cover={applicant.cover}
            name={applicant.name}
            skills={applicant.skills}
          />
        </Grid>
      ))}
    </Grid>
  );
};

ProjectApplicants.propTypes = {
  applicants: PropTypes.array.isRequired
};

export default ProjectApplicants;
