import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, ReactNode, useMemo, useState } from "react";

interface ThemeContextProps {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ThemeContextProps>({
  toggleColorMode: () => {},
});

export default function CustomThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#009688" },
          secondary: { main: "#ff4081" },
          background: {
            default: mode === "light" ? "#f5f5f5" : "#1a1a1a",
            paper: mode === "light" ? "#fafafa" : "#1e1e1e",
          },
        },
        typography: { fontFamily: "Roboto, Arial, sans-serif" },
        components: {
          MuiIconButton: {
            styleOverrides: {
              root: {
                borderRadius: "4px",
                "&:hover": {
                  color: "#009688",
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                "&:hover": {
                  color: "#009688",
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
