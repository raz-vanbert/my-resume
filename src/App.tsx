import EmailIcon from "@mui/icons-material/EmailOutlined";
import FileDownload from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  styled,
  Switch,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  marginLeft: 8,
  width: 62,
  height: 30,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(32px)",
      "& .MuiSwitch-thumb:before": {
        content: '"🌙"',
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fefefe",
    width: 28,
    height: 28,
    borderRadius: 14,
    position: "relative",
    "&:before": {
      content: '"☀️"',
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 34 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#aab4be" : "#8796A5",
  },
}));

export default function App() {
  // State to toggle between light and dark themes
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#009688" },
          secondary: { main: "#ff4081" },
          background: {
            default: darkMode ? "#1a1a1a" : "#f5f5f5", // Off-white for light mode and dark for dark mode
            paper: darkMode ? "#1e1e1e" : "#fafafa", // Slightly darker than white for light mode paper
          },
        },
        typography: { fontFamily: "Roboto, Arial, sans-serif" },
      }),
    [darkMode]
  );

  const handleThemeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Tooltip title="View/Download PDF Resume" arrow>
            <IconButton
              color="inherit"
              href="https://drive.google.com/file/d/1j6gHRMM8OzTXul06z84gKTytXUDYQ60J/view?usp=sharing"
              target="_blank"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <FileDownload />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email Me" arrow>
            <IconButton
              color="inherit"
              href="mailto:raz.chiriac+resume@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.main, // Use theme's primary color for hover
                },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn Profile" arrow>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/razchiriac"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.main, // Use theme's primary color for hover
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <ThemeSwitch
            checked={darkMode}
            onChange={handleThemeChange}
            color="default"
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Header />
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
