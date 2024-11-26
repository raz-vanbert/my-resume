// src/pages/Services.tsx
import { Build, Code, SportsEsports } from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Web App Development",
      description:
        "Building scalable and maintainable web applications using React, TypeScript, and modern tools.",
      icon: <Code fontSize="large" />,
      link: "/services/web-development",
    },
    {
      title: "Game Development",
      description:
        "Creating interactive games that engage users and enhance learning experiences.",
      icon: <SportsEsports fontSize="large" />,
      link: "/services/game-development",
    },
    {
      title: "Technical Consulting",
      description:
        "Providing expertise in best practices, architecture design, and code reviews to improve your projects.",
      icon: <Build fontSize="large" />,
      link: "/services/technical-consulting",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Consulting Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 2,
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{service.icon}</Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={RouterLink} to={service.link}>
                  Learn More
                </Button>
                <Button size="small" href="mailto:raz.chiriac+resume@gmail.com">
                  Contact Me
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
