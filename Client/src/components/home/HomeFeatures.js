import { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography
} from '@material-ui/core';
import { alpha, useTheme } from '@material-ui/core/styles';
import LockIcon from '../../icons/Lock';
import CogIcon from '../../icons/Cog';
import TemplateIcon from '../../icons/Template';
import MinusIcon from '../../icons/Minus';

const getFeatures = (theme) => ([
  {
    icon: LockIcon,
    image: `/static/home/features-auth_${theme}.png`,
    items: ['Amplify', 'Auth0', 'Firebase', 'JWT'],
    subheader: 'Identity services fully integrated. Choose from:',
    title: 'Auth System'
  },
  {
    icon: CogIcon,
    items: [
      'Dashboard',
      'Checkout',
      'User Management',
      'Product Management',
      'Invoice Generator',
      'Charts API',
      'Landing/Home',
      'And many more'
    ],
    subheader: 'Get started with ready-to-deploy templates.',
    image: `/static/home/features-flows_${theme}.png`,
    title: 'Management Pages'
  },
  {
    icon: TemplateIcon,
    image: `/static/home/features-landing_${theme}.png`,
    items: ['Home or Landing', 'Contact Us', 'Blog', 'Pricing'],
    subheader: 'We also have included all the necessary layouts for a startup.',
    title: 'Landing Pages'
  }
]);

const HomeFeatures = (props) => {
  const theme = useTheme();
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState();

  const features = getFeatures(theme.palette.mode);

  useEffect(() => {
    (async () => {
      const responses = await Promise.all(features.map((feature) => fetch(feature.image)));
      const blobs = await Promise.all(responses.map((response) => response.blob()));

      setImages(() => {
        const map = new Map();

        blobs.forEach((blob, index) => {
          const url = features[index].image;
          const image = URL.createObjectURL(blob);

          map.set(url, image);
        });

        return map;
      });

      setIsLoading(false);
    })();
  }, [theme.palette.mode]);

  const handleSelectedFeatureIndexChange = (index) => {
    setSelectedFeatureIndex(index);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        py: 15
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography
              color="textPrimary"
              variant="h3"
            >
              Modern technology stack
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ py: 2 }}
              variant="body1"
            >
              Comes packed with 21 custom templates and many individual
              components built to meet almost any type of admin or
              customer application requirements.
            </Typography>
            {features.map((feature, index) => {
              const { icon: Icon, items, subheader, title } = feature;

              return (
                <Box
                  key={title}
                  onClick={() => handleSelectedFeatureIndexChange(index)}
                  sx={{
                    backgroundColor: index
                      === selectedFeatureIndex
                      && alpha(theme.palette.primary.main, 0.08),
                    borderRadius: 1,
                    cursor: index === selectedFeatureIndex
                      ? 'default'
                      : 'pointer',
                    display: 'flex',
                    mb: 2,
                    p: 2
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: index === selectedFeatureIndex
                        ? 'primary.main'
                        : 'transparent',
                      color: index === selectedFeatureIndex
                        ? 'primary.contrastText'
                        : 'text.secondary',
                      mr: 2
                    }}
                  >
                    <Icon fontSize="small" />
                  </Avatar>
                  <div>
                    <Typography
                      color="textPrimary"
                      variant="h6"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      {subheader}
                    </Typography>
                    {index === selectedFeatureIndex && (
                      <List
                        disablePadding
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: items.length > 4 && ({
                            sm: 'repeat(2, 1fr)'
                          }),
                          gap: 1,
                          pt: 2
                        }}
                      >
                        {items.map((item) => (
                          <ListItem
                            disableGutters
                            key={item}
                            sx={{ py: 0 }}
                          >
                            <ListItemAvatar
                              sx={{
                                alignItems: 'center',
                                display: 'flex',
                                minWidth: 0,
                                mr: 0.5
                              }}
                            >
                              <MinusIcon color="primary" />
                            </ListItemAvatar>
                            <ListItemText
                              primary={(
                                <Typography
                                  color="textPrimary"
                                  variant="subtitle2"
                                >
                                  {item}
                                </Typography>
                              )}
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </div>
                </Box>
              );
            })}
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <div>
              {isLoading
                ? (
                  <Skeleton
                    sx={{
                      borderRadius: 1,
                      width: '100%',
                      pt: '79.25%'
                    }}
                    variant="rectangular"
                  />
                )
                : (
                  <img
                    alt={features[selectedFeatureIndex].title}
                    src={images.get(features[selectedFeatureIndex].image)}
                    style={{ maxWidth: '100%' }}
                  />
                )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeFeatures;
