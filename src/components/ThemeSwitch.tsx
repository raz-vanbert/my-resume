import { styled, Switch } from "@mui/material";

export const ThemeSwitch = styled(Switch)(({ theme }) => ({
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
