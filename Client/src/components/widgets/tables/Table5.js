import numeral from 'numeral';
import { subDays, subHours } from 'date-fns';
import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField
} from '@material-ui/core';
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import ArrowRightIcon from '../../../icons/ArrowRight';
import ImageIcon from '../../../icons/Image';
import PencilAltIcon from '../../../icons/PencilAlt';
import SearchIcon from '../../../icons/Search';

const now = new Date();

const products = [
  {
    id: '5ece2c077e39da27658aa8a9',
    attributes: ['Cotton'],
    category: 'dress',
    currency: '$',
    createdAt: subDays(now, 1).getTime(),
    image: '/static/mock-images/products/product_1.jpeg',
    inventoryType: 'in_stock',
    isAvailable: true,
    isShippable: false,
    name: 'Charlie Tulip Dress',
    price: 23.99,
    quantity: 85,
    updatedAt: subHours(now, 6).getTime(),
    variants: 2
  },
  {
    id: '5ece2c0d16f70bff2cf86cd8',
    attributes: ['Cotton'],
    category: 'dress',
    currency: '$',
    createdAt: subDays(now, 3).getTime(),
    image: '/static/mock-images/products/product_2.jpeg',
    inventoryType: 'out_of_stock',
    isAvailable: false,
    isShippable: true,
    name: 'Kate Leopard Dress',
    price: 95.00,
    quantity: 0,
    updatedAt: subDays(subHours(now, 8), 2).getTime(),
    variants: 1
  },
  {
    id: '5ece2c123fad30cbbff8d060',
    attributes: ['Variety of styles'],
    category: 'jewelry',
    currency: '$',
    createdAt: subDays(now, 6).getTime(),
    image: null,
    inventoryType: 'in_stock',
    isAvailable: true,
    isShippable: false,
    name: 'Layering Bracelets Collection',
    price: 155.00,
    quantity: 48,
    updatedAt: subDays(subHours(now, 2), 1).getTime(),
    variants: 5
  },
  {
    id: '5ece2c1be7996d1549d94e34',
    attributes: ['Polyester and Spandex'],
    category: 'blouse',
    currency: '$',
    createdAt: subDays(now, 12).getTime(),
    image: '/static/mock-images/products/product_4.jpeg',
    inventoryType: 'limited',
    isAvailable: false,
    isShippable: true,
    name: 'Flared Sleeve Floral Blouse',
    price: 17.99,
    quantity: 5,
    updatedAt: subDays(subHours(now, 7), 1).getTime(),
    variants: 1
  }
];

const categoryOptions = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Dress',
    value: 'dress'
  },
  {
    label: 'Jewelry',
    value: 'jewelry'
  },
  {
    label: 'Blouse',
    value: 'blouse'
  },
  {
    label: 'Beauty',
    value: 'beauty'
  }
];

const availabilityOptions = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Available',
    value: 'available'
  },
  {
    label: 'Unavailable',
    value: 'unavailable'
  }
];

const sortOptions = [
  {
    label: 'Last update (newest first)',
    value: 'updatedAt|desc'
  },
  {
    label: 'Last update (oldest first)',
    value: 'updatedAt|asc'
  },
  {
    label: 'Creation date (newest first)',
    value: 'createdAt|desc'
  },
  {
    label: 'Creation date (oldest first)',
    value: 'createdAt|asc'
  }
];

const getInventoryLabel = (inventoryType) => {
  const map = {
    in_stock: {
      text: 'In Stock',
      color: 'success'
    },
    limited: {
      text: 'Limited',
      color: 'warning'
    },
    out_of_stock: {
      text: 'Out of Stock',
      color: 'error'
    }
  };

  const { text, color } = map[inventoryType];

  return (
    <Label color={color}>
      {text}
    </Label>
  );
};

const Widget22 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Card>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          m: -1,
          p: 2
        }}
      >
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 500
          }}
        >
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              )
            }}
            placeholder="Search products"
            variant="outlined"
          />
        </Box>
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 240
          }}
        >
          <TextField
            label="Sort By"
            name="sort"
            select
            SelectProps={{ native: true }}
            variant="outlined"
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 240
          }}
        >
          <TextField
            fullWidth
            label="Category"
            name="category"
            select
            SelectProps={{ native: true }}
            variant="outlined"
          >
            {categoryOptions.map((categoryOption) => (
              <option
                key={categoryOption.value}
                value={categoryOption.value}
              >
                {categoryOption.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 240
          }}
        >
          <TextField
            fullWidth
            label="Availability"
            name="availability"
            select
            SelectProps={{ native: true }}
            variant="outlined"
          >
            {availabilityOptions.map((availabilityOption) => (
              <option
                key={availabilityOption.value}
                value={availabilityOption.value}
              >
                {availabilityOption.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box sx={{ m: 2 }}>
          <FormControlLabel
            control={(
              <Switch
                color="primary"
                name="inStock"
              />
            )}
            label="In Stock"
          />
        </Box>
        <Box sx={{ m: 2 }}>
          <FormControlLabel
            control={(
              <Switch
                color="primary"
                name="Shippable"
              />
            )}
            label="Shippable"
          />
        </Box>
      </Box>
      <Scrollbar>
        <Box sx={{ minWidth: 1200 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Inventory
                </TableCell>
                <TableCell>
                  Details
                </TableCell>
                <TableCell>
                  Attributes
                </TableCell>
                <TableCell>
                  Price
                </TableCell>
                <TableCell align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  hover
                  key={product.id}
                >
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {product.image
                        ? (
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundColor: 'background.default',
                              display: 'flex',
                              height: 100,
                              justifyContent: 'center',
                              overflow: 'hidden',
                              width: 100,
                              '& img': {
                                height: 'auto',
                                width: '100%'
                              }
                            }}
                          >
                            <img
                              alt="Product"
                              src={product.image}
                            />
                          </Box>
                        )
                        : (
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundColor: 'background.default',
                              display: 'flex',
                              height: 100,
                              justifyContent: 'center',
                              width: 100
                            }}
                          >
                            <ImageIcon fontSize="small" />
                          </Box>
                        )}
                      <Link
                        color="textPrimary"
                        underline="none"
                        sx={{ ml: 2 }}
                        variant="subtitle2"
                      >
                        {product.name}
                      </Link>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {getInventoryLabel(product.inventoryType)}
                  </TableCell>
                  <TableCell>
                    {product.quantity}
                    {' '}
                    in stock
                    {product.variants > 1 && ` in ${product.variants} variants`}
                  </TableCell>
                  <TableCell>
                    {product.attributes.map((attr) => attr)}
                  </TableCell>
                  <TableCell>
                    {numeral(product.price)
                      .format(`${product.currency}0,0.00`)}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <PencilAltIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                      <ArrowRightIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={products.length}
            onPageChange={() => {
            }}
            onRowsPerPageChange={() => {
            }}
            page={0}
            rowsPerPage={5}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </Scrollbar>
    </Card>
  </Box>
);

export default Widget22;
