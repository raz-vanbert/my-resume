import { Box, Button, Typography } from "@mui/material";

export default function GameDevelopment() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Game Development
      </Typography>
      <Typography variant="body1" paragraph>
        I create interactive games that engage users and enhance learning
        experiences. Whether you need a simple web-based game or a complex
        interactive application, I have the expertise to bring your ideas to
        life.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Services Offered
      </Typography>
      <Typography variant="body1" paragraph>
        • Web-based game development using React and TypeScript
        <br />
        • Educational games and gamification
        <br />
        • Interactive simulations
        <br />• Cross-platform compatibility
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
