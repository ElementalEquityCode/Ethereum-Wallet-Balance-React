import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import AcademicCapIcon from '../../../icons/AcademicCap';
import BriefcaseIcon from '../../../icons/Briefcase';
import HomeIcon from '../../../icons/Home';
import MailIcon from '../../../icons/Mail';

const DetailsList8 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Card>
      <CardHeader title="About" />
      <Divider />
      <CardContent>
        <Typography
          color="textSecondary"
          variant="subtitle2"
        >
          &quot;
          Everyone thinks of changing the world, but no one thinks of
          changing himself.
          &quot;
        </Typography>
        <List>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar>
              <BriefcaseIcon fontFamily="small" />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={(
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                >
                  Product Designer at
                  {' '}
                  <Link
                    color="textPrimary"
                    href="#"
                    variant="subtitle2"
                  >
                    Devias
                  </Link>
                </Typography>
              )}
              secondary={(
                <Typography
                  color="textSecondary"
                  variant="caption"
                >
                  Past: UX Designer
                  {' '}
                  <Link
                    color="textSecondary"
                    href="#"
                    variant="caption"
                  >
                    Focus Aesthetic Dynamics
                  </Link>
                </Typography>
              )}
            />
          </ListItem>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar>
              <AcademicCapIcon fontSize="small" />
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Link
                  color="textSecondary"
                  sx={{ cursor: 'pointer' }}
                  variant="body2"
                >
                  Add school or collage
                </Link>
              )}
            />
          </ListItem>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar>
              <HomeIcon fontFamily="small" />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={(
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                >
                  Lives in
                  {' '}
                  <Link
                    color="textPrimary"
                    href="#"
                    variant="subtitle2"
                  >
                    Bucharest
                  </Link>
                </Typography>
              )}
              secondary={(
                <Typography
                  color="textSecondary"
                  variant="caption"
                >
                  Originally from
                  {' '}
                  <Link
                    color="textSecondary"
                    href="#"
                    variant="caption"
                  >
                    Rm. Valcea
                  </Link>
                </Typography>
              )}
            />
          </ListItem>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar>
              <MailIcon fontFamily="small" />
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                >
                  katarina.smith@devias.io
                </Typography>
              )}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  </Box>
);

export default DetailsList8;
