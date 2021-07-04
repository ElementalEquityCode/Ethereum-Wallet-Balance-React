import { useState } from 'react';
import MobileDateTimePicker from '@material-ui/lab/MobileDateTimePicker';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';
import FileDropzone from '../FileDropzone';
import QuillEditor from '../QuillEditor';

const categoryOptions = [
  { label: 'Programming', value: 'programming' },
  { label: 'Health', value: 'health' },
  { label: 'Innovation', value: 'innovation' }
];

const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const BlogPostCreateForm = () => {
  const [cover, setCover] = useState(null);

  const handleDropCover = async ([file]) => {
    const data = await toBase64(file);
    setCover(data);
  };

  const handleRemoveCover = () => {
    setCover(null);
  };

  return (
    <div>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={8}
          md={6}
          xl={9}
          xs={12}
        >
          <Card variant="outlined">
            <CardContent>
              <TextField
                fullWidth
                label="Post title"
                name="title"
                variant="outlined"
              />
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  label="Short description"
                  rows={6}
                  variant="outlined"
                />
              </Box>
              <Typography
                color="textSecondary"
                sx={{
                  mb: 2,
                  mt: 3
                }}
                variant="subtitle2"
              >
                Cover
              </Typography>
              {cover
                ? (
                  <div>
                    <Box
                      sx={{
                        backgroundImage: `url(${cover})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: 420
                      }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: 2
                      }}
                    >
                      <Button
                        color="primary"
                        onClick={handleRemoveCover}
                        variant="text"
                      >
                        Change Cover
                      </Button>
                    </Box>
                  </div>
                )
                : (
                  <FileDropzone
                    accept="image/*"
                    maxFiles={1}
                    onDrop={handleDropCover}
                  />
                )}
              <Box sx={{ mt: 3 }}>
                <Typography
                  color="textSecondary"
                  sx={{ mb: 2 }}
                  variant="subtitle2"
                >
                  Content
                </Typography>
                <QuillEditor
                  placeholder="Write something"
                  sx={{ height: 400 }}
                />
              </Box>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{ mt: 3 }}
          >
            <CardHeader title="Meta" />
            <CardContent>
              <TextField
                fullWidth
                label="SEO title"
                name="title"
                variant="outlined"
              />
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  label="SEO description"
                  rows={4}
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Card variant="outlined">
            <CardContent>
              <Box sx={{ ml: 1 }}>
                <FormControlLabel
                  control={(
                    <Switch
                      color="primary"
                      edge="start"
                      name="enablePublishAt"
                    />
                  )}
                  label="Schedule Publish"
                />
              </Box>
              <Box sx={{ mt: 3 }}>
                <MobileDateTimePicker
                  label="Post Date"
                  renderInput={(props) => (
                    <TextField
                      fullWidth
                      variant="outlined"
                      {...props}
                    />
                  )}
                  onChange={() => { }}
                  value={new Date()}
                />
              </Box>
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Category"
                  name="category"
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                >
                  {categoryOptions.map((category) => (
                    <option
                      key={category.value}
                      value={category.value}
                    >
                      {category.label}
                    </option>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ mt: 3 }}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                      defaultChecked
                      name="publishedGlobally"
                    />
                  )}
                  label="Published Globally"
                />
              </Box>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                      defaultChecked
                      name="enableComments"
                    />
                  )}
                  label="Enable Comments"
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogPostCreateForm;
