import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


const coursePrise = 5500;
const pages = ["Level2", "Course Details", "About Us", "Login"];

const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  console.log(sidebar);
  return (
    <AppBar
    className="backdrop-blur-md min-h-[10vh] mb-0"
      sx={{
        color: "secondary",
        backgroundColor: "black",
        backdropFilter: "blur",
        padding: "20px",
        WebkitBackdropFilter: "20px"
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <div ></div>

          <Box onClick={() => setsidebar(!sidebar)} className="lg:hidden mr-4">
          <MenuIcon size="large"/>
          </Box>
          <Box className="lg:flex-1">
            <Link>
              <Box className="flex items-center gap-2">
                <img src={logo} className="w-8" alt="logo" />
                <h2 className="text-xl font-bold font-primary">M-Hero</h2>
              </Box>
            </Link>
          </Box>
          <Box className="hidden lg:flex items-center gap-2 xl:gap-4" sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block", fontSize:"14px", fontWeight: "600" }}
              >
                {page}
              </Button>
            ))}
            <Box className="flex items-center gap-6 ml-4" >
            <Typography className="flex items-center gap-2 font-bold text-2xl" sx={{fontWeight:"600"}} variant="h6"><FaBangladeshiTakaSign/>{coursePrise}</Typography>
            <Button
              size="small"
              className="bg-gradient-to-r from-blue-500 via-purple-600 text-white h-12"
              sx={{
                color: "white",
                backgroundColor: "primary.dark",
                px: "16px",
                fontWeight:"800",
                fontSize:"16px",
                borderRadius: "5px"
              }}
            >
              Enroll Now
            </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
