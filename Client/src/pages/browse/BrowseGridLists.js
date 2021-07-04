import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import GridList1 from '../../components/widgets/grid-lists/GridList1';
import GridList2 from '../../components/widgets/grid-lists/GridList2';
import GridList3 from '../../components/widgets/grid-lists/GridList3';
import GridList4 from '../../components/widgets/grid-lists/GridList4';
import GridList5 from '../../components/widgets/grid-lists/GridList5';
import GridList6 from '../../components/widgets/grid-lists/GridList6';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseGridLists = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Grid Lists | Material Kit Pro</title>
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
              element={<GridList1 />}
              name="Grid list with image"
            />
            <WidgetPreviewer
              element={<GridList2 />}
              name="Mixed grid list"
            />
            <WidgetPreviewer
              element={<GridList3 />}
              name="Grid list with bottom button"
            />
            <WidgetPreviewer
              element={<GridList4 />}
              name="Grid list with avatar and cover picture "
            />
            <WidgetPreviewer
              element={<GridList5 />}
              name="Grid list with picture and bottom buttons"
            />
            <WidgetPreviewer
              element={<GridList6 />}
              name="Grid list with picture and bottom buttons"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseGridLists;
