import numeral from 'numeral';
import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import CircularProgress from '../../CircularProgress';
import Scrollbar from '../../Scrollbar';
import ArrowRightIcon from '../../../icons/ArrowRight';
import DotsHorizontalIcon from '../../../icons/DotsHorizontal';

const products = [
  {
    id: '5eff2512c6f8737d08325676',
    conversionRate: 93,
    currency: '$',
    image: '/static/mock-images/products/product_1.jpeg',
    name: 'Charlie Tulip Dress',
    profit: 53500,
    sales: 13153
  },
  {
    id: '5eff2516247f9a6fcca9f151',
    conversionRate: 76,
    currency: '$',
    image: '/static/mock-images/products/product_2.jpeg',
    name: 'Kate Leopard Dress',
    profit: 45763,
    sales: 10300
  },
  {
    id: '5eff251a3bb9ab7290640f18',
    conversionRate: 60,
    currency: '$',
    image: '/static/mock-images/products/product_3.jpeg',
    name: 'Lounge Puff Fabric Slipper',
    profit: 28700,
    sales: 5300
  },
  {
    id: '5eff251e297fd17f0dc18a8b',
    conversionRate: 46,
    currency: '$',
    image: '/static/mock-images/products/product_4.jpeg',
    name: 'Flared Sleeve Floral Blouse',
    profit: 20400,
    sales: 1203
  },
  {
    id: '5eff2524ef813f061b3ea39f',
    conversionRate: 41,
    currency: '$',
    image: '/static/mock-images/products/product_5.jpeg',
    name: 'Soft Wrap Top',
    profit: 15200,
    sales: 254
  }
];

const GroupedList5 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Card>
      <CardHeader
        action={(
          <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton>
        )}
        title="Profitable Products"
      />
      <Scrollbar>
        <Box sx={{ minWidth: 700 }}>
          <Table>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  hover
                  key={product.id}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        '& > img': {
                          flexShrink: 0,
                          height: 56,
                          width: 56
                        }
                      }}
                    >
                      <img
                        alt="Product"
                        src={product.image}
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          color="textPrimary"
                          variant="subtitle2"
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          noWrap
                          variant="body2"
                        >
                          <Typography
                            color="success.main"
                            component="span"
                            variant="subtitle2"
                          >
                            {numeral(product.sales).format('0,0')}
                          </Typography>
                          {' '}
                          Sales
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      Profit
                    </Typography>
                    <Typography
                      color="textSecondary"
                      noWrap
                      variant="body2"
                    >
                      {numeral(product.profit)
                        .format(`${product.currency}0,0.00`)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <Box sx={{ mr: 2 }}>
                        <Typography
                          align="right"
                          color="textPrimary"
                          variant="subtitle2"
                        >
                          {product.conversionRate}
                          %
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          Conversion Rate
                        </Typography>
                      </Box>
                      <CircularProgress value={product.conversionRate} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          sx={{ cursor: 'pointer' }}
          variant="text"
        >
          See All
        </Button>
      </Box>
    </Card>
  </Box>
);

export default GroupedList5;
