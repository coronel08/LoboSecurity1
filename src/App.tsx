// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";
// import { BottomNavigation } from "@mui/material";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}>
          <Navbar />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="*" element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
