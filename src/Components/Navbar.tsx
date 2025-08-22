import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import theme, { COLORS } from "../theme";
import logo from "../assets/logo.png";

const pages = ["Home", "Services", "About"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box component={"header"}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Common navbar section */}
            <>
              {/* <AdbIcon sx={{ mr: 1 }} /> */}
              {/* <img src={logo} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  // fontFamily: "orbitron",
                  fontFamily: "Bungee Inline",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}>
                Lobo Security
              </Typography>
            </>
            {/* Desktop Navbar Section*/}
            <>
              <Box sx={{ flexGrow: .2, display: { xs: "none", md: "flex" } }}>
                {pages.map(page => (
                  <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                    {page}
                  </Button>
                ))}
              </Box>
            </>

            {/* Mobile Navbar Section */}
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit">
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}>
                  {pages.map(page => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navbar;
