import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import getInitials from '../../../utils/getInitials';

const ProjectMetadata = (props) => {
  const { authorAvatar, authorName, budget, currency, endDate, updatedAt, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader
        avatar={(
          <Avatar
            component={RouterLink}
            src={authorAvatar}
            to="#"
          >
            {getInitials(authorName)}
          </Avatar>
        )}
        disableTypography
        subheader={(
          <Link
            color="textPrimary"
            component={RouterLink}
            to="#"
            underline="none"
            variant="subtitle2"
          >
            {authorName}
          </Link>
        )}
        style={{ paddingBottom: 0 }}
        title={(
          <Typography
            color="textSecondary"
            display="block"
            variant="overline"
          >
            Contest holder
          </Typography>
        )}
      />
      <CardContent sx={{ pt: 0 }}>
        <List>
          <ListItem
            disableGutters
            divider
            sx={{
              justifyContent: 'space-between',
              padding: 2
            }}
          >
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Deadline
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {format(endDate, 'dd MMM yyyy')}
            </Typography>
          </ListItem>
          <ListItem
            disableGutters
            divider
            sx={{
              justifyContent: 'space-between',
              padding: 2
            }}
          >
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Budget
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {numeral(budget).format(`${currency}0,0.00`)}
            </Typography>
          </ListItem>
          <ListItem
            disableGutters
            sx={{
              justifyContent: 'space-between',
              padding: 2
            }}
          >
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Last Update
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {format(updatedAt, 'dd MMM yyyy')}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

ProjectMetadata.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  endDate: PropTypes.number.isRequired,
  updatedAt: PropTypes.number.isRequired
};

export default ProjectMetadata;
