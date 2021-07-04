import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography
} from '@material-ui/core';
import ExternalLinkIcon from '../../../icons/ExternalLink';
import InformationCircleIcon from '../../../icons/InformationCircle';

const pages = [
  {
    bounceRate: 16,
    uniqueVisits: 8584,
    url: '/',
    visitors: 95847
  },
  {
    bounceRate: 5,
    uniqueVisits: 648,
    url: '/authentication/login',
    visitors: 7500
  },
  {
    bounceRate: 2,
    uniqueVisits: 568,
    url: '/dashboard',
    visitors: 85406
  },
  {
    bounceRate: 12,
    uniqueVisits: 12322,
    url: '/blog/top-5-react-frameworks',
    visitors: 75050
  },
  {
    bounceRate: 10,
    uniqueVisits: 11645,
    url: '/blog/understand-programming-principles',
    visitors: 68003
  },
  {
    bounceRate: 8,
    uniqueVisits: 10259,
    url: '/blog/design-patterns',
    visitors: 49510
  }
];

const AnalyticsMostVisitedPages = () => (
  <Card>
    <CardHeader
      disableTypography
      title={(
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h6"
          >
            Most Visited Pages
          </Typography>
          <Tooltip title="Refresh rate is 24h">
            <InformationCircleIcon fontSize="small" />
          </Tooltip>
        </Box>
      )}
    />
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Page Name
          </TableCell>
          <TableCell>
            Visitors
          </TableCell>
          <TableCell>
            Unique page visits
          </TableCell>
          <TableCell>
            Bounce rate
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pages.map((page) => (
          <TableRow
            key={page.url}
            sx={{
              '&:last-child td': {
                border: 0
              }
            }}
          >
            <TableCell>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <ExternalLinkIcon
                  fontSize="small"
                  sx={{
                    color: 'text.secondary',
                    cursor: 'pointer'
                  }}
                />
                <Typography
                  color="textPrimary"
                  sx={{ ml: 2 }}
                  variant="body2"
                >
                  {page.url}
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              {numeral(page.visitors).format('0,0')}
            </TableCell>
            <TableCell>
              {numeral(page.uniqueVisits).format('0,0')}
            </TableCell>
            <TableCell>
              {page.bounceRate}
              %
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default AnalyticsMostVisitedPages;
