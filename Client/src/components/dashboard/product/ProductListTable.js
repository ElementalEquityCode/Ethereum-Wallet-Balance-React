import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
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
import ArrowRightIcon from '../../../icons/ArrowRight';
import ImageIcon from '../../../icons/Image';
import PencilAltIcon from '../../../icons/PencilAlt';
import SearchIcon from '../../../icons/Search';
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';

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

const applyFilters = (products, query, filters) => products
  .filter((product) => {
    let matches = true;

    if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false;
    }

    if (filters.category && product.category !== filters.category) {
      matches = false;
    }

    if (filters.availability) {
      if (filters.availability === 'available' && !product.isAvailable) {
        matches = false;
      }

      if (filters.availability === 'unavailable' && product.isAvailable) {
        matches = false;
      }
    }

    if (filters.inStock && ![
      'in_stock',
      'limited'
    ].includes(product.inventoryType)) {
      matches = false;
    }

    if (filters.isShippable && !product.isShippable) {
      matches = false;
    }

    return matches;
  });

const applyPagination = (products, page, limit) => products
  .slice(page * limit, page * limit + limit);

const ProductListTable = (props) => {
  const { products, ...other } = props;
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState(sortOptions[0].value);
  const [filters, setFilters] = useState({
    category: null,
    availability: null,
    inStock: null,
    isShippable: null
  });

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      category: value
    }));
  };

  const handleAvailabilityChange = (event) => {
    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: value
    }));
  };

  const handleStockChange = (event) => {
    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      inStock: value
    }));
  };

  const handleShippableChange = (event) => {
    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      isShippable: value
    }));
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSelectAllProducts = (event) => {
    setSelectedProducts(event.target.checked
      ? products.map((product) => product.id)
      : []);
  };

  const handleSelectOneProduct = (event, productId) => {
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    } else {
      setSelectedProducts((prevSelected) => prevSelected.filter((id) => id !== productId));
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
  };

  // Usually query is done on backend with indexing solutions
  const filteredProducts = applyFilters(products, query, filters);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const enableBulkActions = selectedProducts.length > 0;
  const selectedSomeProducts = selectedProducts.length > 0
    && selectedProducts.length < products.length;
  const selectedAllProducts = selectedProducts.length === products.length;

  return (
    <Card {...other}>
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
            onChange={handleQueryChange}
            placeholder="Search products"
            value={query}
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
            onChange={handleSortChange}
            select
            SelectProps={{ native: true }}
            value={sort}
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
            onChange={handleCategoryChange}
            select
            SelectProps={{ native: true }}
            value={filters.category || 'all'}
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
            onChange={handleAvailabilityChange}
            select
            SelectProps={{ native: true }}
            value={filters.availability || 'all'}
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
                checked={!!filters.inStock}
                color="primary"
                name="inStock"
                onChange={handleStockChange}
              />
            )}
            label="In Stock"
          />
        </Box>
        <Box sx={{ m: 2 }}>
          <FormControlLabel
            control={(
              <Switch
                checked={!!filters.isShippable}
                color="primary"
                name="Shippable"
                onChange={handleShippableChange}
              />
            )}
            label="Shippable"
          />
        </Box>
      </Box>
      {enableBulkActions && (
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              backgroundColor: 'background.paper',
              mt: '6px',
              pl: '4px',
              position: 'absolute',
              pr: '4px',
              width: '100%',
              zIndex: 2
            }}
          >
            <Checkbox
              checked={selectedAllProducts}
              color="primary"
              indeterminate={selectedSomeProducts}
              onChange={handleSelectAllProducts}
            />
            <Button
              color="primary"
              sx={{ ml: 2 }}
              variant="outlined"
            >
              Delete
            </Button>
            <Button
              color="primary"
              sx={{ ml: 2 }}
              variant="outlined"
            >
              Edit
            </Button>
          </Box>
        </Box>
      )}
      <Scrollbar>
        <Box sx={{ minWidth: 1200 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAllProducts}
                    color="primary"
                    indeterminate={selectedSomeProducts}
                    onChange={handleSelectAllProducts}
                  />
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
              {paginatedProducts.map((product) => {
                const isProductSelected = selectedProducts.includes(product.id);

                return (
                  <TableRow
                    hover
                    key={product.id}
                    selected={isProductSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isProductSelected}
                        color="primary"
                        onChange={(event) => handleSelectOneProduct(event, product.id)}
                        value={isProductSelected}
                      />
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
                          component={RouterLink}
                          to="#"
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
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredProducts.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </Scrollbar>
    </Card>
  );
};

ProductListTable.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductListTable;
