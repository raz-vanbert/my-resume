import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box py={2} textAlign="center">
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
      >
        Raz Chiriac
      </Typography>
      <Typography variant="subtitle1">Senior Software Engineer</Typography>
    </Box>
  );
}
