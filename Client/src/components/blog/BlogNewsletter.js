import { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Skeleton, TextField, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const BlogNewsletter = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(`/static/blog/blog_${theme.palette.mode}.svg`);
      const blob = await response.blob();

      setImage(URL.createObjectURL(blob));
      setIsLoading(false);
    })();
  }, [theme.palette.mode]);

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        py: 6
      }}
    >
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          justifyContent="space-between"
          spacing={3}
          wrap="nowrap"
        >
          <Grid
            item
            md={7}
            xs={12}
          >
            <Box
              sx={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 600
              }}
            >
              <Typography
                color="textPrimary"
                variant="h3"
              >
                Exploring the Jamstack and the future of web development.
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
                sx={{
                  mb: 4.5,
                  mt: 2
                }}
              >
                Exploring the Jamstack and the future of web development.
                Subscribe to our newsletter to make sure you don&apos;t
                miss anything.
              </Typography>
              <TextField
                fullWidth
                label="Email address"
                name="email"
                sx={{ maxWidth: 420 }}
                type="email"
                variant="outlined"
              />
              <Button
                color="primary"
                size="large"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            sx={{
              display: {
                md: 'block',
                xs: 'none'
              }
            }}
          >
            <Box
              sx={{
                maxWidth: 472,
                width: '100%'
              }}
            >
              {isLoading
                ? (
                  <Skeleton
                    sx={{
                      borderRadius: 1,
                      pt: '89.19%',
                      width: '100%'
                    }}
                    variant="rectangular"
                  />
                )
                : (
                  <img
                    alt="Blog Hero"
                    src={image}
                    style={{ maxWidth: '100%' }}
                  />
                )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogNewsletter;
