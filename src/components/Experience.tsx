import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Link,
    Typography,
} from "@mui/material";
import { experienceData } from "../experienceData"; // Adjust path if needed

// Function to parse and replace URLs with clickable links
function parseTextWithLinks(text: string) {
  const urlRegex = /([^\s]+\.com)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) =>
    urlRegex.test(part) ? (
      <Link
        href={`https://www.${part}`}
        key={index}
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </Link>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

export default function Experience() {
  return (
    <Box py={2}>
      <Typography variant="h5">Experience</Typography>
      {experienceData.map((job, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box>
              <Typography variant="h6">
                {job.title}, {job.company}
              </Typography>
              <Typography variant="body2">
                {job.location} — {job.duration}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {job.responsibilities.map((resp, idx) => (
              <Typography variant="body1" key={idx}>
                - {parseTextWithLinks(resp)}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
