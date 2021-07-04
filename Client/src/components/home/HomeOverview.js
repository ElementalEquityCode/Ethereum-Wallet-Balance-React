import { Box, Container, Typography } from '@material-ui/core';
import ChevronRightIcon from '../../icons/ChevronRight';

const HomeOverview = (props) => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      py: 6
    }}
    {...props}
  >
    <Container
      maxWidth="lg"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}
    >
      <div>
        <Typography
          sx={{
            color: 'primary.contrastText',
            textAlign: {
              md: 'left',
              xs: 'center'
            }
          }}
          variant="h3"
        >
          5000+
        </Typography>
        <Typography
          sx={{ color: 'primary.contrastText' }}
          variant="overline"
        >
          Very* happy customers
        </Typography>
      </div>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          pr: 4
        }}
      >
        <ChevronRightIcon
          fontSize="large"
          sx={{
            color: 'primary.contrastText',
            display: {
              md: 'inline',
              xs: 'none'
            }
          }}
        />
      </Box>
      <div>
        <Typography
          sx={{
            color: 'primary.contrastText',
            textAlign: {
              md: 'left',
              xs: 'center'
            }
          }}
          variant="h3"
        >
          4.9/5
        </Typography>
        <Typography
          sx={{ color: 'primary.contrastText' }}
          variant="overline"
        >
          Customer Rating
        </Typography>
      </div>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          pr: 4
        }}
      >
        <ChevronRightIcon
          fontSize="large"
          sx={{
            color: 'primary.contrastText',
            display: {
              md: 'inline',
              xs: 'none'
            }
          }}
        />
      </Box>
      <div>
        <Typography
          sx={{
            color: 'primary.contrastText',
            textAlign: {
              md: 'left',
              xs: 'center'
            }
          }}
          variant="h3"
        >
          UX
        </Typography>
        <Typography
          sx={{ color: 'primary.contrastText' }}
          variant="overline"
        >
          Complete flows
        </Typography>
      </div>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          pr: 4
        }}
      >
        <ChevronRightIcon
          fontSize="large"
          sx={{
            color: 'primary.contrastText',
            display: {
              md: 'inline',
              xs: 'none'
            }
          }}
        />
      </Box>
      <div>
        <Typography
          sx={{
            color: 'primary.contrastText',
            textAlign: {
              md: 'left',
              xs: 'center'
            }
          }}
          variant="h3"
        >
          $10k+
        </Typography>
        <Typography
          sx={{ color: 'primary.contrastText' }}
          variant="overline"
        >
          In people hours saved
        </Typography>
      </div>
    </Container>
  </Box>
);

export default HomeOverview;
