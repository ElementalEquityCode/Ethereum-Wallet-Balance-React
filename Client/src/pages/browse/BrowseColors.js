import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import ColorsMain from '../../components/widgets/colors/ColorsMain';
import ColorsSeverity from '../../components/widgets/colors/ColorsSeverity';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseColors = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Colors | Material Kit Pro</title>
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
            element={<ColorsMain />}
            name="Main colors"
          />
          <WidgetPreviewer
            element={<ColorsSeverity />}
            name="Severity colors"
          />
        </Container>
      </Box>
    </>
  );
};

export default BrowseColors;
