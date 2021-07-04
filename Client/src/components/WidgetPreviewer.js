import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Divider, IconButton, ThemeProvider } from '@material-ui/core';
import { THEMES } from '../constants';
import useSettings from '../hooks/useSettings';
import MoonIcon from '../icons/Moon';
import SunIcon from '../icons/Sun';
import { createCustomTheme } from '../theme';

const WidgetPreviewer = (props) => {
  const { element, name, ...other } = props;
  const { settings } = useSettings();
  const [selectedTheme, setSelectedTheme] = useState(settings.theme);

  useEffect(() => {
    setSelectedTheme(settings.theme);
  }, [settings.theme]);

  const handleSwitch = () => setSelectedTheme((prevSelectedTheme) => {
    if (prevSelectedTheme === THEMES.LIGHT) {
      if (settings.theme === THEMES.LIGHT) {
        return THEMES.DARK;
      }

      return settings.theme;
    }

    return THEMES.LIGHT;
  });

  const theme = createCustomTheme({
    ...settings,
    theme: selectedTheme
  });

  return (
    <Card
      variant="outlined"
      sx={{ mb: 8 }}
      {...other}
    >
      <CardHeader
        action={(
          <IconButton onClick={handleSwitch}>
            {selectedTheme === 'LIGHT'
              ? <MoonIcon fontSize="small" />
              : <SunIcon fontSize="small" />}
          </IconButton>
        )}
        title={name}
      />
      <Divider />
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </Card>
  );
};

WidgetPreviewer.propTypes = {
  element: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

export default WidgetPreviewer;
