import { Box, Button, Typography } from "@mui/material";

export default function WebDevelopment() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Web App Development
      </Typography>
      <Typography variant="body1" paragraph>
        I specialize in building scalable and maintainable web applications
        using React, TypeScript, and modern tools. With over 10 years of
        experience, I can help you develop robust web solutions tailored to your
        business needs.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Services Offered
      </Typography>
      <Typography variant="body1" paragraph>
        • Custom web application development
        <br />
        • Single-page applications (SPAs)
        <br />
        • Progressive web apps (PWAs)
        <br />
        • Responsive design and development
        <br />• API integration and development
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="mailto:raz.chiriac+resume@gmail.com"
        sx={{ mt: 2 }}
      >
        Contact Me
      </Button>
    </Box>
  );
}
