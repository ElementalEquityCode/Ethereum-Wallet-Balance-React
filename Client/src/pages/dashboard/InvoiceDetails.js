import { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  Link,
  Typography
} from '@material-ui/core';
import { invoiceApi } from '../../__fakeApi__/invoiceApi';
import { InvoicePDF, InvoicePreview } from '../../components/dashboard/invoice';
import useMounted from '../../hooks/useMounted';
import useSettings from '../../hooks/useSettings';
import ArrowLeftIcon from '../../icons/ArrowLeft';
import ChevronRightIcon from '../../icons/ChevronRight';
import gtm from '../../lib/gtm';

const InvoiceDetails = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  const [invoice, setInvoice] = useState(null);
  const [viewPDF, setViewPDF] = useState(false);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getInvoice = useCallback(async () => {
    try {
      const data = await invoiceApi.getInvoice();

      if (mounted.current) {
        setInvoice(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (!invoice) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard: Invoice Details | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Invoice Details
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Management
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Invoices
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  onClick={() => setViewPDF(true)}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Preview PDF
                </Button>
                <PDFDownloadLink
                  document={<InvoicePDF invoice={invoice} />}
                  fileName="invoice"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    color="primary"
                    sx={{ m: 1 }}
                    variant="contained"
                  >
                    Download PDF
                  </Button>
                </PDFDownloadLink>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
          <InvoicePreview invoice={invoice} />
        </Container>
      </Box>
      <Dialog
        fullScreen
        open={viewPDF}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Box
            sx={{
              backgroundColor: 'background.default',
              p: 2
            }}
          >
            <Button
              color="primary"
              startIcon={<ArrowLeftIcon fontSize="small" />}
              onClick={() => setViewPDF(false)}
              variant="contained"
            >
              Back
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <PDFViewer
              height="100%"
              style={{ border: 'none' }}
              width="100%"
            >
              <InvoicePDF invoice={invoice} />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default InvoiceDetails;
