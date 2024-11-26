import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Website
      </Typography>
      <Typography variant="h5" gutterBottom>
        Delivering digital experiences that are precise, engaging, and
        inclusive.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/resume"
        sx={{ mt: 2 }}
      >
        View My Resume
      </Button>
    </Box>
  );
}
