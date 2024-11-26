import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "300",
          textShadow: `inset
            1px 1px 2px rgba(0, 0, 0, 0.4), 
            -1px -1px 2px rgba(255, 255, 255, 0.8)
          `,
          color: "text.primary",
        }}
        gutterBottom
      >
        Hi, I'm Raz
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        I'm a senior software engineer with over 10 years of experience
        specializing in React and TypeScript. I enjoy building web applications
        and games that make a difference.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/services"
          sx={{ mr: 2, mb: 2 }}
        >
          View Consulting Services
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={RouterLink}
          to="/resume"
        >
          View My Resume
        </Button>
      </Box>
    </Box>
  );
}
