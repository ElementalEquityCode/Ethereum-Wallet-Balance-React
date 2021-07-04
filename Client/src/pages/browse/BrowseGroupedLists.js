import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import GroupedList1 from '../../components/widgets/grouped-lists/GroupedList1';
import GroupedList2 from '../../components/widgets/grouped-lists/GroupedList2';
import GroupedList3 from '../../components/widgets/grouped-lists/GroupedList3';
import GroupedList4 from '../../components/widgets/grouped-lists/GroupedList4';
import GroupedList5 from '../../components/widgets/grouped-lists/GroupedList5';
import GroupedList6 from '../../components/widgets/grouped-lists/GroupedList6';
import GroupedList7 from '../../components/widgets/grouped-lists/GroupedList7';
import GroupedList8 from '../../components/widgets/grouped-lists/GroupedList8';
import GroupedList9 from '../../components/widgets/grouped-lists/GroupedList9';
import GroupedList10 from '../../components/widgets/grouped-lists/GroupedList10';
import GroupedList11 from '../../components/widgets/grouped-lists/GroupedList11';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseGroupedLists = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Grouped Lists | Material Kit Pro</title>
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
              element={<GroupedList1 />}
              name="List"
            />
            <WidgetPreviewer
              element={<GroupedList2 />}
              name="Basic list"
            />
            <WidgetPreviewer
              element={<GroupedList3 />}
              name="Basic list"
            />
            <WidgetPreviewer
              element={<GroupedList4 />}
              name="Basic list"
            />
            <WidgetPreviewer
              element={<GroupedList5 />}
              name="Multiline list with donut chart"
            />
            <WidgetPreviewer
              element={<GroupedList6 />}
              name="Basic list"
            />
            <WidgetPreviewer
              element={<GroupedList7 />}
              name="Basic list with side avatars"
            />
            <WidgetPreviewer
              element={<GroupedList8 />}
              name="Basic list with side avatars"
            />
            <WidgetPreviewer
              element={<GroupedList9 />}
              name="Multiline list with rating bar"
            />
            <WidgetPreviewer
              element={<GroupedList10 />}
              name="Basic list with side icon"
            />
            <WidgetPreviewer
              element={<GroupedList11 />}
              name="Basic multiline list"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseGroupedLists;
