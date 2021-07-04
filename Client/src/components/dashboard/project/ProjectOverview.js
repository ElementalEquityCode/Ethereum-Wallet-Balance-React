import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid } from '@material-ui/core';
import FileDropzone from '../../FileDropzone';
import ProjectBrief from './ProjectBrief';
import ProjectFileCard from './ProjectFileCard';
import ProjectMembers from './ProjectMembers';
import ProjectMetadata from './ProjectMetadata';

const ProjectOverview = (props) => {
  const { project, ...other } = props;

  return (
    <Grid
      container
      spacing={3}
      {...other}
    >
      <Grid
        item
        lg={8}
        xl={9}
        xs={12}
      >
        <ProjectBrief
          description={project.description}
          tags={project.tags}
          title={project.title}
        />
        <Box sx={{ mt: 3 }}>
          <Card>
            <CardContent>
              <FileDropzone />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mb: -1,
              mt: 2,
              mx: -1
            }}
          >
            {project.files.map((file) => (
              <Box
                key={file.url}
                sx={{
                  m: 1,
                  width: 240
                }}
              >
                <ProjectFileCard
                  mimeType={file.mimeType}
                  name={file.name}
                  size={file.size}
                  url={file.url}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        lg={4}
        xl={3}
        xs={12}
      >
        <ProjectMetadata
          authorAvatar={project.author.avatar}
          authorName={project.author.name}
          budget={project.budget}
          currency={project.currency}
          endDate={project.endDate}
          updatedAt={project.updatedAt}
        />
        <Box sx={{ mt: 3 }}>
          <ProjectMembers members={project.members} />
        </Box>
      </Grid>
    </Grid>
  );
};

ProjectOverview.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectOverview;
