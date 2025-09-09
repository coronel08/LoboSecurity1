import { Helmet } from "react-helmet-async";
import { Box, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import CameraIcon from "@mui/icons-material/CameraAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import MapIcon from "@mui/icons-material/Map";
import Marquee from "react-fast-marquee";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import secGuard from "../assets/secCouple.jpg";
import secGuard from "../assets/lobo-sec-1.jpg";
import lionsgate from "../assets/lionsgate.png";
import appleLogo from "../assets/Apple_logo_black.png";
import sonyLogo from "../assets/Sony_logo.png";
import usaMap from "../assets/USAMAP.jpg";
import AccordionCard from "../Components/AccordionCard";
import GridCard from "../Components/Card";

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  console.log("is small screen", isSmallScreen);

  return (
    <>
      <Helmet>
        <title>Lobo Security</title>
        <meta
          name="description"
          content="patrol security, on-call security, event security, Southern California, Los Angeles, Orange County, San Diego."
        />
        <meta property="og:title" content="Lobo Security" />
        <meta
          property="og:description"
          content="patrol security, on-call security, event security, Southern California, Los Angeles, Orange County, San Diego."
        />
        {/* <meta property="og:image" content="https://yourdomain.com/banner.png" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <Box id="home" component="main">
        <Container
          maxWidth={false}
          className="header-content"
          sx={{ height: { xs: "475px", sm: "500px", lg: "650px" } }}>
          {/* Image section with overlay */}
          <>
            {/* <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${secGuard})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            /> */}
            <Box
              component="img"
              src={secGuard}
              alt="Security"
              className="main-body"
              sx={{ objectPosition: { xs: "center", md: "top" } }} // fine-grained positioning
            />
            {/* Dark Overlay */}
            <Box
              className="main-body-overlay"
              sx={{ backgroundColor: { xs: "rgba(0, 0, 0, 0.6)", md: "rgba(0, 0, 0, 0.7)" } }}
            />
          </>

          {/* Header section content */}
          <Box className="header-container">
            <Box className="header-text-container">
              <Typography variant="h1" sx={{ fontFamily: "Bungee Inline" }}>
                Lobo Security
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ pt: 4 }}>
              Security Patrols Servicing Southern California
            </Typography>
            <PublicIcon className="icon-rock" sx={{ fontSize: 60 }} />
          </Box>
        </Container>

        {/* Body section */}
        <Box component="section" sx={{ background: "white", px: { xs: 3, sm: 2, lg: 20 }, py: 5 }}>
          <Grid container spacing={4}>
            {/* -------- */}
            <GridCard title="On Call Services" icon={<SecurityIcon sx={{ mr: 1 }} />}>
              <Typography variant="body2">
                Our licensed security professionals are available 24/7 to respond quickly to incidents at your property,
                business, or facility. Whether it’s an alarm response or urgent site coverage, our team ensures peace of
                mind when you need it most.
              </Typography>
            </GridCard>
            {/* ---------- */}
            <GridCard title="Weekend Services:" icon={<CalendarIcon sx={{ mr: 1 }} />}>
              <Typography variant="body2">
                We provide reliable weekend and after-hours coverage to protect businesses, warehouses, and commercial
                properties when they are most vulnerable. Our patrol units perform thorough site checks, deter
                trespassers, and maintain a visible presence.
              </Typography>
            </GridCard>
            {/* --------- */}
            <GridCard title="Patrol Checks" icon={<CameraIcon sx={{ mr: 1 }} />}>
              <Typography variant="body2">
                Regular mobile patrols are conducted throughout the night to monitor docks, retail centers, office
                buildings, and industrial yards. Officers document activity, secure access points, and keep detailed
                reports to ensure your property remains protected around the clock.
              </Typography>
            </GridCard>
          </Grid>
        </Box>

        {/* Body Section 2 */}
        <Container className="body2-container">
          <>
            <AccordionCard defaultExpanded={true} title="About Us:">
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "30px",
                }}>
                <Typography>
                  Lobo Security was founded in 2017 by David Guerra, a seasoned professional with over 20 years of
                  hands-on experience in the security industry. After decades of working in the field, David established
                  Lobo Security with a clear mission: to deliver reliable, professional, and community-focused security
                  services tailored to the unique needs of every client.
                </Typography>
                <Typography>
                  Our team is dedicated to protecting businesses,communities, and events throughout Southern California.
                  With a strong emphasis on professionalism, responsiveness, and trust, Lobo Security has become a
                  dependable partner for companies and property owners seeking peace of mind.
                </Typography>
                <Typography>
                  Whether it’s around-the-clock patrols, event coverage, or specialized security solutions, we stand
                  ready to keep your people and property safe.
                </Typography>
              </Box>
            </AccordionCard>
            <AccordionCard defaultExpanded={false} title="Services Offered:">
              <Box sx={{ display: { md: "flex" }, justifyContent: "center", gap: 10 }}>
                <ul>
                  <li>Daily Patrols</li>
                  <li>Safety Escorts</li>
                  <li>Business and Parking lot security</li>
                  <li>Event security specialists</li>
                </ul>
                <ul>
                  <li>Gated and HOA Community</li>
                  <li>Armed/Unarmed Security Guards</li>
                  <li>Shopping Centers/ Warehouses/ Cargo Yard Patrols </li>
                  <li>State Certified Security Specialists</li>
                </ul>
              </Box>
            </AccordionCard>
            <AccordionCard defaultExpanded={false} title="Areas We Serve:">
              <Box sx={{ display: { md: "flex" }, gap: 10, alignItems: "center", justifyContent: "center" }}>
                <Box
                  component="img"
                  className="usa-map-image"
                  src={usaMap}
                  alt="Security team"
                  sx={{ maxWidth: { xs: "100%", md: "500px" } }}
                />
                <ul>
                  <li>Greater Los Angeles County</li>
                  <li>Long Beach County</li>
                  <li>Orange County</li>
                  <li>Riverside County</li>
                  <li>San Diego County</li>
                </ul>
              </Box>
            </AccordionCard>
          </>
        </Container>
        <Box sx={{ paddingY: 10 }}>
          <Typography variant="h3" sx={{ textAlign: "center", pb: 8, px: 1, fontWeight: "800" }}>
            Trusted By:
          </Typography>
          <Marquee gradient={false} speed={50}>
            <Box sx={{ display: "flex", gap: { xs: 20, md: 40 } }}>
              <img src={appleLogo} height="150" />
              <img src={lionsgate} height="150" />
              <img src={sonyLogo} height="150" />
            </Box>
          </Marquee>
        </Box>
      </Box>

      {/* Contact Us */}
      <Box
        id="contact"
        component="section"
        sx={{ background: "white", color: "darkblue", px: { xs: 0, sm: 2, lg: 20 }, py: 5 }}>
        <Divider />
        <Container>
          <Box
            sx={{
              display: { md: "flex" },
              flexDirection: { xs: "column", lg: "row" },
              padding: 2,
              // gap: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h4">
                <PhoneIcon sx={{ mr: 1 }} /> Contact Us
              </Typography>
              <Box sx={{ maxWidth: "350px", height: "auto" }}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Address: </span>
                  <a
                    href="https://www.google.com/maps?q=336+N+Gaffey+St+Floor+2,+San+Pedro,+CA+90731"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}>
                    336 N Gaffey St Floor 2, San Pedro, CA 90731
                  </a>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Phone Number: </span>
                  <a href="tel:+14244775287" style={{ color: "inherit", textDecoration: "none" }}>
                    (424) 477-5287
                  </a>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Email: </span>
                  <a href="mailto:lobo24hrservices@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                    lobo24hrservices@gmail.com
                  </a>
                </p>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h4">
                <MapIcon sx={{ mr: 1 }} /> Map
              </Typography>
              <Box sx={{ width: { xs: "330px", md: "600px" }, height: "300px", border: "2px solid black" }}>
                <MapContainer style={{ height: "100%", width: "100%" }} center={[33.743, -118.2926]} zoom={16}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // attribution="&copy; OpenStreetMap contributors"
                  />
                  <Marker position={[33.743, -118.2926]}>
                    <Popup>
                      <h5>Lobo Security</h5>
                      <p>336 N Gaffey St Floor 2, San Pedro, CA 90731</p>
                    </Popup>
                  </Marker>
                </MapContainer>
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
