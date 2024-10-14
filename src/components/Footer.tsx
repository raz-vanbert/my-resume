import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box py={2} textAlign="center">
      <Typography variant="body2">
        © {new Date().getFullYear()} Raz Chiriac
      </Typography>
    </Box>
  );
}
