import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import Modal1 from '../../components/widgets/modals/Modal1';
import Modal2 from '../../components/widgets/modals/Modal2';
import Modal3 from '../../components/widgets/modals/Modal3';
import Modal4 from '../../components/widgets/modals/Modal4';
import Modal5 from '../../components/widgets/modals/Modal5';
import Modal6 from '../../components/widgets/modals/Modal6';
import Modal7 from '../../components/widgets/modals/Modal7';
import Modal8 from '../../components/widgets/modals/Modal8';
import Modal9 from '../../components/widgets/modals/Modal9';
import Modal10 from '../../components/widgets/modals/Modal10';
import Modal11 from '../../components/widgets/modals/Modal11';
import Modal12 from '../../components/widgets/modals/Modal12';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseModals = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Modals | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <WidgetPreviewer
            element={<Modal1 />}
            name="Modal 1"
          />
          <WidgetPreviewer
            element={<Modal2 />}
            name="Modal 2"
          />
          <WidgetPreviewer
            element={<Modal3 />}
            name="Modal 3"
          />
          <WidgetPreviewer
            element={<Modal4 />}
            name="Modal 4"
          />
          <WidgetPreviewer
            element={<Modal5 />}
            name="Modal 5"
          />
          <WidgetPreviewer
            element={<Modal6 />}
            name="Modal 6"
          />
          <WidgetPreviewer
            element={<Modal7 />}
            name="Modal 7"
          />
          <WidgetPreviewer
            element={<Modal8 />}
            name="Modal 8"
          />
          <WidgetPreviewer
            element={<Modal9 />}
            name="Modal 9"
          />
          <WidgetPreviewer
            element={<Modal10 />}
            name="Modal 10"
          />
          <WidgetPreviewer
            element={<Modal11 />}
            name="Modal 11"
          />
          <WidgetPreviewer
            element={<Modal12 />}
            name="Modal 12"
          />
        </Container>
      </Box>
    </>
  );
};

export default BrowseModals;
