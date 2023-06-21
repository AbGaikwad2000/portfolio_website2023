import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import Banner from "../images/bg.jpg";
import resume_photo from "../images/resume_photo.png";

const About = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 3,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <div style={{ color: 'white', width: "220px" , marginLeft: "80px", marginTop: "5px", borderRadius:"5px"}} >
          <img style={{ width: 200, height: 230, border: "2px solid white" }}  src={resume_photo}/>
        </div>
        <Typography variant="h4" color="common.white">Welcome, who i am in brief...</Typography>
        <p style={{ color: 'white'}}>
          Here, I am Abhijit Gaikwad. I would like to describe 
          myself as an Happy and Confident person. Who is always hunger to 
          explore new knowledge. And to be very fact now with lots of eager waiting 
         for real industry exposure, so i can showcase my skill and knowledge of my 
         academics towards the IT industry i am diving in.

        </p>
        <br />
        <p style={{ color: 'white' }}>
         Basically i cay say that exploring knowledge is my hobby, Exploring the knowledge 
         through informative websites, youtube channel, many more where i 
         would find the time to way out there for information. 

        </p>
        <br />
        <p style={{ color: 'white' }}>
         This is all about me, for more information about myself like 
         qualifications and all you can contact via details provided in contact section OR click on - <Link className="footerlinks" style={{color:"white", padding: "8px"}} to="/contact">Contact</Link>
            
         

        </p>
       

      </Box>
      </div>
    </Layout>
  );
};

export default About;