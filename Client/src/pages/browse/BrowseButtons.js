import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import Buttons1 from '../../components/widgets/buttons/Buttons1';
import Buttons2 from '../../components/widgets/buttons/Buttons2';
import Buttons3 from '../../components/widgets/buttons/Buttons3';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseButtons = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Buttons | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          pb: 15,
          pt: 8
        }}
      >
        <Container maxWidth="lg">
          <WidgetPreviewer
            element={<Buttons1 />}
            name="Simple buttons"
          />
          <WidgetPreviewer
            element={<Buttons2 />}
            name="Buttons with text and icon"
          />
          <WidgetPreviewer
            element={<Buttons3 />}
            name="Button groups"
          />
        </Container>
      </Box>
    </>
  );
};

export default BrowseButtons;
