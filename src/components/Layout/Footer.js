import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: " rgb(40, 52, 56)",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
         
          <Link className="footerlinks" style={{color:"white", padding: "5px",textDecoration:"none", marginLeft:"5PX"}}to="/about"><InfoIcon/></Link>|<Link className="footerlinks" style={{color:"white",padding: "5px",textDecoration:"none"}} to="/contact"><CallIcon/></Link>|
           <Link className="footerlinks" style={{color:"white", padding: "5px",textDecoration:"none"}} to="/"><HomeIcon/></Link>| 
           
           <a style={{color:"white", padding: "5px",textDecoration:"none"}}href="https://www.linkedin.com/in/%C3%A0bhijit-gaikwad-555900202/" target="_blank"> <LinkedInIcon/></a>| 
           <a style={{color:"white", padding: "5px",textDecoration:"none"}}href="https://github.com/AbGaikwad2000" target="_blank"> <GitHubIcon/>  </a>




        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; poweredby- AbTech Solution, India.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;