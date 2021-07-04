import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import DetailList1 from '../../components/widgets/detail-lists/DetailList1';
import DetailList2 from '../../components/widgets/detail-lists/DetailList2';
import DetailList3 from '../../components/widgets/detail-lists/DetailList3';
import DetailList4 from '../../components/widgets/detail-lists/DetailList4';
import DetailList5 from '../../components/widgets/detail-lists/DetailList5';
import DetailList6 from '../../components/widgets/detail-lists/DetailList6';
import DetailList7 from '../../components/widgets/detail-lists/DetailList7';
import DetailList8 from '../../components/widgets/detail-lists/DetailList8';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseDetailLists = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Detail Lists | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <WidgetPreviewer
              element={<DetailList1 />}
              name="Currency balance card"
            />
            <WidgetPreviewer
              element={<DetailList2 />}
              name="Contact details card"
            />
            <WidgetPreviewer
              element={<DetailList3 />}
              name="Invoices details card"
            />
            <WidgetPreviewer
              element={<DetailList4 />}
              name="Order info"
            />
            <WidgetPreviewer
              element={<DetailList5 />}
              name="Order info card"
            />
            <WidgetPreviewer
              element={<DetailList6 />}
              name="Project information card"
            />
            <WidgetPreviewer
              element={<DetailList7 />}
              name="Project details card"
            />
            <WidgetPreviewer
              element={<DetailList8 />}
              name="About card"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseDetailLists;
