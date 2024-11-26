import EmailIcon from "@mui/icons-material/EmailOutlined";
import FileDownload from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Tooltip,
    useTheme,
} from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ColorModeContext } from "../ThemeContext";
import { ThemeSwitch } from "./ThemeSwitch";

export default function NavBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/resume">
            Resume
          </Button>
          <Box sx={{ flexGrow: 1 }} />
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
            checked={theme.palette.mode === "dark"}
            onChange={colorMode.toggleColorMode}
            color="default"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
