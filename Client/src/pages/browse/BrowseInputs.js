import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import InputCheckbox from '../../components/widgets/inputs/InputCheckbox';
import InputRadio from '../../components/widgets/inputs/InputRadio';
import InputSwitch from '../../components/widgets/inputs/InputSwitch';
import InputTextField from '../../components/widgets/inputs/InputTextField';
import InputMixed from '../../components/widgets/inputs/InputMixed';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseInputs = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Inputs | Material Kit Pro</title>
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
            element={<InputCheckbox />}
            name="Checkbox with additional text"
          />
          <WidgetPreviewer
            element={<InputRadio />}
            name="Radio button with additional text"
          />
          <WidgetPreviewer
            element={<InputSwitch />}
            name="Switch with top description"
          />
          <WidgetPreviewer
            element={<InputTextField />}
            name="Text fields integrated in a form"
          />
          <WidgetPreviewer
            element={<InputMixed />}
            name="Mixed input form"
          />
        </Container>
      </Box>
    </>
  );
};

export default BrowseInputs;
