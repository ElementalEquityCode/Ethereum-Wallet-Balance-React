import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Box, Button, ButtonGroup, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import ViewConfigIcon from '@material-ui/icons/ViewComfy';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';

const viewOptions = [
  {
    icon: ViewConfigIcon,
    label: 'Month',
    value: 'dayGridMonth'
  },
  {
    icon: ViewWeekIcon,
    label: 'Week',
    value: 'timeGridWeek'
  },
  {
    icon: ViewDayIcon,
    label: 'Day',
    value: 'timeGridDay'
  },
  {
    icon: ViewAgendaIcon,
    label: 'Agenda',
    value: 'listWeek'
  }
];

const CalendarToolbar = (props) => {
  const { date, onDateNext, onDatePrev, onDateToday, onViewChange, view, ...other } = props;

  const handleViewChange = (newView) => {
    if (onViewChange) {
      onViewChange(newView);
    }
  };

  return (
    <Grid
      alignItems="center"
      container
      justifyContent="space-between"
      spacing={3}
      {...other}
    >
      <Grid item>
        <ButtonGroup size="small">
          <Button onClick={onDatePrev}>
            Prev
          </Button>
          <Button onClick={onDateToday}>
            Today
          </Button>
          <Button onClick={onDateNext}>
            Next
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <Typography
          color="textPrimary"
          variant="h3"
        >
          {format(date, 'MMMM y')}
        </Typography>
      </Grid>
      <Grid item>
        <Box sx={{ color: 'text.primary' }}>
          {viewOptions.map((viewOption) => {
            const Icon = viewOption.icon;

            return (
              <Tooltip
                key={viewOption.value}
                title={viewOption.label}
              >
                <IconButton
                  color={viewOption.value === view
                    ? 'primary'
                    : 'inherit'}
                  onClick={() => handleViewChange(viewOption.value)}
                >
                  <Icon fontSize="small" />
                </IconButton>
              </Tooltip>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

CalendarToolbar.propTypes = {
  children: PropTypes.node,
  date: PropTypes.instanceOf(Date).isRequired,
  onAddClick: PropTypes.func,
  onDateNext: PropTypes.func,
  onDatePrev: PropTypes.func,
  onDateToday: PropTypes.func,
  onViewChange: PropTypes.func,
  view: PropTypes.oneOf([
    'dayGridMonth',
    'timeGridWeek',
    'timeGridDay',
    'listWeek'
  ])
};

export default CalendarToolbar;
