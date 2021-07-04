import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import Table1 from '../../components/widgets/tables/Table1';
import Table2 from '../../components/widgets/tables/Table2';
import Table3 from '../../components/widgets/tables/Table3';
import Table4 from '../../components/widgets/tables/Table4';
import Table5 from '../../components/widgets/tables/Table5';
import Table6 from '../../components/widgets/tables/Table6';
import Table7 from '../../components/widgets/tables/Table7';
import Table8 from '../../components/widgets/tables/Table8';
import Table9 from '../../components/widgets/tables/Table9';
import Table10 from '../../components/widgets/tables/Table10';
import Table11 from '../../components/widgets/tables/Table11';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseTables = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Tables | Material Kit Pro</title>
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
              element={<Table1 />}
              name="Multilined with status chips"
            />
            <WidgetPreviewer
              element={<Table2 />}
              name="Multilined with avatars"
            />
            <WidgetPreviewer
              element={<Table3 />}
              name="Table with tabs, search bar and drop-down select box"
            />
            <WidgetPreviewer
              element={<Table4 />}
              name="Multiline"
            />
            <WidgetPreviewer
              element={<Table5 />}
              name="Table with search bar, select box and toggles"
            />
            <WidgetPreviewer
              element={<Table6 />}
              name="Table with search bar and select box"
            />
            <WidgetPreviewer
              element={<Table7 />}
              name="Basic table"
            />
            <WidgetPreviewer
              element={<Table8 />}
              name="Basic table"
            />
            <WidgetPreviewer
              element={<Table9 />}
              name="Basic table"
            />
            <WidgetPreviewer
              element={<Table10 />}
              name="Multilined table"
            />
            <WidgetPreviewer
              element={<Table11 />}
              name="Basic table"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseTables;
