import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import CameraIcon from "@mui/icons-material/CameraAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Marquee from "react-fast-marquee";

import secGuard from "../assets/security.png";
import lionsgate from "../assets/lionsgate.png";
import appleLogo from "../assets/Apple_logo_black.png";
import sonyLogo from "../assets/Sony_logo.png";

function Home() {
  return (
    <>
      <Helmet>
        <title>Cloud 6 Software Development</title>
        <meta name="description" content="Modern web and software development consulting." />
        <meta property="og:title" content="Cloud6 Software Development" />
        <meta property="og:description" content="Full-stack and cloud-native software solutions." />
        <meta property="og:image" content="https://yourdomain.com/banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <Box component="main">
        <Container
          maxWidth={false}
          sx={{
            height: { xs: "300px", sm: "500px" },
            textAlign: "center",
            position: "relative",
            pt: 8,
          }}>
          {/* Image section with overlay */}
          <>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${secGuard})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            />
            {/* Dark Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                // background: "rgba(0, 0, 0, 0.7)", // 0.5 = 50% opacity
                backgroundColor: {
                  xs: "rgba(0, 0, 0, 0.4)", // lighter on mobile
                  md: "rgba(0, 0, 0, 0.7)", // darker on desktop
                },
                zIndex: 1,
              }}
            />
          </>

          {/* Header section content */}
          <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap", // fallback on small screens
              }}>
              <Typography variant="h1" sx={{ fontFamily: "Bungee Inline" }}>
                Lobo Security
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ pt: 4 }}>
              Security Patrols Servicing Southern California
            </Typography>
            <PublicIcon
              sx={{
                fontSize: 60,
                animation: "rock 1s ease-in-out infinite alternate",
                "@keyframes rock": {
                  from: { transform: "rotateY(0deg)" },
                  to: { transform: "rotateY(360deg)" },
                },
                mt: 4,
              }}
            />
          </Box>
        </Container>

        {/* Body section */}
        <Box component="section" sx={{ background: "white", color: "darkblue", px: { xs: 3, sm: 2, lg: 20 }, py: 5 }}>
          <Grid container spacing={4}>
            {/* -------- */}
            <GridCard>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Typography variant="h5" gutterBottom>
                  On Call Services
                </Typography>
                <SecurityIcon sx={{ mr: 1 }} />
              </Box>
              <Typography variant="body2">
                Our licensed security professionals are available 24/7 to respond quickly to incidents at your property,
                business, or facility. Whether it’s an alarm response or urgent site coverage, our team ensures peace of
                mind when you need it most.
              </Typography>
            </GridCard>
            {/* ---------- */}
            <GridCard>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Typography variant="h5" gutterBottom>
                  Weekend Services
                </Typography>
                <CalendarIcon sx={{ mr: 1 }} />
              </Box>
              <Typography variant="body2">
                We provide reliable weekend and after-hours coverage to protect businesses, warehouses, and commercial
                properties when they are most vulnerable. Our patrol units perform thorough site checks, deter
                trespassers, and maintain a visible presence.
              </Typography>
            </GridCard>
            {/* --------- */}
            <GridCard>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Typography variant="h5" gutterBottom color="">
                  Patrol Checks
                </Typography>
                <CameraIcon sx={{ mr: 1 }} />
              </Box>
              <Typography variant="body2">
                Regular mobile patrols are conducted throughout the night to monitor docks, retail centers, office
                buildings, and industrial yards. Officers document activity, secure access points, and keep detailed
                reports to ensure your property remains protected around the clock.
              </Typography>
            </GridCard>
          </Grid>
        </Box>

        {/* Body Section 2 */}
        <Container sx={{ paddingY: "20px" }}>
          <>
            <Accordion defaultExpanded sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="security-services-offered"
                id="security-services-offered">
                <Typography variant="h4">Security Services Offered</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: { md: "flex" }, gap: 30 }}>
                  <ul>
                    <li>Daily Patrols</li>
                    <li>Safety Escorts</li>
                    <li>Business and Parking lot security</li>
                    <li>Event security specialists</li>
                  </ul>
                  <ul>
                    <li>Gated and HOA Community</li>
                    <li>Armed Security Guards</li>
                    <li>Unarmed Security Guards</li>
                    <li>State Certified Security Specialists</li>
                  </ul>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="areas-we-serve" id="areas-we-serve">
                <Typography variant="h4">Areas We Serve</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Greater Los Angeles County</li>
                  <li>Long Beach County</li>
                  <li>Orange County</li>
                  <li>Riverside County</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </>
        </Container>
        <Box sx={{ paddingY: 3 }}>
          <Marquee gradient={false} speed={50}>
            <Box sx={{ display: "flex", gap: 10 }}>
              <img src={appleLogo} height="150" />
              <img src={lionsgate} height="150" />
              <img src={sonyLogo} height="150" />
            </Box>
          </Marquee>
        </Box>
      </Box>

      {/* Contact Us */}
      <Box component="section" sx={{ background: "white", color: "darkblue", px: { xs: 3, sm: 2, lg: 20 }, py: 5 }}>
        <Divider />
        <Container>
          <Box sx={{ display: { md: "flex" }, flexDirection:{xs:'column', lg:'row'}, padding: 3, gap: 10, alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h4">Info</Typography>
              <Box sx={{ width: "300px", height: "300px", border: "2px solid black" }}>
                <p>Test</p>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h4">Contact Us</Typography>
              <Box sx={{ width: "300px", height: "300px", border: "2px solid black" }}>
                <p>Test</p>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h4">Map</Typography>
              <Box sx={{ width: "300px", height: "300px", border: "2px solid black" }}>
                <p>Test</p>
              </Box>
            </Box>
          </Box>
        </Container>
        <Divider />
      </Box>
    </>
  );
}

export default Home;

type GridCardProps = {
  children: React.ReactNode;
};

function GridCard({ children }: GridCardProps) {
  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // optional: center content vertically
        }}>
        {children}
      </Paper>
    </Grid>
  );
}
