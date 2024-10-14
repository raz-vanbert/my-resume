import { Box, Chip, Stack, Typography } from "@mui/material";
import { skillsData } from "../skillsData"; // Adjust the path as needed

export default function Skills() {
  return (
    <Box py={2}>
      <Typography variant="h5">Technical Skills</Typography>
      <Stack direction="row" gap={1} flexWrap="wrap" mt={2}>
        {skillsData.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
}
