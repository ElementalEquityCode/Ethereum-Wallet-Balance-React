import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import Form1 from '../../components/widgets/forms/Form1';
import Form2 from '../../components/widgets/forms/Form2';
import Form3 from '../../components/widgets/forms/Form3';
import Form4 from '../../components/widgets/forms/Form4';
import Form5 from '../../components/widgets/forms/Form5';
import Form6 from '../../components/widgets/forms/Form6';
import Form7 from '../../components/widgets/forms/Form7';
import Form8 from '../../components/widgets/forms/Form8';
import Form9 from '../../components/widgets/forms/Form9';
import Form16 from '../../components/widgets/forms/Form16';
import Form15 from '../../components/widgets/forms/Form15';
import Form10 from '../../components/widgets/forms/Form10';
import Form11 from '../../components/widgets/forms/Form11';
import Form12 from '../../components/widgets/forms/Form12';
import Form13 from '../../components/widgets/forms/Form13';
import Form14 from '../../components/widgets/forms/Form14';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseForms = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Forms | Material Kit Pro</title>
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
              element={<Form1 />}
              name="Form with input fields and switches"
            />
            <WidgetPreviewer
              element={<Form2 />}
              name="Form with search bar and removable chips for filtering"
            />
            <WidgetPreviewer
              element={<Form3 />}
              name="Form with checkboxes"
            />
            <WidgetPreviewer
              element={<Form4 />}
              name="Basic input fields form"
            />
            <WidgetPreviewer
              element={<Form5 />}
              name="Form with input fields and switches"
            />
            <WidgetPreviewer
              element={<Form6 />}
              name="Mixed input field forms"
            />
            <WidgetPreviewer
              element={<Form7 />}
              name="Basic input fields form"
            />
            <WidgetPreviewer
              element={<Form8 />}
              name="Mixed input fields form"
            />
            <WidgetPreviewer
              element={<Form9 />}
              name="Form with radio button options"
            />
            <WidgetPreviewer
              element={<Form10 />}
              name="Basic form"
            />
            <WidgetPreviewer
              element={<Form11 />}
              name="Form with checkboxes and input fields"
            />
            <WidgetPreviewer
              element={<Form12 />}
              name="Form with select and input fields"
            />
            <WidgetPreviewer
              element={<Form13 />}
              name="Multi-section form"
            />
            <WidgetPreviewer
              element={<Form14 />}
              name="Mixed form"
            />
            <WidgetPreviewer
              element={<Form15 />}
              name="Basic input field"
            />
            <WidgetPreviewer
              element={<Form16 />}
              name="Form with input fields and checkbox"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseForms;
