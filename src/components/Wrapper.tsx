import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <Container maxWidth="md" sx={{ margin: "0 auto" }}>
        {children}
      </Container>
    </Box>
  );
}
