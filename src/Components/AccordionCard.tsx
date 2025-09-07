import { type ReactNode } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  defaultExpanded: boolean;
  title: string;
  children: ReactNode;
};

function AccordionCard({ defaultExpanded, title, children }: Props) {
  return (
    <Accordion defaultExpanded={defaultExpanded} sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={title} id={title}>
        <Typography variant="h3">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default AccordionCard;
