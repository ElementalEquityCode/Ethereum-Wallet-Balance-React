import PropTypes from "prop-types";
import { List, ListSubheader } from "@mui/material";
import { DashboardSidebarItem } from "./dashboard-sidebar-item";

const renderNavItems = ({ depth = 0, items, path }) => (
  <List disablePadding>
    {items.reduce(
      (acc, item) =>
        reduceChildRoutes({
          acc,
          item,
          depth,
          path,
        }),
      []
    )}
  </List>
);

const reduceChildRoutes = ({ acc, item, depth, path }) => {
  const key = `${item.title}-${depth}`;
  const partialMatch = path.includes(item.path.replace("/", ""));

  acc.push(
    <DashboardSidebarItem
      active={partialMatch}
      chip={item.chip}
      depth={depth}
      icon={item.icon}
      info={item.info}
      key={key}
      path={item.path}
      title={item.title}
    />
  );

  return acc;
};

export const DashboardSidebarSection = (props) => {
  const { items, path, title, ...other } = props;

  return (
    <List
      subheader={
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: "neutral.500",
            fontSize: "0.75rem",
            fontWeight: 700,
            lineHeight: 2.5,
            ml: 4,
            textTransform: "uppercase",
          }}
        >
          {title}
        </ListSubheader>
      }
      {...other}
    >
      {renderNavItems({
        items,
        path,
      })}
    </List>
  );
};

DashboardSidebarSection.propTypes = {
  items: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
