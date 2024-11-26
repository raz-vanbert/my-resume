import { Box, Button, Typography } from "@mui/material";

export default function TechnicalConsulting() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Technical Consulting
      </Typography>
      <Typography variant="body1" paragraph>
        With extensive experience in software engineering, I offer technical
        consulting services to help you improve your projects. From best
        practices to architecture design and code reviews, I provide valuable
        insights and solutions.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Services Offered
      </Typography>
      <Typography variant="body1" paragraph>
        • Technical strategy and planning
        <br />
        • Architecture design and optimization
        <br />
        • Code reviews and refactoring
        <br />
        • Mentorship and training for development teams
        <br />• Performance optimization
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
