import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import googlePlay from "../../../assets/googleplay.png"
import appleStore from "../../../assets/applestore.png"
import microSoft from "../../../assets/microsoft1.png"

const Footer = () => {
  return (
    <Box
      className="bg-balck"
      sx={{
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        py: "40px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container  columns={{ xs: 4, sm: 8, md: 12 }} className="p-4" spacing={4}>
          <Grid item className="" xs={4}>
            <Typography sx={{ mb: "10px", fontWeight: "600" }} variant="h6">
              Office Address
            </Typography>
            <div className="space-y-2">
              <Typography variant="body1">
                Level-4, 14, Jaynal Centre, Dhanmondi, Dhaka
              </Typography>
              <Typography variant="body1">Support: Web@m-Hero.Com</Typography>
              <Typography variant="body1">
                Helpline: 013*********, 013********, 015*********
              </Typography>
              <Typography variant="body1">
                (Available: Sat - Thu, 10:00 AM To 7:00 PM)
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ mb: "10px", fontWeight: "600" }} variant="h6">
              Office Address
            </Typography>
            <div className="space-y-4">
              <Link to="/">
                <Typography
                  sx={{ fontWeight: "600", mb: "8px" }}
                  variant="body1"
                >
                  Home
                </Typography>
              </Link>
              <Link to="/">
                <Typography
                  sx={{ fontWeight: "600", mb: "8px" }}
                  variant="body1"
                >
                  About Us
                </Typography>
              </Link>
              <Link to="/">
                <Typography
                  sx={{ fontWeight: "600", mb: "8px" }}
                  variant="body1"
                >
                  Success Page
                </Typography>
              </Link>
              <Link to="/">
                <Typography
                  sx={{ fontWeight: "600", mb: "8px" }}
                  variant="body1"
                >
                  Terms & Conditions
                </Typography>
              </Link>
            </div>
          </Grid>
          <Grid className="text-left lg:text-center" item xs={4}>
            <Typography sx={{ mb: "10px", fontWeight: "600" }} variant="h6">
              Follow Us
            </Typography>
            <div className="flex items-center gap-4 justify-left lg:justify-center my-6">
              <div className="text-xl hover:bg-gray-700 duration-300 border-2 inline-block rounded-full p-2 ">
                <FaFacebookF />
              </div>
              <div className="text-xl hover:bg-gray-700 duration-300 border-2 inline-block rounded-full p-2 ">
                <FaInstagram />
              </div>
              <div className="text-xl hover:bg-gray-700 duration-300 border-2 inline-block rounded-full p-2 ">
                <FaLinkedin />
              </div>
              <div className="text-xl hover:bg-gray-700 duration-300 border-2 inline-block rounded-full p-2 ">
                <FaYoutube />
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
            <Link><img className="w-[120px] border rounded-xl px-2" src={googlePlay} alt="icon" /></Link>
            <Link> <img className="w-[120px] border rounded-xl" src={appleStore} alt="icon" /></Link>
            <Link><img className="w-[120px] rounded-xl p-2 border" src={microSoft} alt="icon" /></Link>
                
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
