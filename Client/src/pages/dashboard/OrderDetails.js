import { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Breadcrumbs, Button, Container, Grid, Link, Typography } from '@material-ui/core';
import { orderApi } from '../../__fakeApi__/orderApi';
import { OrderItems, OrderSummary } from '../../components/dashboard/order';
import useMounted from '../../hooks/useMounted';
import useSettings from '../../hooks/useSettings';
import ChevronRightIcon from '../../icons/ChevronRight';
import PencilAltIcon from '../../icons/PencilAlt';
import gtm from '../../lib/gtm';

const OrderDetails = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getOrder = useCallback(async () => {
    try {
      const data = await orderApi.getOrder();

      if (mounted.current) {
        setOrder(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  if (!order) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard: Order Details | Material Kit Pro</title>
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
                Order Details
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
                  Orders
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  startIcon={<PencilAltIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="contained"
                >
                  Edit
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={4}
                xl={3}
                xs={12}
              >
                <OrderSummary order={order} />
              </Grid>
              <Grid
                item
                md={8}
                xl={9}
                xs={12}
              >
                <OrderItems orderItems={order.items} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OrderDetails;
