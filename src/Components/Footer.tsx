import { BottomNavigation, Typography } from "@mui/material";

function Footer() {
  return (
    <BottomNavigation
      sx={{
        bgcolor: "primary.main", // uses theme color
        color: "primary.contrastText",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography>
        Made by:{" "}
        <a href="http://portfolio.fdlme.com/" style={{ color: "white" }}>
          Fidel Coronel
        </a>
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
