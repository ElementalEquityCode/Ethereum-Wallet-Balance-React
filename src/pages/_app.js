import { useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SettingsButton } from "../components/settings-button";
import { SettingsConsumer, SettingsProvider } from "../contexts/settings-context";
import { createTheme } from "../theme";
import { createEmotionCache } from "../utils/create-emotion-cache";

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => (
            <ThemeProvider
              theme={createTheme({
                direction: settings.direction,
                responsiveFontSizes: settings.responsiveFontSizes,
                mode: settings.theme,
              })}
            >
              <CssBaseline />
              <SettingsButton />
              {getLayout(<Component {...pageProps}/>)}
            </ThemeProvider>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
};

export default App;
