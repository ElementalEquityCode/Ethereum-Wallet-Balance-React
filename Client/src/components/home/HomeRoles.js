import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Skeleton,
  Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ExternalLinkIcon from '../../icons/ExternalLink';

const HomeRoles = (props) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const responses = await Promise.all([
        fetch(`/static/home/developers_${theme.palette.mode}.png`),
        fetch(`/static/home/designers_${theme.palette.mode}.png`)
      ]);

      const blobs = await Promise.all([
        responses[0].blob(),
        responses[1].blob()
      ]);

      setImages(blobs.map((blob) => URL.createObjectURL(blob)));
      setIsLoading(false);
    })();
  }, [theme.palette.mode]);

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        pt: 15
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          color="textPrimary"
          sx={{ pb: 6 }}
          variant="h3"
        >
          Comes for both roles
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <Card
              sx={{
                alignItems: 'center',
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                pt: 3,
                px: 3
              }}
              variant="outlined"
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Developers
              </Typography>
              <Typography
                align="center"
                color="textSecondary"
                sx={{ py: 2 }}
                variant="body1"
              >
                Not just a set of tools, the package includes
                ready-to-deploy conceptual
                applications written in JavaScript &amp; TypeScript.
              </Typography>
              <Button
                color="primary"
                size="large"
                sx={{ mb: 5 }}
                component={RouterLink}
                to="/browse"
                variant="text"
              >
                Browse Components
              </Button>
              <Box
                sx={{
                  width: {
                    sm: '60%',
                    md: 308,
                    xs: '100%'
                  }
                }}
              >
                {isLoading
                  ? (
                    <Skeleton
                      sx={{
                        borderRadius: 1,
                        width: '100%',
                        pt: '83%'
                      }}
                      variant="rectangular"
                    />
                  )
                  : (
                    <img
                      alt="Developers"
                      src={images[0]}
                      style={{
                        display: 'block',
                        maxWidth: '100%'
                      }}
                    />
                  )}
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Card
              sx={{
                alignItems: 'center',
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                pt: 3,
                px: 3
              }}
              variant="outlined"
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Designers
              </Typography>
              <Typography
                align="center"
                color="textSecondary"
                sx={{ py: 2 }}
                variant="body1"
              >
                We&apos;ve included the source Figma files to Plus &amp; Extended licenses
                so you can get creative! Build layouts with confidence.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  mb: 5
                }}
              >
                <Button
                  color="primary"
                  component="a"
                  endIcon={<ExternalLinkIcon fontSize="small" />}
                  href="https://www.figma.com/file/fPzlXO0K26FDW05L83VkSP/MKP-4.12.0-preview?node-id=3959%3A13243"
                  size="large"
                  target="_blank"
                  variant="text"
                >
                  Preview Figma
                </Button>
                <Button
                  color="primary"
                  component="a"
                  endIcon={<ExternalLinkIcon fontSize="small" />}
                  href="https://www.sketch.com/s/ae58f937-3aaa-431d-b68b-899d0aa9e00e"
                  size="large"
                  target="_blank"
                  variant="text"
                >
                  Preview Sketch
                </Button>
              </Box>
              <Box
                sx={{
                  width: {
                    sm: '60%',
                    md: 308,
                    xs: '100%'
                  }
                }}
              >
                {isLoading
                  ? (
                    <Skeleton
                      sx={{
                        borderRadius: 1,
                        width: '100%',
                        pt: '83%'
                      }}
                      variant="rectangular"
                    />
                  )
                  : (
                    <img
                      alt="Designers"
                      src={images[1]}
                      style={{
                        display: 'block',
                        maxWidth: '100%'
                      }}
                    />
                  )}
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Divider sx={{ pt: 15 }} />
      </Container>
    </Box>
  );
};

export default HomeRoles;
