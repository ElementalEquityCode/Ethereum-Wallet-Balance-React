import { useEffect } from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Avatar, Box, Container, Link, Typography } from '@material-ui/core';
import { ContactForm } from '../components/contact';
import Logo from '../components/Logo';
import MailIcon from '../icons/Mail';
import gtm from '../lib/gtm';

const Contact = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: 'repeat(2, 1fr)',
            xs: 'repeat(1, 1fr)'
          },
          minHeight: '100%'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            pt: 8
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              pl: {
                lg: 15
              }
            }}
          >
            <Link
              component={BrowserLink}
              to="/"
            >
              <Logo
                sx={{
                  height: 33,
                  width: 42
                }}
              />
            </Link>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                py: 3
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  mr: 2
                }}
                variant="rounded"
              >
                <MailIcon />
              </Avatar>
              <Typography
                color="textPrimary"
                variant="overline"
              >
                Contact sales
              </Typography>
            </Box>
            <Typography
              color="textPrimary"
              sx={{ fontWeight: 'fontWeightBold' }}
              variant="h1"
            >
              Talk to our account expert
            </Typography>
            <Typography
              color="textPrimary"
              sx={{ py: 3 }}
              variant="body1"
            >
              Have questions about integrating our APIs? Fill out the form
              and a senior web expert will be in touch shortly.
            </Typography>
            <Typography
              sx={{ color: 'primary.main' }}
              variant="h6"
            >
              Join 3,000+ forward-thinking companies:
            </Typography>
            <Box sx={{ pt: 2 }}>
              <img
                alt="logoipsum1"
                src="/static/contact/contact_logos.svg"
                style={{ maxWidth: '100%' }}
              />
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            pt: 8
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              pr: {
                lg: 15
              }
            }}
          >
            <Typography
              color="textPrimary"
              variant="h6"
              sx={{ pb: 3 }}
            >
              Fill the form below
            </Typography>
            <Box sx={{}}>
              <ContactForm />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
