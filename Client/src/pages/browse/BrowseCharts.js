import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import Chart1 from '../../components/widgets/charts/Chart1';
import Chart2 from '../../components/widgets/charts/Chart2';
import Chart3 from '../../components/widgets/charts/Chart3';
import Chart4 from '../../components/widgets/charts/Chart4';
import Chart5 from '../../components/widgets/charts/Chart5';
import Chart6 from '../../components/widgets/charts/Chart6';
import Chart7 from '../../components/widgets/charts/Chart7';
import Chart8 from '../../components/widgets/charts/Chart8';
import Chart9 from '../../components/widgets/charts/Chart9';
import Chart10 from '../../components/widgets/charts/Chart10';
import Chart11 from '../../components/widgets/charts/Chart11';
import Chart12 from '../../components/widgets/charts/Chart12';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseCharts = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Charts | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mt: 3 }}>
            <WidgetPreviewer
              element={<Chart1 />}
              name="Chart 1"
            />
            <WidgetPreviewer
              element={<Chart2 />}
              name="Chart 2"
            />
            <WidgetPreviewer
              element={<Chart3 />}
              name="Chart 3"
            />
            <WidgetPreviewer
              element={<Chart4 />}
              name="Chart 4"
            />
            <WidgetPreviewer
              element={<Chart5 />}
              name="Chart 5"
            />
            <WidgetPreviewer
              element={<Chart6 />}
              name="Chart 6"
            />
            <WidgetPreviewer
              element={<Chart7 />}
              name="Chart 7"
            />
            <WidgetPreviewer
              element={<Chart8 />}
              name="Chart 8"
            />
            <WidgetPreviewer
              element={<Chart9 />}
              name="Chart 9"
            />
            <WidgetPreviewer
              element={<Chart10 />}
              name="Chart 10"
            />
            <WidgetPreviewer
              element={<Chart11 />}
              name="Chart 11"
            />
            <WidgetPreviewer
              element={<Chart12 />}
              name="Chart 12"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseCharts;
